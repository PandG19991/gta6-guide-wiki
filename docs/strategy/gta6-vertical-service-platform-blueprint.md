# GTA 6 Vertical Service Platform Blueprint

## 1. Product Definition

`gta6gameguide.xyz` is an English GTA 6 guide and player-service platform for US search users. Its job is to help a player make a decision or complete a task faster than a general game portal, then give that player a useful reason to continue or return.

The product is not a generic news blog, a public wiki, a forum, an SEO dashboard, or a clone of GTABase, 3DM, Ali213, IGN, or GTA BOOM. It learns their durable structure: one game hub, task guides, entity databases, meaningful updates, practical utilities, and intent-matched commercial paths.

The near-term wedge is:

> GTA 6 purchase decisions, release preparation, and high-frequency player answers for US search users, supported by maintainable entities and useful tools.

## 2. Confirmed Owner Preferences

These decisions are fixed unless the owner explicitly reverses them:

- Build a GTA 6 vertical service platform, not a conventional blog or stiff wiki.
- Public pages must help players; editorial tasks, SEO safety narration, scoring, and verification queues remain private.
- Use recognizable character, location, vehicle, edition, map, and later first-party UI/gameplay media; do not return to image-light article layouts.
- Do not build a forum, comments, public accounts, profiles, reputation, or direct messages.
- Player contributions are private leads, never direct public posts.
- Accepted contributions are edited into site-owned content; nickname credit is optional and contains no public profile or link.
- AI may organize or draft, but it never verifies facts or publishes autonomously.
- Avoid rules that are more conservative than the actual platform or legal requirement.
- Preserve Google crawlability; do not sacrifice indexing for speculative anti-scraping.
- Monetize with low-density display ads and verified store affiliate links without letting inventory dictate content.
- Use worktrees, bounded agents, deterministic checks, and milestone reviews; do not repeat the previous excessive-agent pattern.

## 3. Player Jobs By Operating Phase

### PRE_LAUNCH

- When does GTA 6 release in my region?
- Which platforms and editions are confirmed?
- Should I preorder, wait, or choose another format?
- What is known about PC, preload, storage, characters, locations, and vehicles?
- How do I avoid scams, fake downloads, and unwanted spoilers?

### LAUNCH

- How do I complete this mission or objective?
- Where do I find this vehicle, weapon, item, location, or collectible?
- What settings work on my platform and patch?
- How do I earn money, reduce wanted level, save progress, or recover from an error?

### EVERGREEN

- What remains for 100 percent completion?
- Which entities, missions, collectibles, activities, achievements, and rewards am I missing?
- What changed in a patch or DLC?
- Which route, build, vehicle, weapon, or method is best for a named goal?

Editors use one operating phase as judgment, not as a new public enum or automatic switch. The public repository contains publishable content and static redirects only. Pages keep a player job, platform/version applicability, and freshness. Spoiler warning is optional: routine factual pages show no `none` badge, while relevant content uses `gameplay` or `story`.

## 4. Public Information Architecture

### Homepage `/`

Purpose: acquisition and orientation.

- Brand and unmistakable GTA 6 subject media in the first viewport.
- Search or direct task entry.
- Current highest-priority paths.
- A small latest-changes surface.
- A visible hint of the next section.

The homepage does not duplicate the entire game hub and does not explain the editorial system.

### Game Hub `/gta-6/`

Purpose: the durable center of the product graph.

- Start Here tasks for the current operating phase.
- Latest meaningful changes and affected guides.
- Guide groups, entity databases, and available utilities.
- Clear transitions between purchase, world, characters, vehicles, missions, settings, and completion.

### Guides `/guides/...`

Purpose: answer one player task.

- Desktop masthead: title, applicability, and Quick Answer beside subject media.
- Mobile DOM order: title and applicability, Quick Answer, subject media, details.
- Steps, comparisons, tables, maps, or troubleshooting only when the task needs them.
- One explicit next action plus a small related fallback.
- Compact sources at the end.

### Entities `/gta-6/database/...`

Purpose: maintain stable people, places, vehicles, editions, weapons, missions, and later other objects.

- Recognizable subject media.
- Filter and comparison only when the data supports useful decisions.
- Direct links into tasks that use the entity.
- No record-count vanity blocks or empty database shells.

Core entry, entity, and database surfaces remain image-rich. A complete narrow troubleshooting or factual answer may publish without a dedicated inline image when no relevant approved media exists; weakly related decoration is not a substitute.

### Updates `/updates/` And Qualifying News

Purpose: explain changes that matter to players and route them to durable answers.

`/updates/` remains a compact GTA 6 Updates surface until enough qualifying stories justify a broader news product. It does not imply newsroom-scale coverage.

Qualifying standalone stories use `/updates/<slug>/`; the site does not add a parallel `/news/` hierarchy.

### Utilities

Purpose: complete a recurring task, not decorate the platform.

No utility is included in the first correction milestone. The first utility is selected only when a real player task and reliable data are available. Pre-launch candidates include a release/preload readiness checklist; post-launch candidates include a completion checklist. Only one is built first.

### Trust And Policy Pages

Purpose: provide concise ownership, privacy, correction, source, affiliate, and advertising disclosures.

They remain reachable from the footer but do not dominate navigation or repeat warnings across every page.

## 5. Private Editorial Layer

Private objects:

- `Fact`: reusable claim plus evidence and applicability.
- `Signal`: a source change or observed event requiring triage.
- `Candidate`: a possible update, page, entity, or utility.
- `Contribution`: an untrusted player-submitted lead.

Public products:

- `Game Hub`
- `Entity`
- `Guide`
- `Utility`
- qualifying `News`

Private objects never create public URLs by default. They are not stored in the public GitHub repository or serialized into static assets, public search, feeds, sitemap, client bundles, or unauthenticated APIs. `noindex` and `robots.txt` are not privacy controls.

## 6. Publication Decisions

### Update Existing Page First

A new fact or signal updates the existing canonical page when it changes an answer already owned by that page. Shared facts do not justify duplicate URLs.

### Create A New Guide Or Entity

A new URL is valid when it serves a distinct player task or entity with enough unique, reliable information. “One canonical answer” does not mean forcing unrelated tasks into one oversized page.

### Create Standalone News

All four conditions are mandatory:

1. Reliable source or repeatable test.
2. Material change to player understanding, purchase, or gameplay action.
3. Existing authoritative pages cannot satisfy the distinct task better.
4. Enough verified information exists to answer the task now.

Search demand and lasting value prioritize eligible candidates; they never replace these gates. “A different headline can be written” is not a criterion.

### Defer Or Reject

- No answer yet: keep private.
- Unreliable rumor or leak: reject from the public product.
- Duplicate intent: merge or update and redirect if needed.
- Internal plan, source note, SEO target, or risk discussion: keep private.

## 7. Evidence Without Over-Caution

Publishable evidence:

- `official`: developer, publisher, platform owner, or official store.
- `first-party-tested`: reproduced by this site with platform and version recorded.
- `corroborated`: two independent gameplay records, or one reproducible source checked by an editor.

`unconfirmed` remains private.

The site does not require first-party testing for every launch guide and does not pretend that every game-media site needs blanket publisher authorization. Media use is governed by provenance, context, transformation where appropriate, accurate attribution, a concise unofficial-site statement, and a rapid replacement/takedown path. Official-download availability is evidence of intended sharing, not an unlimited commercial license.

The public page shows only information useful to the player: source, last updated, platform/version applicability, and material uncertainty. It does not show internal legal reasoning, SEO safety, test queues, or approval status.

A public page must help the player decide or act faster than reading the underlying announcement alone. Restating official facts without a comparison, instruction, consolidation, affected-task explanation, or other player value does not justify a page.

Public guides use `Reviewed by Leonida Ledger Editorial Team`. First-party-tested guides additionally show platform, game/patch version, test date, and method. `analysis` means editorial interpretation of cited evidence, not a separate evidence source or invented expertise.

US-facing content uses `en-US`, USD when prices are shown, US-relevant store paths, and explicit platform/region/timezone qualifiers for preload and unlock timing. The site does not force automatic regional redirects.

## 8. Visual And Interaction Standard

- Every priority page uses subject-relevant game media, not generic category decoration.
- Hero and article images identify the actual game, character, location, vehicle, edition, or task.
- Desktop guide mastheads balance answer and media; mobile places the answer first without removing the image.
- Stable image dimensions, responsive formats, useful alt text, and controlled crops protect performance and readability.
- Dense guide navigation belongs on the hub, database, and index pages; task articles use breadcrumb, local contents when needed, and next actions.
- Advertising never occupies the first answer position or sits beside controls.
- The site remains clearly unofficial and does not imitate Rockstar's logo or interface.

## 9. Demand And Content Operations

### Initial Operation

Use one private manual Candidate Queue at `D:\workspace\projects\gta6-guide-wiki\candidate-queue.md`, outside the public repository and public build output. Each item records:

- source and discovery date;
- player job;
- affected or proposed URL;
- evidence level;
- decision: update, create, defer, reject;
- owner and review date.

Inputs:

- official Rockstar, Take-Two, platform, and store changes;
- Search Console queries and indexing state;
- search suggestions and trends;
- competitor coverage gaps;
- internal search misses when available;
- player contribution leads.

### Automation Boundary

Future monitors may import or deduplicate candidates. They never publish, rewrite public pages, or open untrusted links automatically. Automation is added only when repeated manual work shows a clear bottleneck.

## 10. Player Contributions

Contribution intake is a later capability, not a public forum.

Flow:

> boundary validation -> abuse controls -> human triage -> optional AI organization -> human verification and editing -> normal publication

Rules:

- Default anonymous; nickname credit requires explicit consent and screening.
- No public profile, comments, reputation, direct message, or contributor link.
- No file uploads.
- At most two editor-only evidence URLs; the server does not fetch them automatically.
- Turnstile, honeypot, size/link limits, rate limiting, private storage, authenticated moderation, and retention/deletion rules launch together.
- Accepted information becomes site-owned editorial content; the original submission is never published verbatim by default.
- Finite retention periods for rejected submissions, accepted raw submissions, security logs, and unnecessary personal data are selected and documented before contribution storage is enabled.
- A contributor may request removal of nickname credit without retracting independently verified editorial facts.

## 11. SEO And Crawlability

- `.xyz` has no designed ranking penalty; domain history, useful content, links, crawlability, and user satisfaction matter more than the suffix.
- Keep one canonical HTTPS origin and one canonical sitemap.
- Index only complete useful pages; do not use URL count as a target.
- Structured data must match visible content and actual page type.
- Ordinary official and editorial citations use normal links with `noopener`; paid or affiliate links use `sponsored nofollow`.
- Search Console guides prioritization and diagnoses indexing; it is not a publishing oracle and does not replace editorial judgment.
- Public pages must remain available to verified Google crawlers.
- Private operations require authentication and server-side isolation, not `robots.txt`.
- Do not create doorway pages, rewritten announcement farms, fake FAQs, or pagination for ad inventory.

## 12. Security And Anti-Scraping

Public guide content is inherently copyable because Google must crawl it. The defensible assets are update speed, first-party testing, entity relationships, utilities, media provenance, and the private editorial loop.

Current security posture:

- Static public output and existing security headers remain the default.
- No secrets, private candidates, raw submissions, or scoring data enter client bundles.
- Cloudflare caching and verified-bot handling remain compatible with search indexing.
- Rate limits and challenges target abusive request patterns and future write endpoints, not ordinary reading.
- Cloudflare Access protects any future administration surface.
- Complex fingerprinting, blanket bot blocking, and custom anti-scraping infrastructure are deferred until logs prove a real problem.

## 13. Monetization Model

### Information And News

- Low-density display ads after Quick Answer or between substantial sections.
- Short pages may contain one or zero ads.
- No ads beside navigation, steps, download links, filters, or tool controls.

### Purchase Decisions

- Verified US-accessible retailer or platform affiliate links may launch before display advertising.
- Commercial disclosure is visible and concise.
- Affiliate availability and terms are verified rather than assumed.
- Commission does not alter factual comparisons or recommendations.

### Utilities

- The core task starts without an ad gate.
- Monetization appears only in a stable result or post-completion area.
- No forced registration or fake download behavior.

### Readiness

There is no fixed minimum page count or traffic threshold. Advertising requires complete useful content, current policy/disclosure pages, publisher approval, consent handling, stable placement, and a reversible limited experiment. Traffic baseline is a measurement aid, not an eligibility rule.

## 14. Metrics

### Acquisition

- Search impressions, clicks, CTR, average position, and useful landing pages by content type.

### Distribution

- Hub-to-guide and guide-to-next-action click-through after privacy-compliant event measurement exists.
- Cloudflare Web Analytics may observe visits, referrers, and web performance, but it does not supply custom task events. Click funnels and tool completion remain unmeasured until the first utility or monetization experiment justifies a minimal event mechanism. Do not introduce GA4, a warehouse, or a custom analytics platform at the current stage.

### Content Health

- Useful indexed pages, correction rate, source coverage, stale-page count, and update latency.

### Utility

- Starts, completions, return use, and related-guide transitions after the first tool exists.

### Contribution

- Valid lead rate, rejection reasons, moderation time, accepted contributions, and abuse rate after intake exists.

### Revenue

- RPM, viewability, affiliate outbound and conversion, revenue per 1,000 high-intent visits, CLS, and task-completion impact after monetization exists.

Do not use total URL count, word count, ad count, pagination, or download-button clicks as success metrics.

## 15. Delivery Roadmap

### Milestone A: Correct The Existing Player Journey

- Move Quick Answer into the first article viewport while retaining subject media.
- Remove the redundant 11-item rail from task articles.
- Make `/gta-6/` the durable Start Here and update hub.
- Add affected routes to meaningful updates and explicit next actions to guides.
- Replace the internal-sounding map tracker slug with one player-language URL and 301.
- Remove internal update records and future content plans from the public repository; keep only approved published update data and reusable rules.
- Remove repeated footer caution and stale 25-page/traffic hard gates from internal docs.

Acceptance: representative desktop and mobile guides show answer and media without overlap; every core page has a useful next action; build, media, metadata, indexability, links, content, redirects, and live SEO pass.

### Milestone B: Operate Demand And Deepen Existing Content

- Start the private manual Candidate Queue.
- Use official changes and real Search Console data to update existing pages first.
- Strengthen entity-to-task and task-to-entity links.
- Add content only when reliable information and distinct player intent exist.

Acceptance: every published change has a source, player job, canonical decision, and affected-route record.

### Milestone C: Validate One Utility

- Choose one recurring task with reliable data.
- Build the smallest no-account tool using existing platform features and local storage when sufficient.
- Measure completion before expanding the utility layer.

Acceptance: the tool completes one named task on desktop and mobile and naturally links back to relevant guides.

### Milestone D: Enable Private Contributions

- Implement the complete abuse, privacy, moderation, and attribution boundary together.
- Keep AI optional and human publication mandatory.

Acceptance: submissions cannot appear publicly without editor action; abuse controls and deletion behavior are verified.

### Commercial Track

This track can run independently after external accounts are ready:

- verify affiliate eligibility in parallel with Milestone A, then add disclosed links to purchase pages only when a real eligible program is confirmed;
- complete AdSense and consent setup;
- test low-density fixed placements on a bounded page set;
- remove any placement that damages answer access, layout stability, or task completion.

## 16. Explicitly Deferred Or Rejected

- Forum, comments, public accounts, profiles, points, reputation, and direct messages.
- Public wiki editing or direct user publishing.
- File uploads and public contributor links.
- Automated AI publication.
- Full CMS, public API, universal content generator, and custom search engine.
- Multiple utilities before one proves value.
- Complex anti-scraping before observed abuse.
- Portal-scale navigation, unrelated game news, downloads, MODs, trainers, and unsafe tools.
- Blanket media-license assumptions, repeated legal disclaimers, fixed URL quotas, and fixed traffic gates.

## 17. Decision Rule

When a future idea appears, use this order:

1. Does it solve a real player task now?
2. Can the existing page, data, component, or native platform feature solve it?
3. Is the information reliable and maintainable?
4. Does it strengthen acquisition, completion, return use, or revenue without harming trust?
5. Can it ship as one bounded milestone with a measurable result?

If the answer fails early, do not build it yet.
