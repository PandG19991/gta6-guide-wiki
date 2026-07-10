import { existsSync, readdirSync, readFileSync } from "node:fs";

const pages = [
  { file: "dist/index.html" },
  { file: "dist/guides/index.html", types: ["CollectionPage", "BreadcrumbList"] },
  { file: "dist/gta-6/database/index.html", types: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { file: "dist/gta-6/database/vehicles/index.html", types: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { file: "dist/gta-6/database/characters/index.html", types: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { file: "dist/gta-6/database/locations/index.html", types: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { file: "dist/gta-6/database/editions/index.html", types: ["CollectionPage", "BreadcrumbList", "ItemList"] },
  { file: "dist/release/index.html", types: ["BreadcrumbList"], image: "/assets/og-release.png", article: true },
  { file: "dist/guides/is-gta-6-coming-to-pc/index.html", image: "/assets/og-release.png", article: true },
  { file: "dist/guides/category/map/index.html", image: "/assets/og-map.png" }
];

if (existsSync("dist/testing-protocol/index.html")) {
  throw new Error("dist/testing-protocol/index.html: removed route must not be built");
}

for (const { file, image, types: requiredTypes = [], article = false } of pages) {
  const html = readFileSync(file, "utf8");
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  if (!json) throw new Error(`${file}: missing JSON-LD`);

  const schema = JSON.parse(json);
  const types = schema.map((item) => item["@type"]);
  if (!types.includes("Organization")) throw new Error(`${file}: missing Organization schema`);
  if (types.filter((type) => type === "WebSite").length !== 1) throw new Error(`${file}: expected one WebSite schema`);
  for (const type of requiredTypes) {
    if (!types.includes(type)) throw new Error(`${file}: missing ${type} schema`);
  }
  if (article) {
    const articleSchema = schema.find((item) => item["@type"] === "Article");
    if (!articleSchema?.image) throw new Error(`${file}: missing Article image`);
    if (articleSchema.inLanguage !== "en-US") throw new Error(`${file}: missing Article inLanguage`);
  }
  if (!html.includes('property="og:image:alt"')) throw new Error(`${file}: missing og:image:alt`);
  if (!html.includes('property="og:image:width" content="1672"')) throw new Error(`${file}: missing og:image dimensions`);
  if (!html.includes('name="twitter:image:alt"')) throw new Error(`${file}: missing twitter:image:alt`);
  if (image && !html.includes(image)) throw new Error(`${file}: missing expected OG image ${image}`);
}

const guideDirs = readdirSync("dist/guides", { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "category")
  .map((entry) => entry.name);

for (const slug of guideDirs) {
  const file = `dist/guides/${slug}/index.html`;
  const html = readFileSync(file, "utf8");
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  if (!json) throw new Error(`${file}: missing JSON-LD`);

  const schema = JSON.parse(json);
  const types = schema.map((item) => item["@type"]);
  for (const type of ["Article", "BreadcrumbList", "FAQPage"]) {
    if (!types.includes(type)) throw new Error(`${file}: missing ${type} schema`);
  }

  const articleSchema = schema.find((item) => item["@type"] === "Article");
  if (!articleSchema?.image) throw new Error(`${file}: missing Article image`);
  if (articleSchema.inLanguage !== "en-US") throw new Error(`${file}: missing Article inLanguage`);
}

const categoryDirs = readdirSync("dist/guides/category", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

for (const slug of categoryDirs) {
  const file = `dist/guides/category/${slug}/index.html`;
  const html = readFileSync(file, "utf8");
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  if (!json) throw new Error(`${file}: missing JSON-LD`);

  const schema = JSON.parse(json);
  const types = schema.map((item) => item["@type"]);
  for (const type of ["CollectionPage", "BreadcrumbList"]) {
    if (!types.includes(type)) throw new Error(`${file}: missing ${type} schema`);
  }

  const collectionSchema = schema.find((item) => item["@type"] === "CollectionPage");
  const itemList = collectionSchema?.mainEntity;
  if (itemList?.["@type"] !== "ItemList") throw new Error(`${file}: missing CollectionPage mainEntity ItemList`);
  if (!Array.isArray(itemList.itemListElement) || itemList.itemListElement.length === 0) {
    throw new Error(`${file}: missing category ItemList entries`);
  }
}
