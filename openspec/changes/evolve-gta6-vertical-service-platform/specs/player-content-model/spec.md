## ADDED Requirements

### Requirement: Private editorial objects never become public products
The system SHALL keep Facts, Signals, Candidates, raw Contributions, scores, and review records outside public static output and unauthenticated endpoints.

#### Scenario: Public build is generated
- **WHEN** the production static build runs
- **THEN** only approved Game Hub, Entity, Guide, Utility, News, and governance pages are emitted
- **AND** no private editorial object or review metadata is serialized into client-visible assets

### Requirement: Facts and signals do not create URLs by default
The system SHALL use Facts as reusable claim records and Signals as editorial inputs rather than standalone public routes.

#### Scenario: Official fact changes
- **WHEN** a reliable source changes a fact already used by a public page
- **THEN** the affected canonical page is updated instead of generating a fact page

### Requirement: Site phase is separate from publication state
The system SHALL represent one site operating phase independently from each content item's publication state and applicability metadata.

#### Scenario: Pre-launch guide remains useful after launch
- **WHEN** the site changes from PRE_LAUNCH to LAUNCH
- **THEN** the guide remains published if its player job is still valid
- **AND** its platform, version, freshness, and verification metadata can be updated without changing publication state

### Requirement: Public evidence is classified
The system SHALL publish claims only when evidence is official, first-party-tested, or corroborated; unconfirmed material SHALL remain private.

#### Scenario: Reproducible third-party method is reviewed
- **WHEN** an editor verifies one reproducible source or two independent gameplay records and records applicable platform and version
- **THEN** the method may be published as corroborated evidence

#### Scenario: Unverifiable rumor is reviewed
- **WHEN** a claim cannot be reproduced or supported by reliable evidence
- **THEN** it is excluded from public content and public feeds

### Requirement: Task pages lead with the answer
Published Guide pages SHALL present the concise answer before large subject media and SHALL avoid redundant site-wide navigation inside the article flow.

#### Scenario: Player opens a guide on desktop or mobile
- **WHEN** the first article viewport renders
- **THEN** the title, update/applicability context, and Quick Answer appear before the subject image
- **AND** the page provides one explicit useful next action after the answer content

