## ADDED Requirements

### Requirement: Useful-content publication gate
An indexable guide SHALL answer one named player intent with specific facts, steps, comparisons, or locations and SHALL include a meaningful next action.

#### Scenario: Thin status page is reviewed
- **GIVEN** a page whose primary content says details are unknown or will be tested later
- **WHEN** the publication gate runs
- **THEN** the page is rejected from the public index regardless of its word count or schema

#### Scenario: Short complete answer is reviewed
- **GIVEN** a concise page that fully resolves a narrow factual question
- **WHEN** the publication gate runs
- **THEN** it may remain indexable without artificial padding

### Requirement: Internal evidence remains available
Source records, test fields, confidence decisions, and update triggers SHALL remain available to editors without being rendered as mandatory public sections.

#### Scenario: Editor updates a release fact
- **GIVEN** a changed official announcement
- **WHEN** the internal record is updated
- **THEN** the public answer and last-updated date can change while the source and decision trail remains auditable internally

### Requirement: Launch-week guide workflow
Mission, cheat, money, wanted-level, settings, map-marker, and vehicle-acquisition guides SHALL become public only after the relevant platform and game version have been tested or an official source supplies the same detail.

#### Scenario: Tested gameplay answer is ready
- **GIVEN** a repeatable result with platform, version, method, outcome, spoiler level, and capture evidence
- **WHEN** an editor changes the route to public
- **THEN** the guide enters indexes and the sitemap with task-specific content and media

### Requirement: Updates are player news
The public updates page SHALL contain GTA 6 announcements and meaningful guide revisions rather than editorial queues or machine-feed links.

#### Scenario: No player-facing change exists
- **GIVEN** an internal source refresh that changes no player answer
- **WHEN** updates are generated
- **THEN** no public news item is created

