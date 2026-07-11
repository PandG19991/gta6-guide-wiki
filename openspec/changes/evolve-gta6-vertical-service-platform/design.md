## Context

`gta6gameguide.xyz` is live, canonical, submitted to Search Console, and currently builds 39 static pages. The player-first redesign, contextual game media, route cleanup, redirects, and deterministic SEO/content gates are already complete. This change is therefore an incremental operating-model change, not another redesign.

The site is pre-launch, has limited search data, no public community, no contribution volume, no analytics baseline, and no approved ad or affiliate configuration. The design must improve answer speed and content flow now while preserving a path to tools, contributions, and monetization only when evidence justifies them.

Two independent final reviews agreed that the proposed direction is valid but required four corrections: private editorial concepts must not become public products; news publication needs mandatory gates rather than a score; lifecycle and publication state must be separated; and the current article template must surface Quick Answer before large media and redundant navigation.

## Goals / Non-Goals

**Goals:**

- Make the GTA 6 hub, entities, guides, updates, and future utilities one connected player journey.
- Keep internal signals, candidates, contribution originals, scores, and review records private.
- Publish or update pages from verifiable player value, not from headline availability, URL count, or SEO narration.
- Support fast launch-period publishing with explicit evidence levels and version applicability.
- Establish minimal, staged paths for one utility, private contributions, ads, and affiliate links.
- Preserve Astro static generation and the existing deterministic quality gates.

**Non-Goals:**

- Building a forum, comments, public accounts, profiles, reputation, direct messages, or user-generated public pages.
- Building a CMS, public API, automatic AI publisher, complex scoring engine, or industrial anti-scraping system before observed need.
- Creating speculative mission, map, cheat, money, weapon, or vehicle pages before reliable information exists.
- Competing with established GTA sites on news volume.
- Replacing Astro, Cloudflare Workers Static Assets, the media manifest, or the current visual identity.

## Decisions

### Decision: Separate editorial inputs from public products

Private editorial objects are `Fact`, `Signal`, `Candidate`, and raw `Contribution`. Public products are `Game Hub`, `Entity`, `Guide`, `Utility`, and qualifying `News`.

A Fact never owns a public URL. A Signal normally updates an existing Entity or Guide. Candidate data, raw submissions, scores, and review history are never shipped in static output or public endpoints. Future private administration requires Cloudflare Access or equivalent authentication; `noindex` and `robots.txt` are not access controls.

Alternative considered: expose facts and signals as public tracker pages. Rejected because this recreates thin pages and internal workflow language.

### Decision: Use a mandatory news decision tree

A standalone News URL is allowed only when all conditions hold:

1. The information has a reliable source or repeatable test.
2. It changes a player's understanding, purchase decision, or gameplay action.
3. Updating an existing authoritative page would not satisfy the distinct user task better.
4. The new page has enough verified information to answer that task.

Search demand and lasting value only prioritize eligible work. They cannot compensate for missing reliability or independent intent. Every qualifying News item links to affected Entity or Guide pages, which receive the durable answer.

Alternative considered: publish when three of four signals pass. Rejected because unreliable or non-distinct stories could still pass.

### Decision: Keep one site operating phase and simple content state

The site has one `operatingPhase`: `PRE_LAUNCH`, `LAUNCH`, or `EVERGREEN`. Public content has only `draft`, `published`, `redirected`, or `withdrawn` publication state. Guides separately record player job, platform applicability, game/patch version, last tested or verified time, freshness, and spoiler level (`none`, `gameplay`, or `story`).

Alternative considered: give each article a lifecycle state machine. Rejected because pre-launch pages can remain useful after launch and players care more about current version applicability.

### Decision: Allow three publishable evidence levels

Public claims may be:

- `official`: supported by Rockstar, Take-Two, a platform owner, or an official store.
- `first-party-tested`: reproduced by this site with platform and version recorded.
- `corroborated`: supported by two independent gameplay records, or one reproducible source checked by an editor.

`unconfirmed` material remains private. Leaks, unverifiable rumors, copied walkthroughs, cheat services, and unsafe downloads remain excluded.

Alternative considered: require official or first-party testing for every guide. Rejected because a small team would miss launch-period player needs despite reproducible evidence being available.

### Decision: Improve the current journey before adding platform infrastructure

The first implementation milestone reuses existing data and components:

- Article order becomes title/update context, Quick Answer, subject media, details, next action, and compact sources.
- The 11-item article rail is removed from task pages; global navigation, breadcrumb, local contents, and related actions remain.
- `/gta-6/` becomes the durable content hub with latest meaningful changes and a small Start Here task set.
- Updates gain explicit affected routes; guides gain one explicit next action with current category recommendations as fallback.
- The internal-sounding map tracker slug receives one player-language replacement URL and a permanent redirect.

Alternative considered: build the candidate database, contribution backend, and tools first. Rejected because the current player path has higher-value, lower-cost gaps.

### Decision: Start demand operations as a manual queue

The initial Candidate Queue is a private human-maintained list. Inputs may include official changes, Search Console queries, search suggestions, trends, competitor gaps, site-search misses, and player leads. The decision remains human: update an existing URL, create a distinct page, defer, or reject.

Automation may import candidates later but must not publish. No custom scoring engine or dedicated public search product is included in the first milestone.

Alternative considered: build a scheduled demand radar immediately. Rejected because a cold-start site has insufficient query and contribution volume to justify it.

### Decision: Make contributions conditional and private

Contribution intake is a later milestone. When enabled, the flow is: safety checks, human triage, optional AI organization, human verification and final editing, then publication through normal editorial content.

The form defaults to anonymous credit and requires separate opt-in for a screened nickname. It may accept one or two editor-only evidence URLs but never fetches them automatically. It accepts no files, accounts, public profiles, or public links. Original submissions and unnecessary personal data receive a documented retention period.

Alternative considered: mandatory AI rewriting before review. Rejected because AI adds cost and can distort evidence; it is an optional editor tool, not a publication authority.

### Decision: Monetize by intent without arbitrary thresholds

AdSense readiness depends on complete useful content, current policy/disclosure pages, publisher approval, consent handling, and non-obstructive reserved placement. It does not depend on a fixed page count or a traffic minimum. Initial ads are a low-density experiment on a small set of information pages after Quick Answer, never beside navigation, steps, or controls.

Verified US-accessible store affiliate links may be enabled earlier on purchase-decision pages with clear disclosure. No retailer or platform program is assumed to exist until eligibility and terms are verified.

Alternative considered: wait for a stable traffic baseline before applying. Rejected because a baseline is useful for measuring impact, not a universal eligibility rule.

## Risks / Trade-offs

- Corroborated launch guides can inherit third-party errors -> require reproducibility, platform/version notes, editor sign-off, and prompt correction.
- A manual queue may become slow -> automate only the import step after repeated volume proves the bottleneck.
- Removing the article rail may reduce broad browsing -> retain a single explicit next action and related-guide fallback, then measure when privacy-compliant analytics exists.
- Changing the map slug can temporarily disturb discovery -> perform one 301, update every internal reference and sitemap entry, and avoid further churn.
- Private contributions create abuse and privacy obligations -> do not enable until Turnstile, rate limiting, authentication, retention, and moderation are implemented together.
- Ads can reduce trust and Core Web Vitals -> use fixed-size, low-density experiments and remove placements that harm answer access or layout stability.
- Public content remains copyable -> protect private operations and rate-limit abusive extraction later; do not block verified search crawlers or normal reading.

## Migration Plan

1. Correct the content-state model, news decision rule, and stale operating documents without changing public URLs except the approved map redirect.
2. Improve article answer order, remove redundant task-page navigation, strengthen `/gta-6/`, and add explicit update/next-action relationships using existing static data.
3. Start the private candidate list and use Search Console plus official-source review to choose the next content updates.
4. Select and validate one small utility only after a real player task and data source are available.
5. Implement contribution intake only after its moderation, privacy, and abuse gates are funded and approved.
6. Verify affiliate programs and run low-density monetization experiments only after the relevant external accounts and disclosures exist.

Each milestone ships independently from an isolated worktree and must pass the existing build, media, metadata, indexability, link, content, live SEO, and desktop/mobile checks. Rollback is a normal Git revert plus Cloudflare redeploy; redirects remain unless the original URL is deliberately restored.

## Open Questions

- Which real Search Console queries should drive the first post-design content update after Google finishes processing the site?
- Which single utility demonstrates repeat use with available, reliable data?
- Which US affiliate programs are actually open to this publisher and compatible with the site?
- What submission volume or repeated editorial bottleneck will justify enabling the contribution backend or automated imports?
