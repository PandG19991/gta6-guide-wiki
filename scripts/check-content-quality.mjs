import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const failures = [];
const prohibitedPublicCopy = [
  "Search Terms Covered",
  "Page Status",
  "Verification Plan",
  "Content Engine",
  "Next Queue",
  "Machine Feeds",
  "Sitemap URLs",
  "Evidence Table",
  "built for search traffic",
  "SEO sludge",
  "Site source ledger refreshed",
  "Publishing Priorities",
  "Publication Queue",
  "Launch Queue",
  "Source Ledger",
  "Ledger Updates",
  "Testing Protocol",
  "Site Mode",
  "Category Rule",
  "Update trigger",
  "test plans",
  "broad search intent",
  "Search-intent pages",
  "Filter by search phase",
  "Launch checklist",
  "what must be tested",
  "Launch use",
  "Why no model spam?",
  "What stays out?",
  "for search users",
  "source-led table",
  "launch-week fields",
  "launch-week buyer checks",
  "verification needs",
  "verification targets",
  "testing targets",
  "repeatable launch tests",
  "hands-on verification",
  "thumbnail licensing",
  "original thumbnails",
  "licensed screenshots",
  "plan testing",
  "repeatable wanted-level tests",
  "remain launch-week questions",
  "before official item lists are stable",
  "Future map markers",
  "matches player search paths",
  "Product Plan",
  "roadmap",
  "launch testing",
  "launch-week testing",
  "will be tested",
  "test after launch",
  "verify after launch",
  "verification workflow",
  "editorial methodology",
  "editorial workflow",
  "next work",
  "next pass",
  "future update",
  "planned layer",
  "planned guide",
  "future thumbnail",
  "licensing",
  "record count",
  "database count",
  "coverage target",
  "content target",
  "search intent",
  "search phase",
  "status tracker",
  "publishing",
  "non-leak version",
  "launch-week unknowns",
  "launch-week vehicle notes",
  "individual vehicle pages open",
  "interactive map layer is planned",
  "interactive marker layer will only use",
  "map hub before launch",
  "future interactive map markers",
  "future neighborhood-by-neighborhood guides",
  "wait for official or tested location data",
  "future internal-link hub",
  "will collect verified Keys markers",
  "future tested mission",
  "Future sections will separate",
  "future mission/walkthrough links",
  "launch-week walkthrough planning",
  "launch-week test plans",
  "A pre-launch map hub",
  "A pre-launch region page",
  "tracking after launch",
  "tracking potential",
  "wait for testing",
  "feature cluster carries",
  "Database Surface",
  "until individual pages have enough proof",
  "View all feature evidence",
  "launch-week guides",
  "labels launch-week pages clearly",
  "official-source guardrails",
  "source-led cast trackers",
  "tracker pages that separate",
  "proof-labeled vehicle-category tracker",
  "launch-week walkthroughs",
  "map-marker verification",
  "Split each confirmed person into database pages",
  "What Gets Published",
  "What Waits",
  "How Updates Work",
  "testing templates",
  "Evidence Tracker",
  "Official Cast Tracker",
  "Evidence Only",
  "source-tracked launch timing"
];
const requiredBuiltPages = [
  ["dist/gta-6/index.html", ["GTA 6 Guide And Database", "Browse the Database", "Confirmed Features"]],
  ["dist/gta-6/features/index.html", ["GTA 6 Overview", "Release Information", "Vehicles and Driving"]],
  ["dist/gta-6/database/index.html", ["GTA 6 Database", "Vehicles", "Characters", "Locations", "Editions"]],
  ["dist/gta-6/database/vehicles/index.html", ["GTA 6 Vehicle Database", "What is confirmed", "What this means for players"]],
  ["dist/gta-6/database/characters/index.html", ["GTA 6 Character Database", "What is confirmed", "What this means for players"]],
  ["dist/gta-6/database/locations/index.html", ["GTA 6 Location Database", "What is confirmed", "What this means for players"]],
  ["dist/gta-6/database/editions/index.html", ["GTA 6 Edition Database", "What is confirmed", "What this means for players"]],
  ["dist/about/index.html", ["About Leonida Ledger", "Independent Guide", "Corrections And Contact", "Privacy"]]
];
const requiredStaticFiles = [
  ["dist/.well-known/security.txt", ["Contact:", "Expires:", "Preferred-Languages:", "Policy:"]],
  ["dist/_headers", ["Strict-Transport-Security", "Content-Security-Policy", "X-Content-Type-Options", "X-Frame-Options", "Permissions-Policy"]]
];

for (const [file, requiredText] of requiredBuiltPages) {
  if (!existsSync(file)) {
    failures.push(`${file}: missing built page`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  for (const text of requiredText) {
    if (!html.includes(text)) failures.push(`${file}: missing required text ${text}`);
  }
  if (html.includes(">undefined<")) failures.push(`${file}: contains undefined output`);
}

const sitemap = readFileSync("dist/sitemap.xml", "utf8");
const indexablePaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
for (const pathname of indexablePaths) {
  const file = pathname === "/" ? "dist/index.html" : join("dist", pathname, "index.html");
  if (!existsSync(file)) {
    failures.push(`${file}: missing indexable page`);
  }
}

const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : path.endsWith(".html") ? [path] : [];
  });
const publicHtmlFiles = htmlFiles("dist").filter((file) => file !== join("dist", "404.html"));
for (const file of publicHtmlFiles) {
  const html = readFileSync(file, "utf8").toLowerCase();
  for (const label of prohibitedPublicCopy) {
    if (html.includes(label.toLowerCase())) failures.push(`${file}: contains internal public copy ${label}`);
  }
  if (/class="meta-label">updated<\/strong>\s*<p>[^<]*\/\s*(?:live|tracker)\s*<\/p>/i.test(html)) {
    failures.push(`${file}: news card exposes internal page status`);
  }
  if (/<span class="badge unconfirmed">\d+\s+records<\/span>/i.test(html)) {
    failures.push(`${file}: exposes a vanity database record count`);
  }
  if (/<strong>next:<\/strong>/i.test(html)) {
    failures.push(`${file}: exposes database next-work copy`);
  }
}

const guideDirs = readdirSync("dist/guides", { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "category")
  .map((entry) => entry.name);
for (const slug of guideDirs) {
  const file = join("dist/guides", slug, "index.html");
  const html = readFileSync(file, "utf8");
  const detailSections = (html.match(/class="article-section guide-detail-section"/g) ?? []).length;
  if (detailSections < 2) failures.push(`${file}: expected at least two player-focused detail sections`);
  if (!html.includes('id="quick-answer"')) failures.push(`${file}: missing quick answer`);
  if (!html.includes('id="sources"')) failures.push(`${file}: missing visible sources`);
}

for (const [file, requiredText] of requiredStaticFiles) {
  if (!existsSync(file)) {
    failures.push(`${file}: missing static safety file`);
    continue;
  }
  const text = readFileSync(file, "utf8");
  for (const required of requiredText) {
    if (!text.includes(required)) failures.push(`${file}: missing required text ${required}`);
  }
  const expires = text.match(/^Expires:\s*(.+)$/m)?.[1];
  if (expires && Number.isNaN(Date.parse(expires))) failures.push(`${file}: Expires is not a valid date`);
  if (expires && Date.parse(expires) <= Date.now()) failures.push(`${file}: Expires is not in the future`);
}

const vehiclePage = "dist/gta-6/database/vehicles/index.html";
if (existsSync(vehiclePage)) {
  const html = readFileSync(vehiclePage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${vehiclePage}: expected at least 6 vehicle rows, found ${rowCount}`);
  if (!html.includes('rel="nofollow noopener"')) failures.push(`${vehiclePage}: source links should be nofollow noopener`);
}

const characterPage = "dist/gta-6/database/characters/index.html";
if (existsSync(characterPage)) {
  const html = readFileSync(characterPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 8) failures.push(`${characterPage}: expected at least 8 character rows, found ${rowCount}`);
  if (!html.includes('rel="nofollow noopener"')) failures.push(`${characterPage}: source links should be nofollow noopener`);
}

const locationPage = "dist/gta-6/database/locations/index.html";
if (existsSync(locationPage)) {
  const html = readFileSync(locationPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${locationPage}: expected at least 6 location rows, found ${rowCount}`);
  if (!html.includes('rel="nofollow noopener"')) failures.push(`${locationPage}: source links should be nofollow noopener`);
}

const editionPage = "dist/gta-6/database/editions/index.html";
if (existsSync(editionPage)) {
  const html = readFileSync(editionPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${editionPage}: expected at least 6 edition rows, found ${rowCount}`);
  if (!html.includes('rel="nofollow noopener"')) failures.push(`${editionPage}: source links should be nofollow noopener`);
}

if (failures.length) {
  console.error("Content quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content quality check passed: ${publicHtmlFiles.length} built public pages and ${requiredBuiltPages.length} P0 pages.`);
