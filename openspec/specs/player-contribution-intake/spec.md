# player-contribution-intake Specification

## Purpose
TBD - created by archiving change evolve-gta6-vertical-service-platform. Update Purpose after archive.
## Requirements
### Requirement: Contributions are private until editorial publication
The system SHALL never expose a submitted contribution directly and SHALL publish accepted information only through the normal editorial content model after human verification.

#### Scenario: Player submits a lead
- **WHEN** the submission passes boundary validation and abuse checks
- **THEN** it enters a private moderation queue
- **AND** it is absent from public pages, search, sitemap, feeds, and public APIs

### Requirement: Human review controls publication
The contribution flow SHALL be safety checks, human triage, optional AI organization, human fact verification, and human final editing.

#### Scenario: AI organizes a submission
- **WHEN** an editor chooses to use AI for deduplication or drafting
- **THEN** the result remains private until a human verifies the claims and publishes an edited page

### Requirement: Public identity is optional and bounded
The form SHALL default to anonymous credit and SHALL require separate consent before publishing a screened nickname.

#### Scenario: Contributor declines attribution
- **WHEN** an accepted contributor does not opt into nickname credit
- **THEN** the published page contains no contributor identity

### Requirement: Contribution input minimizes risk
The contribution endpoint SHALL reject file uploads and public links, MAY accept at most two editor-only evidence URLs without automatic fetching, and SHALL enforce length, link, honeypot, Turnstile, and rate limits.

#### Scenario: Submission contains an evidence URL
- **WHEN** a valid submission includes an allowed evidence URL
- **THEN** the URL is visible only to authenticated editors
- **AND** the server does not automatically request it

### Requirement: Private contribution data has a retention policy
The system SHALL define finite retention periods for rejected submissions, accepted raw submissions, security logs, and unnecessary personal data before contribution storage is enabled. A contributor MAY request removal of public nickname credit without retracting verified editorial facts.

#### Scenario: Rejected contribution reaches retention limit
- **WHEN** the configured retention period expires
- **THEN** the raw submission and unnecessary personal data are deleted while non-identifying aggregate abuse records may remain

#### Scenario: Contributor withdraws nickname credit
- **WHEN** an authenticated or reasonably verified contributor requests removal of their published nickname
- **THEN** the credit is removed while the independently verified editorial content remains published

