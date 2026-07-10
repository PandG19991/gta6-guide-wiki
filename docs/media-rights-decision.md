# Media Rights Decision

## Current decision

The locally stored Rockstar Games images in `src/assets/media/official/` are approved for limited internal editorial use on this site. `approved` is a governance state for this repository; it is not permission from Rockstar Games.

Rockstar's [Policy on Posting Copyrighted Rockstar Games Material](https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material) describes non-commercial posting and does not grant commercial digital-publishing permission. The `permissionStatus` for the current catalog is therefore `not-formally-granted`. Formal licensing, commercial approval, or any policy exception remains an owner handoff before monetized publication.

## Boundaries

- Use only downloaded, registry-backed official catalog files; do not hotlink.
- Do not use leaks, competitor media, or generated assets as production substitutes for official media.
- Do not imply affiliation with Rockstar Games or Take-Two.
- The current official catalog has no reusable HUD or menu set. Do not invent official UI.
- Remove or replace an asset immediately if the owner changes the decision or formal rights review rejects it.

## Inventory

| Media class | Current state | Public use |
| --- | --- | --- |
| Official downloadable artwork and screenshots | Eleven subject images registered locally | Approved for the limited placements recorded in `src/data/media.ts` |
| Official Rockstar videos | Available from the official media catalog | Not embedded because no current page requires video playback |
| Existing original site artwork | Retained only where still referenced by social metadata | Review during the metadata phase; not used as guide subject media |
| Generated design concepts | Stored under `docs/design/` | Design reference only; prohibited from production pages |
| Future owned gameplay or UI captures | Not available before launch | Pending a capture, spoiler, and rights decision |

## Sources

- [Rockstar GTA VI media](https://www.rockstargames.com/VI/media)
- [Rockstar GTA VI screenshots](https://www.rockstargames.com/VI/media/screenshots)
- [Rockstar GTA VI artwork and wallpapers](https://www.rockstargames.com/VI/media/artwork-wallpapers)
- [Rockstar copyrighted-material policy](https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material)
