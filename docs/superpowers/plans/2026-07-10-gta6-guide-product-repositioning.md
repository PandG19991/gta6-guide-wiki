# GTA 6 Guide Product Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Leonida Ledger from an internal-looking evidence blog into a player-first, image-rich GTA 6 guide product without publishing fabricated gameplay or ungoverned media.

**Architecture:** Keep Astro static generation and the existing data-driven pages. Add one publication state to guide records and one governed media registry, then make all public lists, feeds, schema, and sitemap output derive from those two sources of truth. Ship cleanup before redesign, and redesign before broad content expansion.

**Tech Stack:** Astro 7, TypeScript, native Astro image components, CSS, Node validation scripts, Playwright, Cloudflare Workers Static Assets, GitHub.

---

## Scope And Acceptance

In scope:

- Public route cleanup and redirects.
- Player-first navigation and article hierarchy.
- Media provenance and responsive rendering.
- Homepage, guide index, article, update, and database visual changes.
- Rewrite/merge/withdraw decisions for all current guides.
- Sitemap, metadata, structured data, redirects, performance, security, and live verification.

Out of scope:

- A CMS, database, accounts, comments, community editing, or a framework rewrite.
- Fake UI, fake screenshots, leaked assets, competitor images, or unverified walkthroughs.
- Live AdSense code before owner configuration and content readiness.

Acceptance:

- Every indexable guide answers one named player intent before citations.
- Every core landing and indexable guide has approved subject media.
- Public HTML contains none of the internal workflow labels listed in Task 2.
- Withdrawn routes are absent from navigation, feed, and sitemap.
- Merged routes return verified 301 responses.
- Build, metadata, indexability, links, content, media, desktop/mobile visual checks, and live SEO pass.
- Custom-domain and Search Console work remains an explicit owner handoff until credentials/domain exist.

### Task 1: Add Publication State And Withdraw Empty Guides

**Files:**

- Modify: `src/data/guides.ts`
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/pages/guides/index.astro`
- Modify: `src/pages/guides/category/[category].astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/feed.xml.ts`
- Modify: `src/pages/sitemap.xml.ts`
- Modify: `src/pages/updates.astro`
- Modify: `scripts/check-indexability.mjs`

- [ ] **Step 1: Add a failing indexability check for withdrawn slugs**

Add the exact withdrawn route list to `scripts/check-indexability.mjs` and fail if any appears in the sitemap:

```js
const withdrawnGuidePaths = [
  "/guides/gta-6-mission-list-walkthrough-hub/",
  "/guides/gta-6-beginner-guide-launch-week/",
  "/guides/gta-6-wanted-level-police-escape-guide/",
  "/guides/gta-6-money-fast-early-no-exploits/",
  "/guides/gta-6-cheats-codes-testing-tracker/"
];

for (const path of withdrawnGuidePaths) {
  if (locs.some((url) => url.pathname === path)) fail(`withdrawn route is in sitemap: ${path}`);
}
```

- [ ] **Step 2: Run the check and confirm the current build fails**

Run: `npm run build && npm run check:indexability`

Expected: FAIL with `withdrawn route is in sitemap`.

- [ ] **Step 3: Add the minimal publication model**

Extend `Guide` and export the public subset from `src/data/guides.ts`:

```ts
export type GuidePublication = "public" | "withdrawn" | "redirect";

export type Guide = {
  // existing fields stay unchanged
  publication: GuidePublication;
  redirectTo?: string;
};

export const publicGuides = guides.filter((guide) => guide.publication === "public");
```

Set the five routes above to `withdrawn`. Mark current useful pages `public`. Redirect decisions are added in Task 5.

- [ ] **Step 4: Replace public consumers of `guides` with `publicGuides`**

Use `publicGuides` for static paths, homepage lists, guide/category indexes, updates, RSS items, and sitemap entries. Keep `guides` only where internal records are intentionally needed.

- [ ] **Step 5: Remove fixed URL and feed count thresholds**

Delete `locs.length < 40` and `feedItems < 20`. Replace them with consistency checks:

```js
if (feedItems === 0) fail("feed.xml must contain at least one public item");
if (new Set(locs.map((url) => url.href)).size !== locs.length) fail("sitemap contains duplicate URLs");
```

- [ ] **Step 6: Verify and commit**

Run: `npm run build && npm run check:indexability && npm run check:links`

Expected: PASS; withdrawn pages are not built or linked.

Commit: `feat: gate public guide routes`

### Task 2: Remove Internal Workflow From Public Pages

**Files:**

- Delete: `src/pages/testing-protocol.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/pages/updates.astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/editorial-policy.astro`
- Modify: `src/pages/sources.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/data/site.ts`
- Modify: `src/data/gta6.ts`
- Modify: `src/pages/sitemap.xml.ts`
- Modify: `scripts/check-content-quality.mjs`
- Modify: `scripts/check-metadata.mjs`

- [ ] **Step 1: Replace evidence-table quotas with a failing public-copy check**

Remove `requiredEvidenceTables` from `scripts/check-content-quality.mjs`. Scan sitemap HTML files for these labels:

```js
const prohibitedPublicCopy = [
  "Search Terms Covered",
  "Page Status",
  "Verification Plan",
  "Content Engine",
  "Next Queue",
  "Machine Feeds",
  "Sitemap URLs",
  "Evidence tables",
  "built for search traffic",
  "SEO sludge"
];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const text of prohibitedPublicCopy) {
    if (html.includes(text)) failures.push(`${file}: internal copy is public: ${text}`);
  }
}
```

- [ ] **Step 2: Run the check and confirm the current build fails**

Run: `npm run build && npm run check:content`

Expected: FAIL on homepage, guide pages, updates, and editorial policy.

- [ ] **Step 3: Remove internal sections and links**

Delete the testing route. Remove homepage ledger/content-engine/publication-policy bands, guide search-term/status/verification sections, update queues, machine feeds, and public site KPI cards. Remove Testing Protocol and Sources from primary navigation; retain a concise sources/corrections link in the footer.

- [ ] **Step 4: Simplify trust pages**

Keep About, Privacy, Contact, and Editorial Policy focused on ownership, independence, corrections, privacy, and contact. Do not list Google SEO, spam, or AdSense documentation as GTA 6 sources.

- [ ] **Step 5: Update metadata checks**

Remove `dist/testing-protocol/index.html` from `scripts/check-metadata.mjs` and add an assertion that it is not built.

- [ ] **Step 6: Verify and commit**

Run: `npm run build && npm run check:metadata && npm run check:indexability && npm run check:links && npm run check:content`

Expected: PASS with no internal workflow labels in public HTML.

Commit: `refactor: make public pages player first`

### Task 3: Add Governed Responsive Media

**Files:**

- Create: `src/data/media.ts`
- Create: `src/components/GuideMedia.astro`
- Create: `scripts/check-media.mjs`
- Create: `src/assets/media/` approved source files
- Modify: `src/data/guides.ts`
- Modify: `src/data/gta6.ts`
- Modify: `src/components/NewsGuideCard.astro`
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/pages/index.astro`
- Modify: `package.json`

- [ ] **Step 1: Add a failing media validation command**

Create `scripts/check-media.mjs` to import the built media manifest or read a generated JSON representation and assert that every public guide has one approved primary media item with source URL, owner, usage basis, alt text, width, and height.

Add to `package.json`:

```json
"check:media": "node scripts/check-media.mjs"
```

Run: `npm run check:media`

Expected: FAIL because the registry does not exist.

- [ ] **Step 2: Create the media registry**

Use Astro image metadata so optimization needs no new dependency:

```ts
import type { ImageMetadata } from "astro";

export type MediaAsset = {
  id: string;
  src: ImageMetadata;
  kind: "screenshot" | "artwork" | "diagram" | "capture";
  subject: string;
  owner: string;
  sourceUrl: string;
  usageBasis: string;
  rights: "approved" | "pending";
  attribution?: string;
  alt: string;
  placements: Array<"hero" | "card" | "article" | "database">;
};

export const approvedMedia = media.filter((item) => item.rights === "approved");
export const mediaById = Object.fromEntries(media.map((item) => [item.id, item]));
```

Store official download-center assets only after recording the internal rights decision. Pending assets must not be referenced by public guide records.

- [ ] **Step 3: Create one responsive renderer**

Implement `GuideMedia.astro` with Astro's native `Picture` component:

```astro
---
import { Picture } from "astro:assets";
import { mediaById } from "@data/media";

const { id, priority = false, class: className } = Astro.props;
const asset = mediaById[id];
if (!asset || asset.rights !== "approved") throw new Error(`Unapproved media: ${id}`);
---

<figure class={className}>
  <Picture
    src={asset.src}
    formats={["avif", "webp"]}
    widths={[480, 800, 1200, 1600]}
    sizes="(max-width: 768px) 100vw, 1200px"
    alt={asset.alt}
    loading={priority ? "eager" : "lazy"}
  />
  {asset.attribution && <figcaption>{asset.attribution}</figcaption>}
</figure>
```

- [ ] **Step 4: Connect media IDs to public data**

Add `primaryMediaId` to public guides and subject media IDs to database records. Replace category OG art in visible guide cards with `GuideMedia`. Keep separate stable social images only where needed.

- [ ] **Step 5: Verify and commit**

Run: `npm run build && npm run check:media && npm run check:metadata`

Expected: PASS; no pending media is rendered; generated images have intrinsic dimensions and responsive variants.

Commit: `feat: add governed guide media`

### Task 4: Rebuild Homepage, Guide Index, Articles, And Databases

**Files:**

- Modify: `src/pages/index.astro`
- Modify: `src/pages/guides/index.astro`
- Modify: `src/pages/guides/category/[category].astro`
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/components/GuideCard.astro`
- Modify: `src/components/NewsGuideCard.astro`
- Modify: `src/components/Gta6Rail.astro`
- Modify: `src/pages/gta-6/database/*.astro`
- Modify: `src/styles/global.css`
- Create: `tests/visual-guide-pages.spec.ts`

- [ ] **Step 1: Add failing visual assertions**

Create Playwright checks for `/`, `/guides/`, one character guide, one location guide, and one buying guide at `1440x900` and `390x844`. Assert one visible primary image, no horizontal overflow, one H1, and no overlap between hero text and media bounds.

- [ ] **Step 2: Rebuild the homepage hero**

Use a full-bleed approved GTA 6 subject visual. Place the H1, one-sentence value proposition, search field, and one primary action inside a protected contrast zone. Keep the first guide-category band partially visible at 900px desktop height and 844px mobile height.

- [ ] **Step 3: Replace confidence-led browsing**

Remove the confidence rail/filter. Group guide links by Release & Buying, Map & Locations, Characters, Vehicles, and Launch Guides. Use contextual thumbnails and stable aspect ratios.

- [ ] **Step 4: Rebuild the article hierarchy**

Render in this order:

```text
Breadcrumb -> Subject media -> H1/deck -> Short answer ->
Task-specific sections/tables -> Related guides -> Compact sources
```

Do not render generic FAQ, source count, search phase, publication status, or verification plan.

- [ ] **Step 5: Add database subject media**

Character records use portraits; location records use region imagery; vehicle records use class imagery only when approved; edition records use product artwork or original comparison graphics. Keep tables readable and convert to labeled rows on mobile.

- [ ] **Step 6: Run screenshots and commit**

Run: `npx playwright test tests/visual-guide-pages.spec.ts`

Expected: PASS at both viewports with nonblank images and no overflow.

Commit: `feat: redesign gta6 guide experience`

### Task 5: Consolidate And Rewrite The Pre-Launch Content Set

**Files:**

- Modify: `src/data/guides.ts`
- Modify: `src/data/gta6.ts`
- Modify: `src/data/updates.ts`
- Modify: `src/data/sources.ts`
- Create: `public/_redirects`
- Modify: `scripts/check-content-quality.mjs`
- Modify: `scripts/check-live-seo.mjs`

- [ ] **Step 1: Add redirect checks before redirect rules**

Add expected redirects to the live SEO check and fail unless each returns 301 with the exact destination.

- [ ] **Step 2: Merge overlapping buying pages**

Move unique price, GTA+, physical/digital, and Vintage Vice City Pack information into `gta-6-pre-order-standard-vs-ultimate`. Mark the old records `redirect` with the same destination.

Create `public/_redirects`:

```text
/guides/gta-6-price-standard-ultimate-explained/ /guides/gta-6-pre-order-standard-vs-ultimate/ 301
/guides/gta-6-gta-plus-preorder-benefit/ /guides/gta-6-pre-order-standard-vs-ultimate/ 301
/guides/gta-6-physical-vs-digital-preorder/ /guides/gta-6-pre-order-standard-vs-ultimate/ 301
/guides/gta-6-vintage-vice-city-pack/ /guides/gta-6-pre-order-standard-vs-ultimate/ 301
```

- [ ] **Step 3: Rewrite the first public content batch**

Complete these intents first: release/preload, preorder decision, PC status, platforms, map regions, confirmed characters, confirmed vehicles, Trailer 2, Vice City, Jason, and Lucia. Each page must contain a unique answer, approved subject media, and useful related action.

- [ ] **Step 4: Convert Updates into player news**

Publish only official announcements or guide changes that alter a player's answer. Do not publish internal source-refresh events.

- [ ] **Step 5: Verify redirects and content**

Run: `npm run build && npm run check:content && npm run check:indexability && npm run check:links`

Deploy a preview, then run the redirect portion of `npm run check:live-seo` against it.

Commit: `content: rebuild prelaunch guide set`

### Task 6: Align Metadata, Schema, Images, And Search Release

**Files:**

- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/pages/sitemap.xml.ts`
- Modify: `src/pages/feed.xml.ts`
- Modify: `src/pages/robots.txt.ts`
- Modify: `scripts/check-metadata.mjs`
- Modify: `scripts/check-indexability.mjs`
- Modify: `scripts/check-live-seo.mjs`
- Modify: `src/data/site.ts` after domain selection

- [ ] **Step 1: Remove generic FAQ requirements**

Delete the generated reliability/update FAQ from the guide template. Keep FAQPage only when real visible questions are authored for that page. Update metadata checks to require Article and BreadcrumbList, not FAQPage for every guide.

- [ ] **Step 2: Use approved representative images**

Set Open Graph, Twitter, and Article image metadata from each guide's approved primary media. Keep same-origin absolute URLs in production.

- [ ] **Step 3: Make sitemap and feed value-derived**

Use `publicGuides`, exclude secondary/internal routes as designed, retain one `lastmod` per canonical URL, and verify no duplicate canonical or redirected URL appears.

- [ ] **Step 4: Run the complete local gate**

Run:

```powershell
npm run build
npm run check:media
npm run check:metadata
npm run check:indexability
npm run check:links
npm run check:content
npx playwright test tests/visual-guide-pages.spec.ts
```

Expected: all commands pass.

- [ ] **Step 5: Deploy and run live checks**

Run: `npx wrangler deploy`

Then:

```powershell
$env:SITE_URL="https://leonida-ledger.pandg1991.workers.dev"
npm run check:live-seo
```

Expected: canonical, schema, image, sitemap, and redirect checks pass.

Commit: `feat: align search release with public value`

### Task 7: Domain, Search Console, Launch Workflow, And Ad Gate

**Files:**

- Create: `docs/editorial/launch-guide-workflow.md`
- Modify: `src/data/site.ts`
- Modify: `wrangler.jsonc` only if custom-domain routing requires it
- Modify: `src/pages/privacy.astro` only when analytics/ads configuration is known
- Modify: project state and handoff docs after deployment

- [ ] **Step 1: Record the internal launch worksheet**

Require platform, game version, patch date, prerequisites, exact method, result, repeatability, spoiler level, media IDs, and sources before launch-week pages become public.

- [ ] **Step 2: Connect the owner-selected domain**

Update the canonical site URL once, deploy, verify the workers.dev host redirects permanently, and rerun live SEO using the custom domain.

- [ ] **Step 3: Complete Search Console handoff**

Verify ownership, submit `/sitemap.xml`, request indexing for the homepage and core hubs, and record the submission date in project state.

- [ ] **Step 4: Keep ads disabled until configuration exists**

Do not add `ads.txt`, AdSense scripts, consent code, or fake ad boxes without the actual publisher ID and consent decision. When available, reserve fixed ad dimensions after the useful answer and between major sections, never before the first answer.

- [ ] **Step 5: Final verification and project update**

Run all local and live gates, inspect Search Console coverage after data arrives, update project docs/registry, and commit:

`docs: record gta6 guide product release`

