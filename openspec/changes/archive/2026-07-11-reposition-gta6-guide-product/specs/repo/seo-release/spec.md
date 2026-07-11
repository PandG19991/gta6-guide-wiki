## ADDED Requirements

### Requirement: Value-gated sitemap
The sitemap SHALL include only canonical public routes that pass the useful-content publication gate.

#### Scenario: Internal route exists
- **GIVEN** an internal or withdrawn route
- **WHEN** the sitemap is generated
- **THEN** the route is absent and has no indexable internal link path

### Requirement: Honest structured data
Structured data SHALL describe visible page content and SHALL not generate generic FAQ questions solely to increase schema coverage.

#### Scenario: Guide has no real FAQ
- **GIVEN** a guide without distinct visible questions and answers
- **WHEN** metadata is generated
- **THEN** Article and Breadcrumb data may remain but FAQPage data is omitted

### Requirement: Image search metadata
Every indexable guide SHALL expose a representative approved image through page metadata and Article schema where applicable.

#### Scenario: Search crawler reads a guide
- **GIVEN** an indexable article with approved primary media
- **WHEN** metadata is rendered
- **THEN** canonical, Open Graph, Twitter, and Article image URLs reference that representative asset

### Requirement: Custom-domain release gate
The canonical domain SHALL change only with redirects, live metadata checks, sitemap verification, and Search Console submission instructions ready in the same release.

#### Scenario: Domain is connected
- **GIVEN** the owner has connected a custom domain in Cloudflare
- **WHEN** the production release runs
- **THEN** old-host URLs permanently redirect, canonical and sitemap URLs use the custom domain, live SEO checks pass, and the sitemap is ready for Search Console submission

### Requirement: Deferred advertising
Advertising code MUST remain absent until publisher identity, consent requirements, placement rules, and reserved dimensions are configured.

#### Scenario: No AdSense publisher ID exists
- **GIVEN** the site has no approved publisher configuration
- **WHEN** production builds
- **THEN** no ad network script or fake ad slot is emitted

