import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dist = "dist";
const sitemapPath = join(dist, "sitemap.xml");
const robotsPath = join(dist, "robots.txt");

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
  if (robotsMeta.toLowerCase().includes("noindex")) fail(`${label}: contains noindex`);
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
