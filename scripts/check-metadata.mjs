import { readFileSync } from "node:fs";

const pages = [
  { file: "dist/index.html" },
  { file: "dist/guides/index.html", types: ["CollectionPage", "BreadcrumbList"] },
  { file: "dist/guides/is-gta-6-coming-to-pc/index.html", image: "/assets/og-release.png" },
  { file: "dist/guides/category/map/index.html", image: "/assets/og-map.png" },
  { file: "dist/testing-protocol/index.html" }
];

for (const { file, image, types: requiredTypes = [] } of pages) {
  const html = readFileSync(file, "utf8");
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  if (!json) throw new Error(`${file}: missing JSON-LD`);

  const types = JSON.parse(json).map((item) => item["@type"]);
  if (!types.includes("Organization")) throw new Error(`${file}: missing Organization schema`);
  if (types.filter((type) => type === "WebSite").length !== 1) throw new Error(`${file}: expected one WebSite schema`);
  for (const type of requiredTypes) {
    if (!types.includes(type)) throw new Error(`${file}: missing ${type} schema`);
  }
  if (!html.includes('property="og:image:alt"')) throw new Error(`${file}: missing og:image:alt`);
  if (!html.includes('property="og:image:width" content="1672"')) throw new Error(`${file}: missing og:image dimensions`);
  if (!html.includes('name="twitter:image:alt"')) throw new Error(`${file}: missing twitter:image:alt`);
  if (image && !html.includes(image)) throw new Error(`${file}: missing expected OG image ${image}`);
}
