import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dist = "dist";
const sitemapPath = join(dist, "sitemap.xml");
const robotsPath = join(dist, "robots.txt");
const feedPath = join(dist, "feed.xml");
const manifestPath = join(dist, "site.webmanifest");

const read = (file) => readFileSync(file, "utf8");
const matchAll = (text, regex) => [...text.matchAll(regex)].map((match) => match[1]);
const fail = (message) => {
  throw new Error(message);
};

const files = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });

const sitemap = read(sitemapPath);
const locs = matchAll(sitemap, /<loc>(.*?)<\/loc>/g).map((loc) => new URL(loc));
if (locs.length < 40) fail(`sitemap has too few URLs: ${locs.length}`);

const origin = locs[0].origin;
const feed = read(feedPath);
const feedItems = (feed.match(/<item>/g) ?? []).length;
const manifest = JSON.parse(read(manifestPath));
if (!feed.includes("<rss version=\"2.0\">")) fail("feed.xml must be RSS 2.0");
if (feedItems < 20) fail(`feed.xml has too few items: ${feedItems}`);
if (!manifest.theme_color) fail("site.webmanifest must define theme_color");
if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) fail("site.webmanifest must define at least one icon");
for (const icon of manifest.icons) {
  if (!icon.src || !existsSync(join(dist, new URL(icon.src, origin).pathname))) {
    fail(`site.webmanifest icon is missing: ${icon.src}`);
  }
}
for (const loc of locs) {
  if (loc.origin !== origin) fail(`mixed sitemap origin: ${loc.href}`);
  if (!loc.pathname.endsWith("/")) fail(`sitemap URL must be slash-normalized: ${loc.href}`);
}

const sitemapUrls = new Set(locs.map((loc) => loc.href));
const robots = read(robotsPath);
if (!robots.includes("Allow: /")) fail("robots.txt must allow crawling");
if (robots.includes("Disallow: /")) fail("robots.txt blocks the whole site");
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) fail("robots.txt sitemap URL does not match sitemap origin");

const expectedFileFor = (url) => {
  const pathname = new URL(url).pathname;
  return pathname === "/" ? join(dist, "index.html") : join(dist, pathname, "index.html");
};

for (const url of sitemapUrls) {
  const expected = expectedFileFor(url);
  if (!existsSync(expected)) fail(`sitemap URL has no built file: ${url}`);
}

const htmlFiles = files(dist).filter((file) => file.endsWith(".html") && !file.endsWith(`${sep}404.html`));
const seenTitles = new Map();

for (const file of htmlFiles) {
  const html = read(file);
  const label = relative(dist, file);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="(.*?)"/)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const robotsMeta = html.match(/<meta name="robots" content="(.*?)"/)?.[1] ?? "";
  const themeColor = html.match(/<meta name="theme-color" content="(.*?)"/)?.[1];
  const ogUrl = html.match(/<meta property="og:url" content="(.*?)"/)?.[1];
  const ogImage = html.match(/<meta property="og:image" content="(.*?)"/)?.[1];
  const jsonLd = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  const h1Count = (html.match(/<h1\b/g) ?? []).length;

  if (!title) fail(`${label}: missing title`);
  if (title.length > 90) fail(`${label}: title is too long (${title.length})`);
  if (seenTitles.has(title)) fail(`${label}: duplicate title also used by ${seenTitles.get(title)}`);
  seenTitles.set(title, label);

  if (!description || description.length < 50 || description.length > 180) {
    fail(`${label}: description length must be 50-180 chars`);
  }
  if (!canonical) fail(`${label}: missing canonical`);
  if (!sitemapUrls.has(canonical)) fail(`${label}: canonical not listed in sitemap: ${canonical}`);
  const ownPath = `/${relative(dist, file).replaceAll("\\", "/").replace(/index\.html$/, "")}`;
  const ownUrl = new URL(ownPath === "/" ? "/" : ownPath, origin).toString();
  if (!html.includes(`rel="alternate" type="application/rss+xml"`)) fail(`${label}: missing RSS alternate link`);
  if (themeColor !== manifest.theme_color) fail(`${label}: theme-color must match site.webmanifest`);
  if (robotsMeta.toLowerCase().includes("noindex")) {
    if (sitemapUrls.has(ownUrl)) fail(`${label}: sitemap URL contains noindex`);
    if (canonical === ownUrl) fail(`${label}: self-canonical page contains noindex`);
  }
  if (h1Count !== 1) fail(`${label}: expected exactly one h1, found ${h1Count}`);
  if (ogUrl !== canonical) fail(`${label}: og:url must match canonical`);
  if (!ogImage?.startsWith(`${origin}/`)) fail(`${label}: og:image must be same-origin absolute URL`);
  if (!html.includes('name="twitter:card" content="summary_large_image"')) fail(`${label}: missing Twitter large image card`);
  if (!jsonLd) fail(`${label}: missing JSON-LD`);

  const imagePath = join(dist, new URL(ogImage).pathname);
  if (!existsSync(imagePath)) fail(`${label}: OG image asset is missing: ${new URL(ogImage).pathname}`);

  const schema = JSON.parse(jsonLd);
  if (!Array.isArray(schema)) fail(`${label}: JSON-LD must be an array`);
  if (!schema.some((item) => item["@type"] === "Organization")) fail(`${label}: missing Organization schema`);
}

console.log(`Indexability check passed: ${htmlFiles.length} pages, ${sitemapUrls.size} sitemap URLs.`);
