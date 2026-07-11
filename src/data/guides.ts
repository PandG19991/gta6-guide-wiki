import type { MediaId } from "./media";
import type { EvidenceLevel } from "./site";

export type { EvidenceLevel } from "./site";

type GuideContent = {
  slug: string;
  primaryMediaId?: MediaId;
  title: string;
  deck: string;
  category: "Release" | "Map" | "Characters" | "Vehicles" | "Missions" | "Cheats" | "Buying";
  updated: string;
  sourceIds: string[];
  bullets: string[];
  platforms: string[];
  gameVersion: string;
  spoilerLevel?: "gameplay" | "story";
  nextAction: { label: string; href: string };
  decisionRows?: Array<{
    option: string;
    bestFor: string;
    status: string;
    caveat: string;
  }>;
};

type TestDetails = {
  platform: string;
  gameVersion: string;
  testedAt: string;
  method: string;
};

export type PublicGuide = GuideContent & (
  | { evidence: "first-party-tested"; tested: TestDetails; editorial?: never }
  | { evidence: Exclude<EvidenceLevel, "first-party-tested">; tested?: never; editorial?: never }
  | { editorial: true; evidence?: never; tested?: never }
);

export const publicGuides: PublicGuide[] = [
  {
    "slug": "gta-6-release-date-countdown-preload",
    "primaryMediaId": "cover-art",
    "title": "GTA 6 Release Date and Preload: November 19, 2026",
    "deck": "GTA 6 launches November 19, 2026 on PS5 and Xbox Series X|S, with preload starting one week earlier.",
    "category": "Release",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "take-two-preorders",
      "rockstar-preorders",
      "rockstar-support-editions"
    ],
    "bullets": [
      "Grand Theft Auto VI is officially scheduled for November 19, 2026.",
      "Confirmed platforms are PlayStation 5 and Xbox Series X|S.",
      "Digital preloading is scheduled to begin November 12, 2026.",
      "Physical copies contain a download code rather than a disc; no official PC date is listed."
    ],
    "decisionRows": [
      {
        "option": "PS5 / Xbox Series X|S launch",
        "bestFor": "Console players planning day-one access",
        "status": "Official release date is November 19, 2026, with digital preload scheduled for November 12, 2026.",
        "caveat": "Check final platform store pages close to launch for local timing, preload windows, and file size."
      },
      {
        "option": "PC launch",
        "bestFor": "Players waiting for a PC version",
        "status": "No official PC release date is listed in the current launch copy.",
        "caveat": "Do not trust PC preorder or download claims unless they cite Rockstar, Take-Two, or a platform store."
      }
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Prepare your console for preload",
      "href": "/guides/gta-6-preload-download-size-prep/"
    }
  },
  {
    "slug": "gta-6-pre-order-standard-vs-ultimate",
    "primaryMediaId": "vintage-pack",
    "title": "GTA 6 Pre-Order Guide: Standard vs Ultimate Edition",
    "deck": "Compare Standard and Ultimate prices, every named edition extra, preorder bonuses, GTA+, and physical versus digital formats.",
    "category": "Buying",
    "updated": "2026-07-11",
    "sourceIds": [
      "take-two-preorders",
      "rockstar-editions",
      "rockstar-support-editions",
      "rockstar-support-preorders"
    ],
    "bullets": [
      "Standard Edition is listed at $79.99.",
      "Ultimate Edition is listed at $99.99.",
      "Ultimate adds named story vehicles, weapons, businesses, clothing, and customization locations.",
      "Preorders and purchases before November 20 include the Vintage Vice City Pack; digital versions also include one month of GTA+.",
      "The physical Standard Edition is a download code in a box with no disc, and there is no physical Ultimate Edition."
    ],
    "decisionRows": [
      {
        "option": "Standard Edition",
        "bestFor": "Players who want the base game at the lowest currently listed price",
        "status": "Publisher announcement lists Standard Edition at $79.99.",
        "caveat": "Standard owners can buy the Ultimate Edition Upgrade later through the PlayStation or Xbox store."
      },
      {
        "option": "Ultimate Edition",
        "bestFor": "Players who know they want the higher-priced edition benefits",
        "status": "Publisher announcement lists Ultimate Edition at $99.99.",
        "caveat": "Buy it only if the named vehicles, weapons, businesses, and style items justify the extra cost to you."
      },
      {
        "option": "Wait before preordering",
        "bestFor": "Players unsure about platform, edition contents, or PC availability",
        "status": "Preorder bonus timing is official, but some storefront details are still best checked near launch.",
        "caveat": "Waiting may mean losing time-limited preorder extras if Rockstar keeps the current cutoff."
      }
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Compare every confirmed edition item",
      "href": "/gta-6/database/editions/"
    }
  },
  {
    "slug": "gta-6-map-leonida-regions-locations",
    "primaryMediaId": "vice-city",
    "title": "GTA 6 Map: Confirmed Leonida Regions and Locations",
    "deck": "Explore the six Leonida destinations Rockstar has named, from Vice City and the Keys to Mount Kalaga.",
    "category": "Map",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "rockstar-leonida",
      "rockstar-media"
    ],
    "bullets": [
      "Rockstar describes Leonida as the state that includes Vice City and surrounding regions.",
      "Official destination names currently include Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
      "Rockstar has not yet published a complete road map, region boundaries, collectibles, or activity markers.",
      "Use community maps as theories until official or in-game navigation data is available."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Browse confirmed Leonida locations",
      "href": "/gta-6/database/locations/"
    }
  },
  {
    "slug": "gta-6-characters-official-cast",
    "primaryMediaId": "jason-lucia",
    "title": "GTA 6 Characters: Jason, Lucia, and Confirmed Characters",
    "deck": "Meet Jason, Lucia, and the supporting characters Rockstar has introduced across Leonida.",
    "category": "Characters",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-leonida"
    ],
    "bullets": [
      "Jason Duval and Lucia Caminos are the central pair in the current official story setup.",
      "Other officially profiled people include Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista, and Brian Heder.",
      "The profiles connect the cast to the Keys, Vice City nightlife, music, smuggling, and robberies.",
      "Rockstar has not announced a complete voice cast, mission order, or character endings."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Browse the character database",
      "href": "/gta-6/database/characters/"
    }
  },
  {
    "slug": "gta-6-vehicles-confirmed-so-far",
    "primaryMediaId": "grotti-cheetah",
    "title": "GTA 6 Vehicles: Named Cars, Boats, and Official Sightings",
    "deck": "See the vehicles Rockstar has named in edition bonuses plus the cars, bikes, boats, and aircraft shown in official media.",
    "category": "Vehicles",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-media",
      "rockstar-editions",
      "rockstar-support-editions"
    ],
    "bullets": [
      "Named vehicles include the '55 Vapid Stanier, '95 Grotti Cheetah, Shitzu Squalo, and '67 Vapid Dominator Buggy.",
      "Official media also shows street cars, motorcycles, boats, aircraft, and police or emergency vehicles.",
      "Rockstar has not published a complete base-game list, normal-world prices, storage limits, or fixed spawn locations.",
      "Edition vehicles should not be assumed to be available through normal early-game play."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Browse the vehicle database",
      "href": "/gta-6/database/vehicles/"
    }
  },
  {
    "slug": "is-gta-6-coming-to-pc",
    "primaryMediaId": "cover-art",
    "title": "Is GTA 6 Coming to PC?",
    "deck": "Rockstar has announced PS5 and Xbox Series X|S versions, but no PC edition or PC release date yet.",
    "category": "Release",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "take-two-preorders"
    ],
    "bullets": [
      "Rockstar and Take-Two currently list PlayStation 5 and Xbox Series X|S for launch.",
      "No official PC release date is listed on the current official GTA 6 page.",
      "A page claiming a confirmed PC date should cite Rockstar, Take-Two, or a platform store.",
      "This page will update only when an official PC announcement exists."
    ],
    "decisionRows": [
      {
        "option": "Buy on PS5 / Xbox Series X|S",
        "bestFor": "Players who want the officially listed launch platforms",
        "status": "Rockstar and Take-Two currently list PlayStation 5 and Xbox Series X|S for launch.",
        "caveat": "Storefront-specific preload, file size, and feature details still need final store checks."
      },
      {
        "option": "Wait for PC",
        "bestFor": "PC-only players or players who prefer mods, keyboard/mouse, or future PC performance settings",
        "status": "No official PC release date is listed on the current official GTA 6 page.",
        "caveat": "Avoid third-party PC preorder, beta, or download claims until an official PC announcement exists."
      }
    ],
    "evidence": "official",
    "platforms": [
      "PC",
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Compare the confirmed console platforms",
      "href": "/guides/gta-6-platforms-ps5-xbox-series-x-s/"
    }
  },
  {
    "slug": "gta-6-platforms-ps5-xbox-series-x-s",
    "primaryMediaId": "cover-art",
    "title": "GTA 6 Platforms: PS5 and Xbox Series X|S",
    "deck": "Compare the confirmed PS5 and Xbox Series X|S launch options and see which platforms are not currently listed.",
    "category": "Release",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "take-two-preorders",
      "rockstar-support-editions"
    ],
    "bullets": [
      "The current official platform list is PlayStation 5 and Xbox Series X|S.",
      "The official page says GTA 6 plays best on PlayStation 5.",
      "No PS4, Xbox One, Nintendo, or PC launch listing is currently shown in the official launch copy.",
      "Storefront-specific download, preload, and performance details should be checked close to launch."
    ],
    "decisionRows": [
      {
        "option": "PlayStation 5",
        "bestFor": "Players already on PS5 or choosing a confirmed console platform",
        "status": "Listed in the current official launch platform copy.",
        "caveat": "Check the PlayStation store close to launch for download size, preload timing, and platform terms."
      },
      {
        "option": "Xbox Series X|S",
        "bestFor": "Players already on current Xbox hardware or choosing a confirmed console platform",
        "status": "Listed in the current official launch platform copy.",
        "caveat": "Check the Xbox store close to launch for download size, preload timing, and platform terms."
      },
      {
        "option": "PC / last-gen / Nintendo",
        "bestFor": "Players who do not want to buy on the currently listed launch consoles",
        "status": "Not listed as launch platforms in the current official launch copy.",
        "caveat": "Treat dates, store pages, and download links as unconfirmed unless Rockstar, Take-Two, or a platform store publishes them."
      }
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Choose between Standard and Ultimate",
      "href": "/guides/gta-6-pre-order-standard-vs-ultimate/"
    }
  },
  {
    "slug": "gta-6-preload-download-size-prep",
    "primaryMediaId": "cover-art",
    "title": "GTA 6 Preload Date, Download Size, and Storage Prep",
    "deck": "Console preload begins November 12 at 12:00 a.m. for the applicable PlayStation or Xbox store region; prepare while the final download size is still unlisted.",
    "category": "Release",
    "updated": "2026-07-11",
    "sourceIds": [
      "take-two-preorders",
      "rockstar-preorders",
      "rockstar-support-editions"
    ],
    "bullets": [
      "Digital preloading is scheduled to begin November 12, 2026.",
      "The physical version is described as containing a download code and being available November 12, 2026 to support preloading.",
      "No final file size is treated as confirmed here until official storefront metadata is visible.",
      "Players should keep console storage, account access, and payment details ready before preload week."
    ],
    "decisionRows": [
      {
        "option": "Digital preorder",
        "bestFor": "Players who want the simplest preload path",
        "status": "Digital preloading is scheduled to begin November 12, 2026.",
        "caveat": "Final file size and exact platform timing still need official store metadata."
      },
      {
        "option": "Physical box with download code",
        "bestFor": "Collectors or gift buyers who still want launch-week preload support",
        "status": "Current publisher copy describes the physical version as containing a download code available November 12, 2026.",
        "caveat": "Retailer delivery or pickup timing can still affect when the code is actually in hand."
      },
      {
        "option": "Storage prep",
        "bestFor": "Anyone with limited console storage or slow internet",
        "status": "Final file size is not treated as confirmed yet.",
        "caveat": "Keep free space, account access, payment status, and console updates ready before preload week."
      }
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Check the full release timeline",
      "href": "/release/"
    }
  },
  {
    "slug": "gta-6-trailer-2-breakdown-evidence",
    "primaryMediaId": "vice-city",
    "title": "GTA 6 Trailer 2 Breakdown: Story, Characters, and Locations",
    "deck": "The useful Trailer 2 takeaways for Jason and Lucia's story, Leonida's regions, vehicles, and the official setting.",
    "category": "Map",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "rockstar-media",
      "rockstar-leonida"
    ],
    "bullets": [
      "Trailer 2 centers Jason and Lucia after a failed score pulls them into a conspiracy across Leonida.",
      "Official footage shows Vice City nightlife, coastal routes, rural areas, vehicles, and law enforcement.",
      "A single frame does not confirm a mission objective, purchasable property, mechanic, or map marker.",
      "Rockstar's media catalog provides the original trailer and official screenshots."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "spoilerLevel": "story",
    "nextAction": {
      "label": "Explore confirmed Leonida locations",
      "href": "/guides/gta-6-map-leonida-regions-locations/"
    }
  },
  {
    "slug": "gta-6-vice-city-location-guide",
    "primaryMediaId": "vice-city",
    "title": "GTA 6 Vice City Location Guide",
    "deck": "How Vice City fits into Leonida, Jason and Lucia's story, and the official map information available now.",
    "category": "Map",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi",
      "rockstar-leonida"
    ],
    "bullets": [
      "Rockstar presents Vice City as a central setting inside Leonida.",
      "Official copy frames the story around Jason and Lucia in and beyond Vice City.",
      "Rockstar has not published confirmed neighborhood, shop, collectible, or activity lists for Vice City.",
      "Use the Leonida map guide for links to the other officially named destinations."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "See every confirmed Leonida region",
      "href": "/guides/gta-6-map-leonida-regions-locations/"
    }
  },
  {
    "slug": "gta-6-leonida-keys-location-guide",
    "primaryMediaId": "leonida-keys",
    "title": "GTA 6 Leonida Keys Location Guide",
    "deck": "Explore the Leonida Keys, Jason's local network, Brian Heder's boat yard, and the region's story connections.",
    "category": "Map",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-leonida"
    ],
    "bullets": [
      "Leonida Keys is an official destination name on Rockstar's Leonida page.",
      "Jason's official bio ties him to the Keys and local drug runners.",
      "Activity, property, and vehicle-spawn claims are not confirmed in current official material.",
      "The current guide covers the official region name and Jason's confirmed connection to the Keys."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "See every confirmed Leonida region",
      "href": "/guides/gta-6-map-leonida-regions-locations/"
    }
  },
  {
    "slug": "gta-6-jason-duval-character-guide",
    "primaryMediaId": "jason-duval",
    "title": "GTA 6 Jason Duval Character Guide",
    "deck": "Jason Duval's Army background, life in the Leonida Keys, local connections, and relationship with Lucia.",
    "category": "Characters",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-leonida"
    ],
    "bullets": [
      "Jason Duval is one of the central GTA 6 characters officially profiled by Rockstar.",
      "Rockstar's bio connects him to the Keys and local drug runners.",
      "His relationship with Lucia is central to the official story setup.",
      "Voice actor, full mission arc, and ending details are not confirmed on this site."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Meet the rest of the confirmed cast",
      "href": "/guides/gta-6-characters-official-cast/"
    }
  },
  {
    "slug": "gta-6-lucia-caminos-character-guide",
    "primaryMediaId": "lucia-caminos",
    "title": "GTA 6 Lucia Caminos Character Guide",
    "deck": "Lucia Caminos' family, prison background, Liberty City connection, plan, and relationship with Jason.",
    "category": "Characters",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-leonida"
    ],
    "bullets": [
      "Lucia Caminos is one of the central characters officially profiled by Rockstar.",
      "Rockstar's bio connects her background to family, prison, and a plan for a better life.",
      "Her partnership with Jason is part of the current official story framing.",
      "Gameplay abilities, mission order, and endings remain unconfirmed."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Meet the rest of the confirmed cast",
      "href": "/guides/gta-6-characters-official-cast/"
    }
  },
  {
    "slug": "gta-6-real-dimez-character-guide",
    "primaryMediaId": "real-dimez",
    "title": "GTA 6 Real Dimez Character Guide",
    "deck": "Meet Bae-Luxe and Roxy, their rise as Real Dimez, and their connection to Only Raw Records.",
    "category": "Characters",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-leonida"
    ],
    "bullets": [
      "Real Dimez are officially profiled on Rockstar's Leonida page.",
      "The official copy links them to social media presence, rap tracks, and Only Raw Records.",
      "This page tracks confirmed ties without turning music-scene hints into mission claims.",
      "Song lists, radio appearances, and mission roles remain unconfirmed until sourced."
    ],
    "evidence": "official",
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Meet the rest of the confirmed cast",
      "href": "/guides/gta-6-characters-official-cast/"
    }
  },
  {
    "slug": "how-to-avoid-gta-6-spoilers-before-launch",
    "primaryMediaId": "cover-art",
    "title": "How to Avoid GTA 6 Spoilers Before Launch",
    "deck": "A practical spoiler-control guide for muting leaks, avoiding fake download bait, and staying on official GTA 6 information paths.",
    "category": "Release",
    "updated": "2026-07-11",
    "sourceIds": [
      "rockstar-vi"
    ],
    "bullets": [
      "Use official Rockstar, Take-Two, platform store, and source-tracked guide pages for launch facts.",
      "Mute terms around Lucia, Jason, endings, missions, map leaks, and final mission before launch week.",
      "Avoid beta, download, generator, and leak pages that mix spoilers with malware bait or thin search spam.",
      "Use spoiler-safe release pages and avoid walkthroughs until you are ready for story details."
    ],
    "decisionRows": [
      {
        "option": "Strict blackout",
        "bestFor": "Players who want story, mission, and map surprises preserved",
        "status": "Mute character, ending, mission, leak, and final-mission terms across feeds.",
        "caveat": "You may miss legitimate official trailers or preorder updates unless official sources are allowed."
      },
      {
        "option": "Official-only feed",
        "bestFor": "Players who want news without leak threads or unverified claims",
        "status": "Follow Rockstar, Take-Two, platform stores, and source-led guide pages.",
        "caveat": "Official trailers can still reveal setting, character, and feature details."
      },
      {
        "option": "Spoiler-safe guides",
        "bestFor": "Players who want launch prep without mission outcomes",
        "status": "Use pages that label speculation and keep walkthrough spoilers out of broad hubs.",
        "caveat": "Post-launch pages should still be checked for spoiler warnings before reading deeply."
      }
    ],
    "editorial": true,
    "platforms": [
      "PlayStation 5",
      "Xbox Series X|S"
    ],
    "gameVersion": "Pre-release official information",
    "nextAction": {
      "label": "Start with confirmed GTA 6 information",
      "href": "/gta-6/"
    }
  }
];

export const guideBySlug = Object.fromEntries(publicGuides.map((guide) => [guide.slug, guide]));

export const guideCategoryMeta = [
  {
    "category": "Release",
    "slug": "release",
    "title": "GTA 6 Release Guides",
    "deck": "Release date, preload, platforms, PC status, and launch-preparation guidance.",
    "image": "/assets/og-release.png"
  },
  {
    "category": "Buying",
    "slug": "buying",
    "title": "GTA 6 Buying Guides",
    "deck": "Preorder, price, edition, bonus, physical-vs-digital, and purchase-timing guidance.",
    "image": "/assets/og-buying.png"
  },
  {
    "category": "Map",
    "slug": "map",
    "title": "GTA 6 Map and Location Guides",
    "deck": "Leonida, Vice City, official regions, trailer details, and spoiler-safe location guides.",
    "image": "/assets/og-map.png"
  },
  {
    "category": "Characters",
    "slug": "characters",
    "title": "GTA 6 Character Guides",
    "deck": "Official character profiles and relationship details confirmed by Rockstar.",
    "image": "/assets/og-characters.png"
  },
  {
    "category": "Vehicles",
    "slug": "vehicles",
    "title": "GTA 6 Vehicle Guides",
    "deck": "Current vehicle classes shown in official GTA 6 material.",
    "image": "/assets/og-vehicles.png"
  },
  {
    "category": "Missions",
    "slug": "missions",
    "title": "GTA 6 Mission and Walkthrough Guides",
    "deck": "Spoiler-control and current mission-related preparation guides.",
    "image": "/assets/og-missions.png"
  },
  {
    "category": "Cheats",
    "slug": "cheats",
    "title": "GTA 6 Cheat Guides",
    "deck": "Current GTA 6 cheat-code status and guidance for avoiding fake codes and generators.",
    "image": "/assets/og-cheats.png"
  }
] as const satisfies Array<{
  category: PublicGuide["category"];
  slug: string;
  title: string;
  deck: string;
  image: string;
}>;

export const publicGuideCategoryMeta = guideCategoryMeta.filter((meta) =>
  publicGuides.some((guide) => guide.category === meta.category)
);
export const categoryMetaBySlug = Object.fromEntries(guideCategoryMeta.map((meta) => [meta.slug, meta]));
export const categoryMetaByName = Object.fromEntries(guideCategoryMeta.map((meta) => [meta.category, meta]));
