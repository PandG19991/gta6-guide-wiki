import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";

const dist = "dist";
const read = (file) => readFileSync(file, "utf8");
const fail = (message) => {
  throw new Error(message);
};

const files = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });

const sitemap = read(join(dist, "sitemap.xml"));
const origin = new URL(sitemap.match(/<loc>(.*?)<\/loc>/)?.[1] ?? "").origin;
const htmlFiles = files(dist).filter((file) => file.endsWith(".html") && !file.endsWith(`${sep}404.html`));
const internalTargets = new Map();

const targetFile = (pathname) => {
  if (pathname === "/") return join(dist, "index.html");
  if (extname(pathname)) return join(dist, pathname);
  return pathname.endsWith("/") ? join(dist, pathname, "index.html") : join(dist, `${pathname}.html`);
};

const normalizeInternalUrl = (value) => {
  const trimmed = value.trim();
  if (
    !trimmed ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:")
  ) {
    return undefined;
  }

  const url = new URL(trimmed, origin);
  if (url.origin !== origin) return undefined;
  return url;
};

for (const file of htmlFiles) {
  const html = read(file);
  const label = relative(dist, file);
  for (const [, attr, rawValue] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const url = normalizeInternalUrl(rawValue);
    if (!url) continue;

    const path = targetFile(url.pathname);
    if (!existsSync(path)) {
      fail(`${label}: ${attr} points to missing internal target ${url.pathname}`);
    }

    if (url.hash && path.endsWith(`${sep}index.html`)) {
      const targetHtml = internalTargets.get(path) ?? read(path);
      internalTargets.set(path, targetHtml);
      const id = url.hash.slice(1);
      if (!targetHtml.includes(`id="${id}"`)) {
        fail(`${label}: ${attr} points to missing hash ${url.pathname}${url.hash}`);
      }
    }
  }
}

console.log(`Link check passed: ${htmlFiles.length} HTML files.`);
