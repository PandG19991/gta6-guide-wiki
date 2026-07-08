import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredEvidenceTables = [
  ["gta-6-release-date-countdown-preload", 4],
  ["gta-6-pre-order-standard-vs-ultimate", 4],
  ["gta-6-price-standard-ultimate-explained", 3],
  ["is-gta-6-coming-to-pc", 3],
  ["gta-6-platforms-ps5-xbox-series-x-s", 3],
  ["gta-6-preload-download-size-prep", 3],
  ["gta-6-gta-plus-preorder-benefit", 3],
  ["gta-6-physical-vs-digital-preorder", 3],
  ["gta-6-vintage-vice-city-pack", 3],
  ["gta-6-trailer-2-breakdown-evidence", 3],
  ["gta-6-vehicles-confirmed-so-far", 3],
  ["gta-6-vice-city-location-guide", 3],
  ["gta-6-leonida-keys-location-guide", 3],
  ["gta-6-grassrivers-location-guide", 3],
  ["gta-6-port-gellhorn-location-guide", 3],
  ["gta-6-characters-official-cast", 3],
  ["gta-6-jason-duval-character-guide", 3],
  ["gta-6-lucia-caminos-character-guide", 3],
  ["gta-6-real-dimez-character-guide", 3],
  ["how-to-avoid-gta-6-spoilers-before-launch", 3],
  ["gta-6-domain-strategy-fan-site-seo", 3]
];

const failures = [];
const requiredBuiltPages = [
  ["dist/gta-6/index.html", ["GTA 6 Database Hub", "Database Surface", "Confirmed Features"]],
  ["dist/gta-6/features/index.html", ["GTA 6 Features Confirmed So Far", "Release Information", "Vehicles and Driving"]],
  ["dist/gta-6/database/index.html", ["GTA 6 Database", "Vehicles", "Update trigger"]],
  ["dist/gta-6/database/vehicles/index.html", ["GTA 6 Vehicle Database", "Why no model spam?", "Launch checklist"]]
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

for (const [slug, minRows] of requiredEvidenceTables) {
  const file = join("dist", "guides", slug, "index.html");
  if (!existsSync(file)) {
    failures.push(`${slug}: missing built page`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const start = html.indexOf(">Evidence Table<");
  if (start === -1) {
    failures.push(`${slug}: missing Evidence Table`);
    continue;
  }

  const end = html.indexOf("</section>", start);
  const tableHtml = html.slice(start, end === -1 ? undefined : end);
  for (const header of ["Claim", "Status", "Proof note", "Primary source"]) {
    if (!tableHtml.includes(header)) failures.push(`${slug}: missing Evidence Table header ${header}`);
  }

  const rowCount = (tableHtml.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < minRows) failures.push(`${slug}: expected at least ${minRows} evidence rows, found ${rowCount}`);
  if (tableHtml.includes(">undefined<")) failures.push(`${slug}: contains undefined table output`);
  if (!tableHtml.includes('rel="nofollow noopener"')) failures.push(`${slug}: source links should be nofollow noopener`);
}

const vehiclePage = "dist/gta-6/database/vehicles/index.html";
if (existsSync(vehiclePage)) {
  const html = readFileSync(vehiclePage, "utf8");
  const rowCount = (html.match(/<tr>/g) ?? []).length - 1;
  if (rowCount < 6) failures.push(`${vehiclePage}: expected at least 6 vehicle rows, found ${rowCount}`);
  if (!html.includes('rel="nofollow noopener"')) failures.push(`${vehiclePage}: source links should be nofollow noopener`);
}

if (failures.length) {
  console.error("Content quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content quality check passed: ${requiredEvidenceTables.length} evidence tables and ${requiredBuiltPages.length} P0 pages.`);
