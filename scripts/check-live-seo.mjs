import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const siteFile = readFileSync("src/data/site.ts", "utf8");
const configuredUrl = siteFile.match(/url:\s*"([^"]+)"/)?.[1];
const base = (process.env.SITE_URL ?? configuredUrl)?.replace(/\/$/, "");
const today = new Date().toLocaleDateString("sv-SE");

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
  "/guides/gta-6-pre-order-standard-vs-ultimate/",
  "/guides/gta-6-map-leonida-regions-locations/",
  "/guides/gta-6-characters-official-cast/",
  "/guides/is-gta-6-coming-to-pc/",
  "/guides/gta-6-release-date-countdown-preload/"
];

const fail = (message) => {
  throw new Error(message);
};

const normalizePath = (url) => {
  const pathname = new URL(url).pathname.replace(/\/+/g, "/");
  return pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
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

const fetchRedirectHeaders = (url) => {
  try {
    return execFileSync(process.platform === "win32" ? "curl.exe" : "curl", [
      "--silent",
      "--show-error",
      "--head",
      "--max-redirs",
      "0",
      "--max-time",
      "30",
      url
    ], { encoding: "utf8", maxBuffer: 1024 * 1024 }).toLowerCase();
  } catch (error) {
    fail(`${url}: curl redirect check failed (${error.status ?? "unknown"})`);
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
const wildcardRobotGroups = robots
  .split(/\r?\n\s*\r?\n/)
  .filter((group) => /^User-agent:\s*\*\s*$/im.test(group));
if (!wildcardRobotGroups.some((group) => /^Allow:\s*\/\s*$/im.test(group))) {
  fail("robots.txt must allow crawling");
}
if (wildcardRobotGroups.some((group) => /^Disallow:\s*\/\s*$/im.test(group))) {
  fail("robots.txt blocks the whole site");
}
if (!robots.includes(`Sitemap: ${base}/sitemap.xml`)) fail("robots.txt sitemap does not match site.url");

const sitemap = fetchText(`${base}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const lastmods = [...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((match) => match[1]);
if (urls.length === 0) fail("sitemap must contain at least one URL");
const livePaths = urls.map(normalizePath);
if (new Set(livePaths).size !== livePaths.length) fail("sitemap must not contain duplicate paths");
if (lastmods.length !== urls.length) fail("sitemap must define one lastmod per URL");
for (const lastmod of lastmods) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) fail(`sitemap lastmod must use YYYY-MM-DD: ${lastmod}`);
  const timestamp = Date.parse(`${lastmod}T00:00:00`);
  if (Number.isNaN(timestamp)) fail(`sitemap lastmod is invalid: ${lastmod}`);
  if (lastmod > today) fail(`sitemap lastmod is in the future: ${lastmod}`);
}

const localSitemap = readFileSync("dist/sitemap.xml", "utf8");
const localUrls = [...localSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (localUrls.length === 0) fail("local dist sitemap must contain at least one URL");
const localPaths = localUrls.map(normalizePath);
if (new Set(localPaths).size !== localPaths.length) fail("local dist sitemap must not contain duplicate paths");
const livePathSet = new Set(livePaths);
const localPathSet = new Set(localPaths);
const missingLivePaths = localPaths.filter((path) => !livePathSet.has(path));
const extraLivePaths = livePaths.filter((path) => !localPathSet.has(path));
if (missingLivePaths.length || extraLivePaths.length) {
  fail(`live sitemap differs from local dist (missing: ${missingLivePaths.join(", ") || "none"}; extra: ${extraLivePaths.join(", ") || "none"})`);
}

const feed = fetchText(`${base}/feed.xml`);
const feedItems = (feed.match(/<item>/g) ?? []).length;
if (!feed.includes("<rss version=\"2.0\">")) fail("feed.xml must be RSS 2.0");
if (feedItems === 0) fail("feed.xml must contain at least one item");

const manifest = JSON.parse(fetchText(`${base}/site.webmanifest`));
if (!manifest.theme_color) fail("site.webmanifest must define theme_color");
if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) fail("site.webmanifest must define at least one icon");
for (const icon of manifest.icons) {
  if (!icon.src) fail("site.webmanifest icon is missing src");
  fetchText(new URL(icon.src, base).toString());
}

const sitemapSet = new Set(urls);
const checkedImages = new Set();

const feedLinks = [...feed.matchAll(/<link>(.*?)<\/link>/g)].map((match) => match[1]);
for (const link of feedLinks) {
  if (link === base || link === `${base}/`) continue;
  if (!link.startsWith(`${base}/`)) fail(`feed link has wrong origin: ${link}`);
  if (!sitemapSet.has(link)) fail(`feed link missing from sitemap: ${link}`);
}

for (const path of corePaths) {
  const url = `${base}${path}`;
  if (!sitemapSet.has(url)) fail(`core URL missing from sitemap: ${url}`);
}

const missingUrl = `${base}/__missing-seo-smoke-test__/`;
if (sitemapSet.has(missingUrl)) fail(`missing smoke URL must stay out of sitemap: ${missingUrl}`);
if (fetchStatus(missingUrl) !== "404") fail(`${missingUrl}: missing URL must return 404`);

const canonicalUrl = new URL(base);
const redirectOrigins = [
  `http://${canonicalUrl.host}`,
  "https://leonida-ledger.pandg1991.workers.dev"
];
if (!canonicalUrl.hostname.startsWith("www.")) {
  redirectOrigins.push(`https://www.${canonicalUrl.host}`);
}
for (const origin of redirectOrigins) {
  const aliasProbe = new URL("/__host-redirect-check__/?source=seo", origin);
  const headers = fetchRedirectHeaders(aliasProbe.toString());
  if (!/^http\/\S+ 301\b/m.test(headers)) fail(`${aliasProbe}: expected a 301 redirect`);
  const location = headers.match(/^location:\s*(.+)$/m)?.[1]?.trim();
  if (!location || location !== `${base}${aliasProbe.pathname}${aliasProbe.search}`) {
    fail(`${aliasProbe}: redirect target must preserve the path and query on the canonical origin`);
  }
}

for (const [path, canonicalPath] of [["/database/", "/gta-6/database/"]]) {
  const url = `${base}${path}`;
  const canonical = `${base}${canonicalPath}`;
  if (sitemapSet.has(url)) fail(`legacy URL must stay out of sitemap: ${url}`);
  const html = fetchText(url);
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) fail(`${url}: missing legacy canonical`);
  if (!/<meta name="robots" content="[^"]*noindex/i.test(html)) fail(`${url}: missing noindex`);
}

const redirectPaths = new Map([
  ["/guides/gta-6-price-standard-ultimate-explained/", "/guides/gta-6-pre-order-standard-vs-ultimate/"],
  ["/guides/gta-6-gta-plus-preorder-benefit/", "/guides/gta-6-pre-order-standard-vs-ultimate/"],
  ["/guides/gta-6-physical-vs-digital-preorder/", "/guides/gta-6-pre-order-standard-vs-ultimate/"],
  ["/guides/gta-6-vintage-vice-city-pack/", "/guides/gta-6-pre-order-standard-vs-ultimate/"],
  ["/guides/gta-6-map-leonida-regions-evidence-tracker/", "/guides/gta-6-map-leonida-regions-locations/"],
  ["/guides/gta-6-grassrivers-location-guide/", "/guides/gta-6-map-leonida-regions-locations/"],
  ["/guides/gta-6-port-gellhorn-location-guide/", "/guides/gta-6-map-leonida-regions-locations/"]
]);

for (const [path, target] of redirectPaths) {
  const url = `${base}${path}`;
  if (sitemapSet.has(url)) fail(`redirect URL must stay out of sitemap: ${url}`);
  const headers = fetchRedirectHeaders(url);
  if (!/^http\/\S+ 301\b/m.test(headers)) fail(`${url}: expected a 301 redirect`);
  const location = headers.match(/^location:\s*(.+)$/m)?.[1]?.trim();
  if (!location || new URL(location, base).pathname !== target) {
    fail(`${url}: redirect target is incorrect`);
  }
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
  const jsonLd = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  if (!jsonLd) fail(`${url}: missing JSON-LD`);
  const schema = JSON.parse(jsonLd);
  if (!Array.isArray(schema)) fail(`${url}: JSON-LD must be an array`);
  const schemaTypes = schema.map((item) => item["@type"]);
  if (!schemaTypes.includes("Organization")) fail(`${url}: missing Organization schema`);
  if (!schemaTypes.includes("WebSite")) fail(`${url}: missing WebSite schema`);
  const isArticle = path === "/release/" || /^\/guides\/[^/]+\/$/.test(path);
  if (isArticle) {
    if (!schemaTypes.includes("Article")) fail(`${url}: missing Article schema`);
    if (!schemaTypes.includes("BreadcrumbList")) fail(`${url}: missing BreadcrumbList schema`);
    const articleSchema = schema.find((item) => item["@type"] === "Article");
    if (!articleSchema?.image) fail(`${url}: missing Article image`);
    if (articleSchema.inLanguage !== "en-US") fail(`${url}: missing Article inLanguage`);
  }
  if (!html.includes('rel="alternate" type="application/rss+xml"')) fail(`${url}: missing RSS alternate link`);
  if (!html.includes('rel="manifest" href="/site.webmanifest"')) fail(`${url}: missing manifest link`);
  if (!html.includes(`<meta name="theme-color" content="${manifest.theme_color}"`)) fail(`${url}: theme-color does not match manifest`);
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  const ogWidth = Number(html.match(/<meta property="og:image:width" content="(\d+)"/)?.[1]);
  const ogHeight = Number(html.match(/<meta property="og:image:height" content="(\d+)"/)?.[1]);
  if (!ogImage?.startsWith(`${base}/`)) fail(`${url}: og:image must be same-origin`);
  if (ogWidth < 600 || ogHeight < 315) fail(`${url}: og:image dimensions are too small`);
  if (/^\/guides\/[^/]+\/$/.test(path) && !ogImage.includes("/_astro/")) {
    fail(`${url}: guide must use approved primary media for social previews`);
  }
  if (!checkedImages.has(ogImage)) {
    if (!fetchHeaders(ogImage).includes("content-type: image/")) fail(`${ogImage}: og:image must be served as an image`);
    checkedImages.add(ogImage);
  }
}

console.log(`Live SEO check passed: ${urls.length} sitemap URLs at ${base}.`);
