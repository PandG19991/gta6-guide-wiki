import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const failures = [];
const publicDataFiles = ["src/data/guides.ts", "src/data/guideArticles.ts", "src/data/updates.ts"];
const privateSourcePatterns = [
  [/["']?searchTerms["']?\s*:/, "searchTerms"],
  [/["']?nextUpdate["']?\s*:/, "nextUpdate"],
  [/["']?publication["']?\s*:/, "publication state"],
  [/["']?redirectTo["']?\s*:/, "redirect data"],
  [/\bGuideStatus\b/, "GuideStatus"],
  [/\bGuidePublication\b/, "GuidePublication"],
  [/\bguideEvidenceRows\b/, "evidence-decision rows"],
  [/Site source ledger refreshed/i, "internal update record"],
  [/\b(?:PRE_LAUNCH|LAUNCH|EVERGREEN)\b/, "operating phase state"]
];

if (existsSync("src/data/contentPlan.ts")) failures.push("src/data/contentPlan.ts: private content planning must stay outside the public repository");
if (existsSync("candidate-queue.md")) failures.push("candidate-queue.md: private candidate data must stay outside the public repository");
for (const file of publicDataFiles) {
  const source = readFileSync(file, "utf8");
  for (const [pattern, label] of privateSourcePatterns) {
    if (pattern.test(source)) failures.push(`${file}: contains private ${label}`);
  }
}

const guideSource = readFileSync("src/data/guides.ts", "utf8");
const evidenceValues = [...guideSource.matchAll(/["']?evidence["']?\s*:\s*["']([^"']+)["']/g)].map((match) => match[1]);
if (!evidenceValues.length) failures.push("src/data/guides.ts: guides must declare publishable evidence");
for (const value of evidenceValues) {
  if (!["official", "first-party-tested", "corroborated"].includes(value)) {
    failures.push(`src/data/guides.ts: unsupported public evidence value ${value}`);
  }
}
if (guideSource.includes('"spoilerLevel": "none"')) failures.push("src/data/guides.ts: routine pages must not emit a none spoiler label");
if (guideSource.includes('"evidence": "first-party-tested"') && !guideSource.includes('"tested":')) {
  failures.push("src/data/guides.ts: first-party-tested guides require platform, version, date, and method metadata");
}
const siteSource = readFileSync("src/data/site.ts", "utf8");
if (!siteSource.includes('locale: "en-US"')) failures.push("src/data/site.ts: public locale must be en-US");
if (!guideSource.includes("$79.99") || !guideSource.includes("$99.99")) failures.push("src/data/guides.ts: US buying guidance must preserve USD prices");
if (!guideSource.includes("applicable PlayStation or Xbox store region")) {
  failures.push("src/data/guides.ts: preload timing must name the applicable platform store region");
}
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
  "source-tracked launch timing",
  "visible source boundaries",
  "Investor-grade confirmation",
  "Security contact metadata",
  "Rating-board listings and launch marketing details",
  "See what changed for players"
];
const requiredBuiltPages = [
  ["dist/gta-6/index.html", ["GTA 6 Guide And Database", "Start Here", "Meaningful Changes", "Browse the Database", "Confirmed Features"]],
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
const textContent = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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
  if (/rel="[^"]*nofollow[^"]*"/.test(html) && !/rel="[^"]*sponsored[^"]*nofollow[^"]*"/.test(html)) {
    failures.push(`${file}: ordinary editorial links must not use nofollow`);
  }
  if (html.includes('rel="sponsored') || html.includes("data-ad-placement") || html.includes("adsbygoogle")) {
    failures.push(`${file}: monetization must remain disabled for Milestone A`);
  }
}

const home = readFileSync("dist/index.html", "utf8");
if (home.includes("missions, and cheats")) failures.push("dist/index.html: promises unavailable mission or cheat coverage");
if (!home.includes("release date, PC status, preload, preorder, map, characters, vehicles, and editions")) {
  failures.push("dist/index.html: missing current homepage coverage summary");
}

const guideIndex = readFileSync("dist/guides/index.html", "utf8");
const guideIndexHead = guideIndex.match(/<head>[\s\S]*?<\/head>/i)?.[0] ?? "";
if (/\b(?:mission|cheat)s?\b/i.test(guideIndexHead)) failures.push("dist/guides/index.html: metadata promises unavailable mission or cheat coverage");
if (guideIndex.includes(">Is Coming to PC?</a>")) failures.push("dist/guides/index.html: PC guide card title is malformed");
if (!guideIndex.includes(">Is GTA 6 Coming to PC?</a>")) failures.push("dist/guides/index.html: PC guide card title is missing");

const updatesPage = readFileSync("dist/updates/index.html", "utf8");
if (!updatesPage.includes('class="affected-links"')) failures.push("dist/updates/index.html: public changes must link to affected routes");
if (updatesPage.includes("GTA 6 News And Guide Updates")) failures.push("dist/updates/index.html: updates hub must not overstate standalone news coverage");

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
  if (!html.includes('id="next-action"')) failures.push(`${file}: missing explicit next action`);
  if ((html.match(/id="next-action"/g) ?? []).length !== 1) failures.push(`${file}: expected exactly one explicit next action`);
  if (!html.includes("Reviewed by Leonida Ledger Editorial Team")) failures.push(`${file}: missing editorial review responsibility`);
  if (!html.includes("article-applicability")) failures.push(`${file}: missing platform and version applicability`);
  if (html.includes('class="gta-rail"')) failures.push(`${file}: task articles must not render the GTA 6 portal rail`);
  if (/spoiler[^>]*>\s*none/i.test(html)) failures.push(`${file}: renders a meaningless none spoiler label`);
  const answerIndex = html.indexOf('id="quick-answer"');
  const subjectMediaIndex = html.indexOf("data-media-id");
  if (subjectMediaIndex >= 0 && answerIndex > subjectMediaIndex) failures.push(`${file}: subject media appears before the quick answer`);
  if (subjectMediaIndex >= 0 && !html.includes('class="article-lead has-media"')) failures.push(`${file}: answer and subject media must share the first-view lead`);
  if (html.includes('class="rail-answer"')) failures.push(`${file}: repeats quick answer in the sidebar`);
  const quickAnswer = html.match(/<section class="quick-answer"[^>]*>[\s\S]*?<p>(.*?)<\/p>/)?.[1];
  const keyPoints = html.match(/<section class="article-section" id="key-points">([\s\S]*?)<\/section>/)?.[1];
  if (quickAnswer && keyPoints?.includes(quickAnswer)) failures.push(`${file}: repeats the main quick answer in key points`);
  const detailCopy = [...html.matchAll(/<section class="article-section guide-detail-section"[^>]*>([\s\S]*?)<\/section>/g)]
    .map((match) => textContent(match[1]))
    .join(" ");
  if (detailCopy.length < 300) failures.push(`${file}: lacks enough decision, instruction, comparison, consolidation, or affected-task explanation`);
}

const updatesRoot = join("dist", "updates");
if (existsSync(updatesRoot)) {
  const standaloneUpdates = readdirSync(updatesRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  for (const entry of standaloneUpdates) {
    const file = join(updatesRoot, entry.name, "index.html");
    const html = readFileSync(file, "utf8");
    const affectedTaskLink = /href="\/(?:guides|gta-6\/database)\//.test(html);
    const detailSections = (html.match(/class="article-section guide-detail-section"/g) ?? []).length;
    if (!affectedTaskLink || detailSections < 2 || !html.includes('id="next-action"')) {
      failures.push(`${file}: standalone update does not pass the player-impact, distinct-intent, completeness, and affected-task gates`);
    }
  }
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
  if (!html.includes('rel="noopener"')) failures.push(`${vehiclePage}: source links should use noopener`);
}

const characterPage = "dist/gta-6/database/characters/index.html";
if (existsSync(characterPage)) {
  const html = readFileSync(characterPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 8) failures.push(`${characterPage}: expected at least 8 character rows, found ${rowCount}`);
  if (!html.includes('rel="noopener"')) failures.push(`${characterPage}: source links should use noopener`);
}

const locationPage = "dist/gta-6/database/locations/index.html";
if (existsSync(locationPage)) {
  const html = readFileSync(locationPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${locationPage}: expected at least 6 location rows, found ${rowCount}`);
  if (!html.includes('rel="noopener"')) failures.push(`${locationPage}: source links should use noopener`);
}

const editionPage = "dist/gta-6/database/editions/index.html";
if (existsSync(editionPage)) {
  const html = readFileSync(editionPage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${editionPage}: expected at least 6 edition rows, found ${rowCount}`);
  if (!html.includes('rel="noopener"')) failures.push(`${editionPage}: source links should use noopener`);
}

if (failures.length) {
  console.error("Content quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content quality check passed: ${publicHtmlFiles.length} built public pages and ${requiredBuiltPages.length} P0 pages.`);
