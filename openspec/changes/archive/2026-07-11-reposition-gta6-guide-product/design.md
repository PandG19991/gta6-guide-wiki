## Context

The Astro site is deployed and technically healthy: the isolated baseline builds 53 static pages with no Astro diagnostics. The problem is product-level. Twenty-six guide records share one template that exposes search terms, page status, evidence tables, source ledgers, and verification plans. The sitemap includes internal pages and five launch-week placeholders. Public visual media consists of one original hero illustration plus seven generic category graphics reused as card and Open Graph images.

The business is at the demand-validation and traffic stage, not the ad-optimization stage. GTA guide demand is proven by long-running task-first products such as IGN, GTABase, GTA BOOM, and PowerPyx, but this site has not yet earned a differentiated player workflow. The plan must therefore improve the useful product before increasing indexed URL count or adding advertising.

Official media needs a controlled path. Rockstar currently exposes a GTA VI download center with 70 screenshots, 20 artwork/wallpaper files, and 11 videos, and labels the collection for downloading and sharing. Rockstar's separate copyrighted-material policy, however, describes a non-commercial fan-use tolerance and says it does not grant a blanket right for commercial digital publishing. This plan treats official-download media as a governed editorial source, not a free stock library, and keeps rights decisions out of public copy.

## Goals / Non-Goals

**Goals:**

- Make the first viewport and every indexable guide visibly recognizable as a GTA 6 guide experience.
- Organize pages around player questions and tasks, with direct answers before methodology or citations.
- Reduce or remove public content that only documents future work, SEO posture, or editorial operations.
- Introduce the smallest reusable media model that can support landing pages, cards, guides, and databases.
- Preserve source integrity, copyright traceability, accessibility, performance, security, and indexability checks.
- Ship in phases that can be deployed and evaluated independently.

**Non-Goals:**

- Inventing GTA 6 gameplay, UI, item, mission, cheat, or map details before official publication or hands-on testing.
- Copying competitor text, screenshots, maps, or page composition.
- Scraping Google Images, fan wikis, social posts, leaks, or unofficial asset packs.
- Replacing Astro, adding a CMS, adding a database, or introducing a new frontend framework during this adjustment.
- Adding live ads before a publisher ID, consent decision, useful completed pages, and stable placement exist.
- Treating this plan as legal advice or as a commercial-use license for Rockstar-owned media.

## Decisions

### Decision: Public pages are player-task surfaces

Homepage, category, database, and article hierarchy will be based on release decisions, places, people, vehicles, missions, cheats, and completion tasks. Confidence remains a compact badge or source note when useful, but search terms, page status, verification plans, source counts, content engines, testing templates, publishing queues, machine feeds, sitemap counts, and SEO language leave the main experience.

Alternative considered: retain the evidence-led interface as the site's differentiation. Rejected because it makes internal quality control the product and forces every page to explain why the real answer is incomplete.

### Decision: Route lifecycle controls generation and indexing

Guide records will use an explicit publication outcome that separates public/indexable pages from preview/internal records. The sitemap will derive only from indexable records. The first cleanup will remove the testing protocol from public navigation and indexing, merge overlapping buying pages where the same official facts repeat, and withdraw five launch-week placeholders until tested content exists.

Initial route disposition:

| Outcome | Routes or content |
| --- | --- |
| Keep and rewrite | Home, Guides, GTA 6 overview, Features, Database, Release, Map, Updates, character/location/vehicle databases, release/PC/platform/preload/map/character/vehicle/trailer guides |
| Merge and redirect | Price, GTA+ preorder benefit, physical vs digital, and Vintage Vice City Pack into the main preorder/edition decision guide when the standalone page has no unique player task |
| Withdraw until useful | Mission list testing hub, launch-week beginner guide, wanted-level test plan, early-money tracker, and cheats testing tracker |
| Public but secondary | About, privacy, contact, concise editorial policy, and a publisher-source page |
| Internal only | Testing protocol, source/test worksheets, content engine, next queue, machine feeds, search-term coverage, verification plan, and SEO/AdSense policy sources |

Alternative considered: keep all stable URLs live to age before launch. Rejected because index age does not compensate for pages that do not satisfy the query, and the same routes can be introduced when real answers exist.

### Decision: One governed media manifest

Add one static media registry rather than a CMS or asset service. Each item records `id`, local or embed source, kind, subject, owner, origin URL, usage basis, rights state, attribution, alt text, width, height, and allowed placements. Rendering code may only use approved items. Pending items remain internal.

Media source order:

1. Official video embeds from Rockstar-controlled channels.
2. Rockstar official download-center screenshots or artwork after the internal rights decision is recorded.
3. Original diagrams, comparison graphics, maps, and non-deceptive generated editorial art.
4. First-party gameplay and UI captures after release, with platform, patch, capture date, spoiler status, and rights notes.

Alternative considered: place image URLs directly in guide records. Rejected because ownership and rights state would be duplicated and impossible to audit consistently.

### Decision: Image-rich guide interface, not magazine decoration

The visual atmosphere will be game-guide dense (density 6/10), moderately asymmetric (variance 4/10), and restrained in motion (2/10). Images must identify a character, location, vehicle, edition, map region, or action; atmospheric filler does not qualify.

- Homepage: full-bleed game-relevant hero media with title and guide search over a protected text zone, followed immediately by visual guide paths. The next section remains visible in the first viewport.
- Guide index: thumbnail-led rows or compact grids grouped by player task; remove confidence as a primary filter.
- Article: breadcrumb, subject media, concise answer, optional local table of contents, task-specific sections, comparison/step media, related guides, then compact sources.
- Databases: portraits or thumbnails attached to records, filters only where the data justifies them, and no record-count vanity metrics.
- Mobile: one-column content, 44px controls, no horizontal page overflow, explicit image aspect ratios, and no text-over-image overlap outside the controlled hero treatment.

Alternative considered: retain the newspaper/editorial theme and add more generic cover art. Rejected because the user needs to inspect game subjects, not a visual metaphor for research.

### Decision: Content depth is enforced by usefulness, not word count

An indexable guide must answer one defined player intent, contain an approved relevant visual, provide specific facts/steps/comparison data, and offer a useful next action. It must not pass merely because an evidence table or a minimum number of paragraphs exists. Small factual pages may remain short when the answer is complete.

Alternative considered: require a fixed word or image count. Rejected because it encourages padding and irrelevant media.

### Decision: SEO and monetization follow the revised product

Article and Breadcrumb structured data stay. Generic generated FAQs are removed unless the visible page contains real, non-duplicative questions. Sitemap membership follows the route lifecycle. Images receive dimensions, descriptive alt text, responsive variants, and social metadata. Custom-domain migration uses permanent redirects and live checks before Search Console submission. Ad slots are planned with reserved dimensions but remain disabled until publisher and consent configuration exists.

Alternative considered: preserve every existing schema and URL because the checks currently pass. Rejected because the checks encode the current internal-facing content model rather than player value.

## Risks / Trade-offs

- Official media creates commercial-use uncertainty -> keep owner approval separate from formal permission, record provenance and limited placements, and provide a fast asset-withdrawal path without treating written permission as a universal prerequisite.
- Removing placeholder URLs reduces sitemap size -> measure useful indexed pages and search impressions instead of URL count.
- Merging buying pages may lose long-tail coverage -> preserve redirects and retain standalone pages only when they answer a distinct query with unique content.
- Image-rich pages may hurt Core Web Vitals -> generate responsive AVIF/WebP variants, declare dimensions, preload only the LCP asset, and lazy-load below the fold.
- Pre-launch facts can change -> keep source/update metadata internally and show only a concise last-updated line publicly.
- A broad redesign can sprawl -> ship public cleanup, media foundation, templates, content, and external SEO handoff as separate deployable phases.

## Coordination Notes

- Affected areas: the Astro repository, Cloudflare deployment, GitHub source control, custom domain, and Search Console property.
- Remaining external handoffs: the owner later provides AdSense/consent identifiers and any verified affiliate enrollment. Domain and Search Console setup are complete; media follows the documented owner-approved editorial-use boundary and replacement path.
- Implementation entry criteria: this OpenSpec change and the detailed execution plan are approved; each phase runs in an isolated worktree; current live checks remain available as a baseline.
- Source references: `https://www.rockstargames.com/VI/downloads` and `https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material`.

## Current Decisions

- `gta6gameguide.xyz` is the canonical domain and its Search Console Domain property is verified.
- Current official downloadable media may be used only within the recorded owner-approved editorial placements; `not-formally-granted` remains explicit and every asset retains a replacement path.
- AdSense remains disabled until publisher and consent configuration exist. Cloudflare Web Analytics is the default future option for lightweight distribution measurement; GA4, a warehouse, and a custom event platform are not part of this change.

