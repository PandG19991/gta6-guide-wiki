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

const sitemapSet = new Set(urls);
for (const path of corePaths) {
  const url = `${base}${path}`;
  if (!sitemapSet.has(url)) fail(`core URL missing from sitemap: ${url}`);
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
}

console.log(`Live SEO check passed: ${urls.length} sitemap URLs at ${base}.`);
