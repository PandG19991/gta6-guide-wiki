## ADDED Requirements

### Requirement: Useful public content remains crawlable
The system SHALL keep canonical public Guides, Entities, Utilities, qualifying News, and hub pages accessible to verified search crawlers.

#### Scenario: Verified Google crawler requests a public page
- **WHEN** the crawler requests a canonical indexable URL
- **THEN** the response is not blocked by private-surface or anti-abuse rules
- **AND** canonical, sitemap, robots, and indexability behavior remain consistent

### Requirement: Private operations require authentication
The system SHALL protect candidates, signals, raw contributions, review records, and administration through server-side isolation and authenticated access rather than `noindex` or `robots.txt`.

#### Scenario: Unauthenticated client requests private operations
- **WHEN** an unauthenticated request targets a private administration or queue resource
- **THEN** the private data is not returned
- **AND** no equivalent data is available in static assets or client bundles

### Requirement: Anti-abuse controls are proportionate
The system SHALL apply rate limits or challenges to abusive access patterns and write endpoints without blanket-blocking normal readers or verified search crawlers.

#### Scenario: Client rapidly enumerates protected or high-cost endpoints
- **WHEN** the request pattern crosses the configured abuse threshold
- **THEN** the client is rate-limited or challenged
- **AND** ordinary cached public-page access remains available

### Requirement: Complex anti-scraping requires evidence
The system SHALL NOT add custom fingerprinting, blanket bot blocking, or industrial scraping defenses without logs showing material abuse that simpler controls cannot handle.

#### Scenario: Competitor can manually read a public guide
- **WHEN** no material automated abuse is present
- **THEN** the site relies on public crawlability, provenance, update speed, utilities, and private operations rather than adding speculative blocking infrastructure

### Requirement: Outbound links use accurate relationship values
The system SHALL treat ordinary official and editorial citations as normal links and SHALL mark paid or affiliate links with `sponsored nofollow`.

#### Scenario: Guide cites an official source
- **WHEN** the source link is an ordinary editorial citation without compensation
- **THEN** the link uses normal relationship handling with `noopener` as needed
- **AND** it is not marked `nofollow` solely because it leaves the site

#### Scenario: Guide uses an affiliate link
- **WHEN** the destination may compensate the publisher
- **THEN** the link uses `sponsored nofollow` and the page shows the required commercial disclosure
