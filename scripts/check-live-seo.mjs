import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const siteFile = readFileSync("src/data/site.ts", "utf8");
const configuredUrl = siteFile.match(/url:\s*"([^"]+)"/)?.[1];
const base = (process.env.SITE_URL ?? configuredUrl)?.replace(/\/$/, "");

if (!base) throw new Error("Missing site URL. Set SITE_URL or src/data/site.ts site.url.");

const corePaths = [
  "/",
  "/gta-6/",
  "/gta-6/features/",
  "/gta-6/database/",
  "/gta-6/database/vehicles/",
  "/gta-6/database/characters/",
  "/gta-6/database/locations/",
  "/gta-6/database/editions/",
  "/about/",
  "/guides/",
  "/release/",
  "/guides/is-gta-6-coming-to-pc/",
  "/guides/gta-6-release-date-countdown-preload/"
];

const fail = (message) => {
  throw new Error(message);
};

const fetchText = (url) => {
  try {
    return execFileSync(process.platform === "win32" ? "curl.exe" : "curl", [
      "--fail",
      "--silent",
      "--show-error",
      "--location",
      "--header",
      "Cache-Control: no-cache",
      "--max-time",
      "30",
      url
    ], { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
  } catch (error) {
    fail(`${url}: curl failed (${error.status ?? "unknown"})`);
  }
};

const fetchHeaders = (url) => {
  try {
    return execFileSync(process.platform === "win32" ? "curl.exe" : "curl", [
      "--fail",
      "--silent",
      "--show-error",
      "--location",
      "--head",
      "--max-time",
      "30",
      url
    ], { encoding: "utf8", maxBuffer: 1024 * 1024 }).toLowerCase();
  } catch (error) {
    fail(`${url}: curl headers failed (${error.status ?? "unknown"})`);
  }
};

const fetchStatus = (url) => {
  try {
    return execFileSync(process.platform === "win32" ? "curl.exe" : "curl", [
      "--silent",
      "--show-error",
      "--location",
      "--output",
      process.platform === "win32" ? "NUL" : "/dev/null",
      "--write-out",
      "%{http_code}",
      "--max-time",
      "30",
      url
    ], { encoding: "utf8", maxBuffer: 1024 * 1024 }).trim();
  } catch (error) {
    fail(`${url}: curl status failed (${error.status ?? "unknown"})`);
  }
};

const homepageHeaders = fetchHeaders(`${base}/`);
for (const header of [
  "strict-transport-security:",
  "content-security-policy:",
  "x-content-type-options: nosniff",
  "x-frame-options: deny",
  "referrer-policy: strict-origin-when-cross-origin",
  "permissions-policy:"
]) {
  if (!homepageHeaders.includes(header)) fail(`homepage missing live security header: ${header}`);
}
if (!homepageHeaders.includes("frame-ancestors 'none'")) fail("live CSP must deny framing");
if (!homepageHeaders.includes("object-src 'none'")) fail("live CSP must deny plugins");

for (const [path, contentType] of [
  ["/robots.txt", "content-type: text/plain"],
  ["/sitemap.xml", "content-type: application/xml"],
  ["/feed.xml", "content-type: application/xml"],
  ["/site.webmanifest", "content-type: application/manifest+json"],
  ["/.well-known/security.txt", "content-type: text/plain"]
]) {
  if (!fetchHeaders(`${base}${path}`).includes(contentType)) fail(`${path} missing live ${contentType}`);
}

const securityTxt = fetchText(`${base}/.well-known/security.txt`);
if (!securityTxt.includes(`Contact: ${base}/contact/`)) fail("security.txt contact URL does not match site.url");
if (!securityTxt.includes(`Policy: ${base}/editorial-policy/`)) fail("security.txt policy URL does not match site.url");
const securityExpires = securityTxt.match(/^Expires:\s*(.+)$/m)?.[1];
if (!securityExpires || Number.isNaN(Date.parse(securityExpires))) fail("security.txt Expires is missing or invalid");
if (Date.parse(securityExpires) <= Date.now()) fail("security.txt Expires is not in the future");

const robots = fetchText(`${base}/robots.txt`);
if (!robots.includes("Allow: /")) fail("robots.txt must allow crawling");
if (robots.includes("Disallow: /")) fail("robots.txt blocks the whole site");
if (!robots.includes(`Sitemap: ${base}/sitemap.xml`)) fail("robots.txt sitemap does not match site.url");

const sitemap = fetchText(`${base}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (urls.length < 40) fail(`sitemap has too few URLs: ${urls.length}`);

const feed = fetchText(`${base}/feed.xml`);
const feedItems = (feed.match(/<item>/g) ?? []).length;
if (!feed.includes("<rss version=\"2.0\">")) fail("feed.xml must be RSS 2.0");
if (feedItems < 20) fail(`feed.xml has too few items: ${feedItems}`);

const manifest = JSON.parse(fetchText(`${base}/site.webmanifest`));
if (!manifest.theme_color) fail("site.webmanifest must define theme_color");
if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) fail("site.webmanifest must define at least one icon");
for (const icon of manifest.icons) {
  if (!icon.src) fail("site.webmanifest icon is missing src");
  fetchText(new URL(icon.src, base).toString());
}

const sitemapSet = new Set(urls);
for (const path of corePaths) {
  const url = `${base}${path}`;
  if (!sitemapSet.has(url)) fail(`core URL missing from sitemap: ${url}`);
}

const missingUrl = `${base}/__missing-seo-smoke-test__/`;
if (sitemapSet.has(missingUrl)) fail(`missing smoke URL must stay out of sitemap: ${missingUrl}`);
if (fetchStatus(missingUrl) !== "404") fail(`${missingUrl}: missing URL must return 404`);

for (const [path, canonicalPath] of [["/database/", "/gta-6/database/"]]) {
  const url = `${base}${path}`;
  const canonical = `${base}${canonicalPath}`;
  if (sitemapSet.has(url)) fail(`legacy URL must stay out of sitemap: ${url}`);
  const html = fetchText(url);
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) fail(`${url}: missing legacy canonical`);
  if (!/<meta name="robots" content="[^"]*noindex/i.test(html)) fail(`${url}: missing noindex`);
}

for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.origin !== base) fail(`sitemap URL has wrong origin: ${url}`);
  if (!parsed.pathname.endsWith("/")) fail(`sitemap URL is not slash-normalized: ${url}`);
  fetchText(url);
}

for (const path of corePaths) {
  const url = `${base}${path}`;
  const html = fetchText(url);
  if (!html.includes(`<link rel="canonical" href="${url}"`)) fail(`${url}: missing matching canonical`);
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) fail(`${url}: contains noindex`);
  if (!html.includes('type="application/ld+json"')) fail(`${url}: missing JSON-LD`);
  if (!html.includes('rel="alternate" type="application/rss+xml"')) fail(`${url}: missing RSS alternate link`);
  if (!html.includes('rel="manifest" href="/site.webmanifest"')) fail(`${url}: missing manifest link`);
  if (!html.includes(`<meta name="theme-color" content="${manifest.theme_color}"`)) fail(`${url}: theme-color does not match manifest`);
}

console.log(`Live SEO check passed: ${urls.length} sitemap URLs at ${base}.`);
