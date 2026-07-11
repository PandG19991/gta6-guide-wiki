# editorial-demand-queue Specification

## Purpose
TBD - created by archiving change evolve-gta6-vertical-service-platform. Update Purpose after archive.
## Requirements
### Requirement: Candidate intake is private and minimal
The system SHALL begin with a private human-maintained candidate list and SHALL NOT require a database, scoring engine, or automatic publisher for the first milestone.

#### Scenario: New demand signal is found
- **WHEN** an editor finds an official change, Search Console query, search suggestion, trend, competitor gap, site-search miss, or player lead
- **THEN** the editor records the source, affected player job, target or affected URL, and disposition in the private list

### Requirement: News publication uses mandatory gates
The system SHALL create a standalone News URL only when the information is reliable, changes a player decision or action, cannot be better handled by updating an existing authoritative page, and contains enough verified information to answer a distinct task.

#### Scenario: Signal changes an existing answer
- **WHEN** a reliable announcement changes information already owned by an Entity or Guide
- **THEN** the canonical page and its update record are changed
- **AND** no standalone News URL is required

#### Scenario: Signal forms an independent task
- **WHEN** all mandatory news gates pass and the existing canonical pages cannot satisfy the distinct player task
- **THEN** a News page may be published and SHALL link to every materially affected Entity or Guide

### Requirement: Search volume is a priority signal only
The system SHALL use search demand and lasting value to prioritize eligible work, not to override evidence or distinct-intent requirements.

#### Scenario: Trending topic lacks verified value
- **WHEN** a topic is popular but lacks reliable information or a useful player outcome
- **THEN** it is deferred or rejected rather than published for traffic

### Requirement: Updates use one route family
The system SHALL keep official changes, guide revisions, and qualifying standalone stories under `/updates/` and SHALL NOT create a parallel `/news/` hierarchy for the current product stage.

#### Scenario: Qualifying standalone story is published
- **WHEN** a candidate passes every mandatory News gate
- **THEN** its route uses `/updates/<slug>/`
- **AND** `/updates/` links the story to its affected Guide or Entity pages

### Requirement: Automation cannot publish
Any future source monitor or demand importer SHALL create private candidates only and SHALL require human approval before public content changes.

#### Scenario: Automated monitor detects a source change
- **WHEN** a monitored official page changes
- **THEN** the system creates or updates a private candidate
- **AND** no public route or content is changed automatically

