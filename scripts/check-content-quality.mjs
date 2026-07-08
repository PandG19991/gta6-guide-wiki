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
  ["gta-6-domain-strategy-fan-site-seo", 3]
];

const failures = [];

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

if (failures.length) {
  console.error("Content quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content quality check passed: ${requiredEvidenceTables.length} evidence tables.`);
