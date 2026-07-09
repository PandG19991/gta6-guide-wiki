import type { ConfidenceKey } from "./site";

export const gta6RailItems = [
  { label: "Overview", href: "/gta-6/" },
  { label: "Features", href: "/gta-6/features/" },
  { label: "Database", href: "/gta-6/database/" },
  { label: "Vehicles", href: "/gta-6/database/vehicles/" },
  { label: "Characters", href: "/gta-6/database/characters/" },
  { label: "Locations", href: "/gta-6/database/locations/" },
  { label: "Editions", href: "/gta-6/database/editions/" },
  { label: "Release", href: "/release/" },
  { label: "Map", href: "/map/" },
  { label: "Guides", href: "/guides/" },
  { label: "Sources", href: "/sources/" }
];

export const gta6HubStats = [
  { label: "Guide pages", value: "26", detail: "FAQ and schema enhanced" },
  { label: "Sitemap URLs", value: "51", detail: "clean canonical set" },
  { label: "Evidence tables", value: "26", detail: "high-intent pages" },
  { label: "Policy stance", value: "No leaks", detail: "official or tested only" }
];

export const gta6DatabaseCards: Array<{
  title: string;
  href: string;
  count: number;
  confidence: ConfidenceKey;
  deck: string;
  nextUpdate: string;
}> = [
  {
    title: "Vehicles",
    href: "/gta-6/database/vehicles/",
    count: 6,
    confidence: "observed",
    deck: "A proof-labeled vehicle-category tracker that avoids unverified model-name spam before launch.",
    nextUpdate: "Add individual vehicle pages only after official naming or repeatable launch testing."
  },
  {
    title: "Characters",
    href: "/gta-6/database/characters/",
    count: 8,
    confidence: "official",
    deck: "Jason, Lucia, and supporting official character profiles with source boundaries.",
    nextUpdate: "Split official character pages when more verified story or mission data exists."
  },
  {
    title: "Locations",
    href: "/gta-6/database/locations/",
    count: 6,
    confidence: "official",
    deck: "Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
    nextUpdate: "Add tested markers after release; no leaked map coordinates."
  },
  {
    title: "Editions",
    href: "/gta-6/database/editions/",
    count: 6,
    confidence: "official",
    deck: "Standard Edition, Ultimate Edition, preorder bonuses, GTA+ benefit, and preload records.",
    nextUpdate: "Refresh when storefront pages expose stable edition details."
  }
];

export const gta6FeatureSections = [
  {
    title: "Release Information",
    confidence: "official" as const,
    points: [
      "Grand Theft Auto VI is scheduled for November 19, 2026.",
      "The currently listed launch platforms are PlayStation 5 and Xbox Series X|S.",
      "Digital preload is scheduled to begin November 12, 2026."
    ],
    sourceId: "rockstar-vi",
    href: "/guides/gta-6-release-date-countdown-preload/"
  },
  {
    title: "Map, Locations, and Setting",
    confidence: "official" as const,
    points: [
      "Leonida is the official state setting.",
      "Official destination names include Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
      "This site keeps leaked map claims out of the confirmed layer."
    ],
    sourceId: "rockstar-leonida",
    href: "/guides/gta-6-map-leonida-regions-evidence-tracker/"
  },
  {
    title: "Characters and Story Setup",
    confidence: "official" as const,
    points: [
      "Jason Duval and Lucia Caminos are the central pair in the current official setup.",
      "Rockstar has profiled several supporting people and groups.",
      "Voice actor, mission order, and ending claims remain unconfirmed here."
    ],
    sourceId: "rockstar-leonida",
    href: "/guides/gta-6-characters-official-cast/"
  },
  {
    title: "Vehicles and Driving",
    confidence: "observed" as const,
    points: [
      "Vehicles are visible in official media, but this site avoids model-name claims without strong evidence.",
      "Launch-week vehicle notes will track class, acquisition, storage, upgrade path, and source.",
      "Official or tested proof is required before individual vehicle pages open."
    ],
    sourceId: "rockstar-media",
    href: "/gta-6/database/vehicles/"
  },
  {
    title: "Editions and Preorder",
    confidence: "official" as const,
    points: [
      "Standard Edition and Ultimate Edition pricing is tracked from publisher announcements.",
      "The Vintage Vice City Pack is the named preorder bonus currently shown.",
      "Storefront terms, regional prices, and final item lists still need platform checks."
    ],
    sourceId: "take-two-preorders",
    href: "/guides/gta-6-pre-order-standard-vs-ultimate/"
  },
  {
    title: "Cheats, Missions, and Launch Testing",
    confidence: "analysis" as const,
    points: [
      "No cheat codes, mission order, or early-money methods are treated as confirmed before release.",
      "The testing protocol records platform, prerequisites, side effects, and repeatability.",
      "Exploit, fake generator, and online-cheating content stays excluded."
    ],
    sourceId: "google-spam",
    href: "/testing-protocol/"
  }
];

export const vehicleDatabaseRows: Array<{
  category: string;
  status: "Observed" | "Official" | "Analysis";
  proof: string;
  sourceId: string;
  page: string;
  launchUse: string;
}> = [
  {
    category: "Street cars and traffic",
    status: "Observed",
    proof: "Official media shows regular road traffic and player-facing vehicle use, but this site does not treat specific model names as confirmed without stronger proof.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
    launchUse: "Class, handling, storage, purchase path, and spawn notes."
  },
  {
    category: "Motorcycles and bikes",
    status: "Observed",
    proof: "Two-wheel vehicle use appears in official media; individual model names wait for official naming or hands-on verification.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
    launchUse: "Handling, stunt use, rider risk, storage, and upgrade tests."
  },
  {
    category: "Boats and watercraft",
    status: "Observed",
    proof: "Leonida's coastal setting and official media support watercraft tracking, but the final list remains unconfirmed.",
    sourceId: "rockstar-vi",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
    launchUse: "Dock access, water routes, mission restrictions, and purchase notes."
  },
  {
    category: "Aircraft",
    status: "Observed",
    proof: "Official media includes aerial vehicle moments; exact pilotable list and acquisition remain launch-week questions.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-trailer-2-breakdown-evidence/",
    launchUse: "Pilotability, storage, map access, mission locks, and controls."
  },
  {
    category: "Police and emergency vehicles",
    status: "Observed",
    proof: "Law-enforcement response is visible enough to plan testing, but detailed vehicle behavior waits for repeatable wanted-level tests.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-wanted-level-police-escape-guide/",
    launchUse: "Wanted-level behavior, pursuit strength, roadblocks, and escape routes."
  },
  {
    category: "Edition or bonus vehicles",
    status: "Analysis",
    proof: "Publisher preorder copy confirms edition and bonus framing, but this page does not invent vehicle rewards before official item lists are stable.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-vintage-vice-city-pack/",
    launchUse: "Edition benefit checks and item-level source ledger."
  }
];

export const characterDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  launchUse: string;
}> = [
  {
    name: "Jason Duval",
    status: "Official",
    proof: "Rockstar profiles Jason as one of the central characters and links him to the Keys, local runners, and Lucia.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-jason-duval-character-guide/",
    launchUse: "Relationship, mission availability, safehouse, and early-game role checks."
  },
  {
    name: "Lucia Caminos",
    status: "Official",
    proof: "Rockstar profiles Lucia as a central character with prison, family, and Jason story framing.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-lucia-caminos-character-guide/",
    launchUse: "Mission order, playable moments, relationship status, and spoiler-safe story notes."
  },
  {
    name: "Cal Hampton",
    status: "Official",
    proof: "Rockstar identifies Cal as Jason's friend and a fellow associate of Brian.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    launchUse: "Contact unlocks, side activity, radio/comms references, and mission involvement."
  },
  {
    name: "Boobie Ike",
    status: "Official",
    proof: "Rockstar describes Boobie as a Vice City figure tied to real estate, a club, a studio, and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    launchUse: "Business locations, music-scene missions, rewards, and faction ties."
  },
  {
    name: "Dre'Quan Priest",
    status: "Official",
    proof: "Rockstar profiles Dre'Quan around Only Raw Records, Boobie's club, and the Vice City music scene.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    launchUse: "Label missions, music unlocks, contacts, and Real Dimez links."
  },
  {
    name: "Real Dimez",
    status: "Official",
    proof: "Rockstar profiles Bae-Luxe and Roxy as Real Dimez and links them to DWNPLY and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-real-dimez-character-guide/",
    launchUse: "Music-scene missions, radio references, social-media posts, and collectable ties."
  },
  {
    name: "Raul Bautista",
    status: "Official",
    proof: "Rockstar profiles Raul as a seasoned bank robber looking for talent and bigger scores.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    launchUse: "Heist setup, crew role, reward path, and mission-spoiler boundaries."
  },
  {
    name: "Brian Heder",
    status: "Official",
    proof: "Rockstar profiles Brian as a Keys drug runner connected to Jason and local work.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    launchUse: "Safehouse access, boat yard checks, contact unlocks, and early mission ties."
  }
];

export const locationDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  launchUse: string;
}> = [
  {
    name: "Vice City",
    status: "Official",
    proof: "Rockstar presents Vice City as a major Leonida destination and the clearest urban anchor for the setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-vice-city-location-guide/",
    launchUse: "Neighborhood names, storefronts, safehouses, collectibles, routes, and activity density."
  },
  {
    name: "Leonida Keys",
    status: "Official",
    proof: "Rockstar lists the Keys as an official Leonida destination with island and water-route relevance.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-leonida-keys-location-guide/",
    launchUse: "Boat access, bridge routes, water missions, wildlife checks, and side activity markers."
  },
  {
    name: "Grassrivers",
    status: "Official",
    proof: "Rockstar lists Grassrivers as an official destination, supporting wetland and wildlife tracking after launch.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-grassrivers-location-guide/",
    launchUse: "Wildlife, swamp paths, vehicle access, event triggers, and map-marker verification."
  },
  {
    name: "Port Gellhorn",
    status: "Official",
    proof: "Rockstar lists Port Gellhorn as an official Leonida destination with coastal-town tracking potential.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-port-gellhorn-location-guide/",
    launchUse: "Road access, shops, docks, mission starts, and regional collectible checks."
  },
  {
    name: "Ambrosia",
    status: "Official",
    proof: "Rockstar lists Ambrosia as an official Leonida destination; this site does not add leaked boundaries or activity claims.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
    launchUse: "Region boundary, access route, services, mission hooks, and repeatable map evidence."
  },
  {
    name: "Mount Kalaga",
    status: "Official",
    proof: "Rockstar lists Mount Kalaga as an official Leonida destination; terrain and activity details wait for testing.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
    launchUse: "Terrain routes, viewpoints, off-road paths, wildlife, and activity marker checks."
  }
];

export const editionDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  launchUse: string;
}> = [
  {
    name: "Standard Edition",
    status: "Official",
    proof: "Take-Two's preorder announcement lists Standard Edition at $79.99.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    launchUse: "Base-game buyer comparison, platform store terms, refund checks, and regional price updates."
  },
  {
    name: "Ultimate Edition",
    status: "Official",
    proof: "Take-Two's preorder announcement lists Ultimate Edition at $99.99.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-price-standard-ultimate-explained/",
    launchUse: "Benefit comparison, upsell value checks, storefront inclusions, and final item-list updates."
  },
  {
    name: "Vintage Vice City Pack",
    status: "Official",
    proof: "Publisher copy ties the Vintage Vice City Pack to preorders and purchases before November 20, 2026.",
    sourceId: "rockstar-preorders",
    page: "/guides/gta-6-vintage-vice-city-pack/",
    launchUse: "Bonus eligibility, cutoff date checks, item contents, and platform-specific redemption notes."
  },
  {
    name: "Digital preorder GTA+ month",
    status: "Official",
    proof: "The publisher announcement describes one free month of GTA+ for digital preorders.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-gta-plus-preorder-benefit/",
    launchUse: "Subscription eligibility, account requirements, cancellation timing, and redemption checks."
  },
  {
    name: "Digital preload",
    status: "Official",
    proof: "Rockstar's preorder announcement says digital preloading is scheduled to begin November 12, 2026.",
    sourceId: "rockstar-preorders",
    page: "/guides/gta-6-preload-download-size-prep/",
    launchUse: "Console storage, version number, regional timing, download size, and account access checks."
  },
  {
    name: "Physical download-code preload",
    status: "Official",
    proof: "Publisher copy describes the physical version as a box with a download code available for preload.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-physical-vs-digital-preorder/",
    launchUse: "Retailer timing, code redemption, gift-buying friction, preload eligibility, and refund caveats."
  }
];
