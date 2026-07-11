## ADDED Requirements

### Requirement: Monetization has no arbitrary content-count threshold
The system SHALL gate advertising on useful complete content, current disclosures, publisher approval, consent handling, and non-obstructive placement rather than a fixed URL count or traffic minimum.

#### Scenario: Site is policy-ready without a target page count
- **WHEN** the required content, policy, publisher, consent, and placement conditions are complete
- **THEN** a limited advertising experiment may begin without waiting for an arbitrary number of pages

### Requirement: Information-page ads preserve answer access
Display ads SHALL appear only after the Quick Answer or between major content sections and SHALL NOT be adjacent to navigation, steps, download links, filters, or interactive controls.

#### Scenario: Short guide has no safe placement
- **WHEN** a guide cannot fit an ad without obstructing the answer or controls
- **THEN** the guide renders with no ad

### Requirement: Utility completion takes priority
Utility pages SHALL allow the player to begin and complete the core task before monetization interrupts the flow.

#### Scenario: Player opens a utility
- **WHEN** the tool loads
- **THEN** no ad blocks tool startup or primary controls
- **AND** any eligible ad appears only in a stable result or post-completion area

### Requirement: Affiliate links require verified availability and disclosure
Store affiliate links SHALL be enabled only after the program is verified as available to the publisher and the page clearly discloses the commercial relationship.

#### Scenario: Purchase guide links to a retailer
- **WHEN** a verified affiliate relationship is active
- **THEN** the guide may use the tracked link with a visible disclosure
- **AND** the relationship does not alter the factual comparison or recommendation criteria

### Requirement: Monetization experiments are measurable and reversible
The system SHALL monitor layout stability and task access for each enabled placement and SHALL support removing a placement without changing editorial content.

#### Scenario: Placement harms layout or answer access
- **WHEN** verification shows unacceptable layout shift, overlap, accidental-click risk, or blocked task flow
- **THEN** the placement is disabled while the underlying page remains published
