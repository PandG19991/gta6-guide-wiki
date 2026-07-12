import { existsSync, readdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { extname, join } from "node:path";

const failures = [];
const filesIn = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
const repositoryFiles = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], { encoding: "utf8" })
  .split(/\r?\n/)
  .filter(Boolean);
const governancePrefixes = ["docs/", "openspec/"];
const excludedFiles = new Set(["scripts/check-content-quality.mjs", "package-lock.json"]);
const textExtensions = new Set(["", ".astro", ".css", ".js", ".json", ".jsonc", ".md", ".mjs", ".ts", ".txt", ".xml", ".yaml", ".yml"]);
const publicRepositoryFiles = repositoryFiles.filter((file) =>
  !governancePrefixes.some((prefix) => file.startsWith(prefix))
  && !excludedFiles.has(file)
  && textExtensions.has(extname(file).toLowerCase())
);
const privateRecordPatterns = [
  [/["']?searchTerms["']?\s*:/, "searchTerms"],
  [/["']?nextUpdate["']?\s*:/, "nextUpdate"],
  [/["']?publication["']?\s*:/, "publication state"],
  [/["']?(?:candidateScore|keywordOpportunity|rawContribution|reviewNotes|internalDecision|operatingPhase|trafficPotential|commercialValue|revenue)["']?\s*:/, "private operating field"],
  [/\bGuideStatus\b/, "GuideStatus"],
  [/\bGuidePublication\b/, "GuidePublication"],
  [/\bguideEvidenceRows\b/, "evidence-decision rows"],
  [/Site source ledger refreshed/i, "internal update record"],
  [/\b(?:PRE_LAUNCH|LAUNCH|EVERGREEN)\b/, "operating phase state"]
];
const privateFilename = /^(?:candidate[-_]?queue|content[-_]?plan|editorial[-_]?queue|keyword[-_]?opportunities|submission[-_]?queue|contribution[-_]?records?|revenue[-_]?report)(?:\.[^.]+)?$/i;
const hasPrivatePathSegment = (file) => file.split(/[\\/]/).some((part) => privateFilename.test(part));

for (const file of repositoryFiles) {
  if (hasPrivatePathSegment(file)) failures.push(`${file}: private operating file must stay outside the public repository`);
}
for (const file of publicRepositoryFiles) {
  const source = readFileSync(file, "utf8");
  for (const [pattern, label] of privateRecordPatterns) {
    if (pattern.test(source)) failures.push(`${file}: contains private ${label}`);
  }
}
for (const requiredFile of ["README.md", "public/_redirects", "src/pages/guides/[slug].astro"]) {
  if (!publicRepositoryFiles.includes(requiredFile)) failures.push(`private-data gate does not cover ${requiredFile}`);
}
if (publicRepositoryFiles.some((file) => governancePrefixes.some((prefix) => file.startsWith(prefix)))) {
  failures.push("private-data gate must exclude reusable governance and specification documents");
}
if (!privateRecordPatterns.some(([pattern]) => pattern.test('const draft = { searchTerms: ["gta 6"] };'))) {
  failures.push("private-data gate must detect structural private fields");
}
if (privateRecordPatterns.some(([pattern]) => pattern.test("Players use search terms to find a guide."))) {
  failures.push("private-data gate must not treat ordinary player-facing words as private records");
}
for (const privatePath of ["src/private/candidate-queue.json", "docs/revenue-report.md", "openspec/candidate_queue.yaml"]) {
  if (!hasPrivatePathSegment(privatePath)) failures.push(`private-data gate must detect sensitive path ${privatePath}`);
}

const binaryExtensions = new Set([".avif", ".br", ".gif", ".gz", ".ico", ".jpeg", ".jpg", ".otf", ".pdf", ".png", ".ttf", ".webp", ".woff", ".woff2", ".zip"]);
const decoder = new TextDecoder("utf-8", { fatal: true });
for (const file of filesIn("dist")) {
  if (binaryExtensions.has(extname(file).toLowerCase())) continue;
  if (hasPrivatePathSegment(file)) failures.push(`${file}: built output contains a private operating path`);
  let output;
  try {
    output = decoder.decode(readFileSync(file));
  } catch {
    continue;
  }
  for (const [pattern, label] of privateRecordPatterns) {
    if (pattern.test(output)) failures.push(`${file}: built text asset contains private ${label}`);
  }
}

const guideSource = readFileSync("src/data/guides.ts", "utf8");
const guideTemplateSource = readFileSync("src/pages/guides/[slug].astro", "utf8");
const guideMediaSource = readFileSync("src/components/GuideMedia.astro", "utf8");
const guideArticleSource = readFileSync("src/data/guideArticles.ts", "utf8");
const sourcesModuleSource = readFileSync("src/data/sources.ts", "utf8");
const sourcesPageSource = readFileSync("src/pages/sources.astro", "utf8");
const globalCss = readFileSync("src/styles/global.css", "utf8");
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
if (guideSource.includes('"google-spam"')) failures.push("src/data/guides.ts: public guides must not cite the obsolete google-spam governance source");
if (!sourcesModuleSource.includes("getPublishableSources") || !sourcesModuleSource.includes("publishableSources")) {
  failures.push("src/data/sources.ts: publishable source selection must have one shared implementation");
}
if (!guideTemplateSource.includes("getPublishableSources") || guideTemplateSource.includes("playerSourceIds")) {
  failures.push("src/pages/guides/[slug].astro: guide sources must use the shared publishable source selector");
}
if (!sourcesPageSource.includes("publishableSources")) {
  failures.push("src/pages/sources.astro: sources page must use the shared publishable source selector");
}
for (const slug of ["gta-6-grassrivers-location-guide", "gta-6-port-gellhorn-location-guide"]) {
  if (guideArticleSource.includes(`"${slug}"`)) failures.push(`src/data/guideArticles.ts: orphan article body remains for ${slug}`);
}
if (!guideTemplateSource.includes('class={item.primaryMediaId ? undefined : "without-media"}')) {
  failures.push("src/pages/guides/[slug].astro: related guides need an explicit without-media branch");
}
if (!/\.related-guide-list\s*>\s*a\.without-media\s*\{[^}]*grid-template-columns:/s.test(globalCss)) {
  failures.push("src/styles/global.css: related guides need a dedicated without-media grid");
}
const articlePictureRule = globalCss.match(/\.article-lead\s*>\s*\.guide-media\s+picture\s*\{([^}]*)\}/s)?.[1] ?? "";
if (!/aspect-ratio\s*:\s*16\s*\/\s*9/.test(articlePictureRule) || !/overflow\s*:\s*hidden/.test(articlePictureRule)) {
  failures.push("src/styles/global.css: article media picture must own the stable crop and overflow boundary");
}
if (/figcaption|media\.sourceUrl/.test(guideMediaSource)) {
  failures.push("src/components/GuideMedia.astro: media provenance must stay internal instead of rendering repeated source captions");
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
  "Site source ledger refreshed",
  "Publishing Priorities",
  "Publication Queue",
  "Launch Queue",
  "Testing Protocol",
  "Site Mode",
  "Category Rule",
  "Update trigger",
  "Product Plan",
  "What Gets Published",
  "What Waits",
  "How Updates Work",
  "Evidence Tracker",
  "Official Cast Tracker"
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

const htmlFiles = (dir) => filesIn(dir).filter((path) => path.endsWith(".html"));
const textContent = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const allHtmlFiles = htmlFiles("dist");
for (const file of allHtmlFiles) {
  const html = readFileSync(file, "utf8");
  if (!/<html\b[^>]*\blang="en-US"/i.test(html)) failures.push(`${file}: built page must declare lang="en-US"`);
}
const publicHtmlFiles = allHtmlFiles.filter((file) => file !== join("dist", "404.html"));
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
  const sourceCount = Number(html.match(/data-source-count="(\d+)"/)?.[1]);
  const displayedSourceCount = (html.match(/data-source-id=/g) ?? []).length;
  if (!Number.isInteger(sourceCount) || sourceCount < 1 || displayedSourceCount !== sourceCount) {
    failures.push(`${file}: every guide source ID must resolve and render in the Sources section`);
  }
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

const spoilerGuide = "dist/guides/how-to-avoid-gta-6-spoilers-before-launch/index.html";
if (existsSync(spoilerGuide)) {
  const html = readFileSync(spoilerGuide, "utf8");
  if (!html.includes("Editorial guidance")) failures.push(`${spoilerGuide}: editorial advice must be labeled as editorial guidance`);
  if (html.includes("Editor-verified sources")) failures.push(`${spoilerGuide}: editorial advice must not be labeled as corroborated evidence`);
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
