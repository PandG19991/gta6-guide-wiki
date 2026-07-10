## ADDED Requirements

### Requirement: Governed media registry
Every visible game-related media asset SHALL resolve through one registry entry containing provenance, ownership, usage basis, rights state, attribution, alt text, intrinsic dimensions, and allowed placements.

#### Scenario: Approved media renders
- **GIVEN** a registry item marked approved for a page placement
- **WHEN** that page builds
- **THEN** the rendered media uses the recorded source, alt text, width, height, and attribution behavior

#### Scenario: Pending media is blocked
- **GIVEN** a registry item whose commercial-use basis is unresolved
- **WHEN** the site builds for production
- **THEN** no public page renders that item

### Requirement: Core pages use subject media
The homepage, each core landing page, and every indexable guide SHALL include at least one approved visual that identifies the page subject or task.

#### Scenario: Character guide
- **GIVEN** a public Jason or Lucia guide
- **WHEN** the page renders
- **THEN** the primary media depicts that character or an approved related official scene rather than generic category artwork

#### Scenario: Guide has no lawful subject image
- **GIVEN** no approved screenshot or artwork is available
- **WHEN** the page is prepared for publication
- **THEN** it uses an original factual diagram or remains non-indexable instead of using leaked, copied, or deceptive generated gameplay imagery

### Requirement: Responsive and accessible images
All raster media SHALL use stable dimensions, responsive sources where useful, descriptive alt text, and loading priority appropriate to its viewport position.

#### Scenario: Mobile guide load
- **GIVEN** a guide opened on a narrow viewport
- **WHEN** images load
- **THEN** the layout does not shift materially, the page does not overflow horizontally, and below-fold images do not block first content rendering

### Requirement: Prohibited media sources
The production site MUST NOT use leaked media, competitor-hosted images, search-result copies, fan maps presented as official, or generated imagery presented as real gameplay/UI.

#### Scenario: Unapproved asset enters data
- **GIVEN** an asset without an allowed provenance class
- **WHEN** quality checks run
- **THEN** the build fails with the asset identifier and missing approval field

