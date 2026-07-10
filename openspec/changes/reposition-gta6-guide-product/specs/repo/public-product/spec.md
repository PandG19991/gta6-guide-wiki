## ADDED Requirements

### Requirement: Route publication lifecycle
Every content route SHALL have an explicit publication outcome that determines whether it is generated, linked, indexed, and included in the sitemap.

#### Scenario: Placeholder guide is not public
- **GIVEN** a guide only describes future launch-week testing
- **WHEN** the site is built
- **THEN** the guide is absent from public indexes and the sitemap, and no indexable page claims that a walkthrough currently exists

#### Scenario: Complete guide is public
- **GIVEN** a guide answers a defined player question with current source-backed information
- **WHEN** the site is built
- **THEN** the guide is linked from its category, indexable, canonical, and present exactly once in the sitemap

### Requirement: Player-first page hierarchy
Every indexable guide SHALL present the useful answer and player action before editorial metadata or citations.

#### Scenario: Visitor opens a guide
- **GIVEN** an indexable guide page
- **WHEN** a visitor reads the first content section
- **THEN** they see the answer, decision, or task path without encountering search terms, page status, publishing plans, or verification workflow

### Requirement: Public navigation reflects player jobs
Primary navigation SHALL expose GTA 6 guide topics rather than editorial operations.

#### Scenario: Visitor scans navigation
- **GIVEN** any public page
- **WHEN** the visitor opens the header or footer navigation
- **THEN** guide, map, character, vehicle, release, database, and update paths are prominent while testing protocol, machine feeds, and SEO policy sources are absent

## REMOVED Requirements

### Requirement: Public editorial workflow surfaces
**Reason:** Testing templates, content queues, search-term coverage, evidence-table quotas, and verification plans are internal production controls, not player value.

**Migration:** Move reusable instructions to project documentation or internal data and retain only concise public source citations and correction policy.

