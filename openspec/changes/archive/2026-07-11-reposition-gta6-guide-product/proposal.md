## Why

Leonida Ledger has a sound technical base, but its public product is modeled around editorial proof, publishing queues, and SEO safety instead of player outcomes. The homepage and every guide expose internal concepts such as evidence tables, search terms, verification plans, content engines, and testing protocols. Several indexed pages are pre-launch placeholders whose main answer is that the real guide will be written later.

The visual layer has the same mismatch. The repository contains one visible original hero illustration and seven generic category/OG graphics, but no page-level character, location, vehicle, item, map, or interface media. The result reads as a careful editorial blog rather than a GTA 6 guide product. Since the commercial model depends on search traffic and advertising, the immediate priority is useful, recognizable player content; ad infrastructure and URL volume must follow that value rather than substitute for it.

## What Changes

- Reframe the public information architecture around player jobs: release and buying decisions, map and locations, characters, vehicles, missions, cheats, and launch preparation.
- Remove internal editorial workflow, SEO language, machine feeds, publishing queues, search-term disclosures, and verification plans from public page bodies and primary navigation.
- Classify every current route as keep, rewrite, merge, noindex, redirect, or remove; stop indexing pages that do not yet answer a real player question.
- Replace generic category artwork with a governed media system for official embeds, approved official downloads, original diagrams, generated editorial artwork, and later first-party gameplay captures.
- Redesign the homepage, guide indexes, database surfaces, and article template as a dense but readable game-guide interface with contextual imagery, direct answers, task navigation, tables, maps, and related next actions.
- Preserve source rigor as an internal workflow and a compact public citation layer rather than the main user experience.
- Rebuild the pre-launch content set around a smaller number of complete, source-backed pages and define a launch-week workflow for tested walkthroughs and databases.
- Tighten indexability, structured data, image metadata, performance, security, custom-domain migration, Search Console submission, and later ad placement around the revised public product.

## Affected Areas

- Known:
  - `repo/src/pages/` public routes, navigation, templates, and legal pages.
  - `repo/src/data/` guide, source, database, update, and site metadata.
  - `repo/src/components/` cards, media, header, footer, guide rail, and confidence UI.
  - `repo/src/styles/global.css` visual hierarchy and responsive layout.
  - `repo/public/assets/` image assets and provenance metadata.
  - `repo/scripts/` content-quality, metadata, indexability, link, and live SEO gates.
  - GitHub and Cloudflare deployment, custom domain, and Google Search Console handoff.
- Current external state:
  - `gta6gameguide.xyz` is canonical, the Search Console Domain property is verified, and the sitemap is submitted.
  - Rockstar-owned downloadable media uses a documented limited editorial-use decision with provenance and a replacement path; this is not represented as formal publisher permission or as a universal requirement for guide sites.
  - AdSense publisher ID and consent configuration remain unavailable until the owner begins monetization setup.
  - Hands-on GTA 6 UI and gameplay captures cannot exist until released gameplay is legally available to test.

## Capabilities

### New Capabilities

- `public-route-lifecycle`: each route has an explicit player intent, publication state, and indexability outcome.
- `media-provenance`: every visible game-related asset records origin, owner, usage basis, attribution, alt text, and allowed placements.
- `guide-media`: landing pages, guide cards, articles, and database rows can render contextual media without duplicating asset logic.
- `launch-guide-operations`: internal test and source records support publishing without appearing as public filler.
- `search-performance-handoff`: custom-domain, Search Console, sitemap, and post-deploy checks have a single release checklist.

### Modified Capabilities

- `site-positioning`: from source-led editorial ledger to player-first GTA 6 guide and database.
- `guide-content`: from generic evidence/status blocks to direct answers, steps, comparisons, maps, and player decisions.
- `visual-system`: from typography-and-card-led editorial styling to an image-rich, object-focused game-guide interface.
- `updates`: from source ledger and publishing queue to actual GTA 6 news and meaningful guide revisions.
- `indexability`: from URL-count growth to value-gated indexing.
- `monetization-readiness`: from policy copy in public pages to reserved, low-CLS ad slots added only after selected pages, publisher configuration, disclosures, and consent behavior qualify.

## Impact

- Workspace planning: implementation should run in isolated worktrees and ship in independently verifiable phases, beginning with public-layer cleanup before visual expansion.
- Linked repos or folders: the Astro repository is the only implementation home; project state and registry records are updated after each deployed phase.
- User-facing behavior: visitors see GTA 6 characters, places, vehicles, maps, and relevant official media immediately; each indexed page answers a concrete question without exposing editorial process language.
