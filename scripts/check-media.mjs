import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mediaFile = path.join(root, "src", "data", "media.ts");
const requiredFields = ["id", "local", "kind", "subject", "owner", "sourceUrl", "sourceAssetUrl", "usageBasis", "rights", "permissionStatus", "attribution", "alt", "width", "height", "placements"];

const fail = (message) => {
  console.error(`media check failed: ${message}`);
  process.exitCode = 1;
};

let source;
try {
  source = await readFile(mediaFile, "utf8");
} catch {
  fail("src/data/media.ts is missing");
  process.exit();
}

const records = [...source.matchAll(/\{([\s\S]*?)\n  \},/g)].map((match) => match[1]);
if (!records.length) fail("media registry has no structured records");

const ids = new Set();
const rightsById = new Map();
for (const record of records) {
  const id = record.match(/\bid:\s*["']([^"']+)["']/)?.[1];
  if (!id) {
    fail("registry record is missing id");
    continue;
  }
  if (ids.has(id)) fail(`duplicate id ${id}`);
  ids.add(id);
  for (const field of requiredFields) {
    if (!new RegExp(`\\b${field}:`).test(record)) fail(`${id} is missing ${field}`);
  }
  const rights = record.match(/rights:\s*["'](approved|pending)["']/)?.[1];
  if (!rights) fail(`${id} has invalid rights`);
  rightsById.set(id, rights);
  if (!/permissionStatus:\s*["'](?:not-formally-granted|requested|granted)["']/.test(record)) fail(`${id} has invalid permissionStatus`);
}

for (const match of source.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["'];/g)) {
  const [, , relativePath] = match;
  if (relativePath.startsWith(".")) {
    try {
      await access(path.resolve(path.dirname(mediaFile), relativePath));
    } catch {
      fail(`local media file is missing: ${relativePath}`);
    }
  }
}

const distGuides = path.join(root, "dist", "guides");
try {
  await access(distGuides);
  const files = await readdir(distGuides, { recursive: true });
  const guideFiles = files.filter((file) => /^[^\\/]+[\\/]index\.html$/.test(file));
  if (!guideFiles.length) fail("built public guide pages are missing");
  for (const file of guideFiles) {
    const html = await readFile(path.join(distGuides, file), "utf8");
    const images = [...html.matchAll(/<img\b[^>]*data-media-id=["']([^"']+)["'][^>]*>/g)];
    if (!images.some((match) => ids.has(match[1]) && rightsById.get(match[1]) === "approved" && /\bwidth=["']\d+["']/.test(match[0]) && /\bheight=["']\d+["']/.test(match[0]))) {
      fail(`/guides/${path.dirname(file)}/ lacks approved registered media with intrinsic dimensions`);
    }
  }
} catch (error) {
  if (error?.code === "ENOENT") fail("built guide output is missing; run npm run build first");
  else throw error;
}

if (!process.exitCode) console.log(`media check passed: ${ids.size} registry records`);
