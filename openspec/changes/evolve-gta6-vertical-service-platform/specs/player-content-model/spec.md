## ADDED Requirements

### Requirement: Private editorial objects never become public products
The system SHALL keep Facts, Signals, Candidates, raw Contributions, keyword opportunities, revenue records, scores, and review records outside public static output, public source control, and unauthenticated endpoints.

#### Scenario: Public build is generated
- **WHEN** the production static build runs
- **THEN** only approved Game Hub, Entity, Guide, Utility, News, and governance pages are emitted
- **AND** no private editorial object or review metadata is serialized into client-visible assets

#### Scenario: Public repository is inspected
- **WHEN** a visitor reads the public GitHub repository
- **THEN** the repository contains approved publishable data and reusable operating rules only
- **AND** it excludes private candidates, raw submissions, keyword opportunities, revenue records, and editorial review history

### Requirement: Facts and signals do not create URLs by default
The system SHALL use Facts as reusable claim records and Signals as editorial inputs rather than standalone public routes.

#### Scenario: Official fact changes
- **WHEN** a reliable source changes a fact already used by a public page
- **THEN** the affected canonical page is updated instead of generating a fact page

### Requirement: Operating phase does not create a public state machine
Editors SHALL use PRE_LAUNCH, LAUNCH, and EVERGREEN as private operating judgment while the public repository contains publishable content and static redirects only.

#### Scenario: Pre-launch guide remains useful after launch
- **WHEN** editors begin launch-period operations
- **THEN** a useful pre-launch guide remains in public data without a lifecycle-state migration
- **AND** its platform, version, freshness, and verification metadata can be updated normally

### Requirement: Spoiler warning is contextual
The system SHALL omit spoiler labels from routine factual pages and SHALL use `gameplay` or `story` warnings only when content can reveal relevant gameplay or narrative information.

#### Scenario: Purchase guide renders
- **WHEN** a release, edition, platform, or purchase-decision guide renders without plot or mission disclosure
- **THEN** no `none` spoiler badge is displayed

#### Scenario: Story guide renders
- **WHEN** a guide reveals mission or story information
- **THEN** the applicable `gameplay` or `story` warning appears before the revealing content

### Requirement: Editorial responsibility is visible
The system SHALL identify the Leonida Ledger Editorial Team as the reviewer and SHALL show platform, version, test date, and method on first-party-tested guides without inventing individual expertise.

#### Scenario: First-party-tested guide renders
- **WHEN** a tested guide is published
- **THEN** it displays editorial review responsibility and the recorded platform, version, test date, and method

### Requirement: US market conventions are explicit
The system SHALL use `en-US`, USD where prices are shown, US-relevant store paths, and explicit timezone or regional qualifiers for time-sensitive statements.

#### Scenario: Release time differs by region
- **WHEN** a page describes midnight, preload, unlock, or store timing
- **THEN** the page names the applicable platform, region, or timezone instead of implying one universal local time

### Requirement: Public evidence is classified
The system SHALL publish claims only when evidence is official, first-party-tested, or corroborated; unconfirmed material SHALL remain private.

#### Scenario: Reproducible third-party method is reviewed
- **WHEN** an editor verifies one reproducible source or two independent gameplay records and records applicable platform and version
- **THEN** the method may be published as corroborated evidence

#### Scenario: Unverifiable rumor is reviewed
- **WHEN** a claim cannot be reproduced or supported by reliable evidence
- **THEN** it is excluded from public content and public feeds

### Requirement: Task pages lead with the answer
Published Guide pages SHALL place the concise answer before subject media in document order, MAY place answer and media beside each other on desktop, and SHALL avoid redundant site-wide navigation inside the article flow.

#### Scenario: Player opens a guide on desktop or mobile
- **WHEN** the first article viewport renders
- **THEN** the title, update/applicability context, and Quick Answer appear before the subject image
- **AND** the page provides one explicit useful next action after the answer content

### Requirement: Public products form a connected player journey
The system SHALL use the GTA 6 hub as the durable center for current Start Here tasks, meaningful updates, guides, entities, and available utilities.

#### Scenario: Player enters the GTA 6 hub
- **WHEN** the hub renders
- **THEN** it presents current operating-phase tasks and meaningful changes
- **AND** each item links to a concrete Guide, Entity, Utility, or qualifying News page

#### Scenario: Player finishes a guide
- **WHEN** the player reaches the end of a published Guide
- **THEN** the page presents one explicit next action
- **AND** any generic same-category recommendations remain a fallback rather than the primary path

### Requirement: Public content adds decision or action value
Every published page SHALL help the player decide or act faster than reading the underlying announcement or source alone; factual rewriting without added task value SHALL remain unpublished.

#### Scenario: Official announcement is evaluated
- **WHEN** an editor can only restate the official announcement without adding a decision, comparison, instruction, consolidation, or affected-task explanation
- **THEN** the announcement is linked or used to update an existing page rather than rewritten as a new page
