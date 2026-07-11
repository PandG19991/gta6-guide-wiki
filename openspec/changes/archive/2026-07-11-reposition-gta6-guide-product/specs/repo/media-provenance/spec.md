## ADDED Requirements

### Requirement: Governed media registry
Every visible game-related media asset SHALL resolve through one registry entry containing provenance, ownership, usage basis, owner approval, formal permission state, attribution, alt text, intrinsic dimensions, and allowed placements. Owner approval is a proportionate editorial risk decision and SHALL NOT claim formal publisher authorization.

#### Scenario: Approved media renders
- **GIVEN** a registry item marked approved for a page placement
- **WHEN** that page builds
- **THEN** the rendered media uses the recorded source, alt text, width, height, and attribution behavior

#### Scenario: Pending media is blocked
- **GIVEN** a registry item without recorded owner approval or with a prohibited provenance class
- **WHEN** the site builds for production
- **THEN** no public page renders that item

#### Scenario: Editorial use is approved without formal permission
- **GIVEN** an official downloadable asset with provenance, limited placements, owner approval, `not-formally-granted` permission state, and a replacement path
- **WHEN** the site builds for production
- **THEN** the asset may render without implying that Rockstar or Take-Two granted a commercial license

### Requirement: Core pages use subject media
The homepage, each core landing page, and entity/database surfaces SHALL include approved subject media. Priority guides SHALL include media when it materially helps identify the subject, location, object, comparison, or step; a complete narrow answer SHALL NOT be blocked from indexing solely because it has no dedicated inline image.

#### Scenario: Character guide
- **GIVEN** a public Jason or Lucia guide
- **WHEN** the page renders
- **THEN** the primary media depicts that character or an approved related official scene rather than generic category artwork

#### Scenario: Guide has no lawful subject image
- **GIVEN** a narrow troubleshooting or factual guide has a complete useful answer but no approved dedicated image
- **WHEN** the page is prepared for publication
- **THEN** it may remain indexable without weakly related media
- **AND** it does not use leaked, copied, or deceptive generated gameplay imagery

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

