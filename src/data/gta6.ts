import type { ConfidenceKey } from "./site";

export const gta6RailItems = [
  { label: "Overview", href: "/gta-6/" },
  { label: "Features", href: "/gta-6/features/" },
  { label: "Database", href: "/gta-6/database/" },
  { label: "Vehicles", href: "/gta-6/database/vehicles/" },
  { label: "Release", href: "/release/" },
  { label: "Map", href: "/map/" },
  { label: "Guides", href: "/guides/" },
  { label: "Sources", href: "/sources/" }
];

export const gta6HubStats = [
  { label: "Guide pages", value: "27", detail: "FAQ and schema enhanced" },
  { label: "Sitemap URLs", value: "50", detail: "clean canonical set" },
  { label: "Evidence tables", value: "23", detail: "high-intent pages" },
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
    href: "/guides/gta-6-characters-official-cast/",
    count: 8,
    confidence: "official",
    deck: "Jason, Lucia, and supporting official character profiles with source boundaries.",
    nextUpdate: "Split official character pages when more verified story or mission data exists."
  },
  {
    title: "Locations",
    href: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
    count: 6,
    confidence: "official",
    deck: "Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
    nextUpdate: "Add tested markers after release; no leaked map coordinates."
  },
  {
    title: "Editions",
    href: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    count: 2,
    confidence: "official",
    deck: "Standard and Ultimate Edition buyer guidance with price and preorder-bonus evidence.",
    nextUpdate: "Refresh when storefront pages expose stable edition details."
  },
  {
    title: "Cheats",
    href: "/guides/gta-6-cheats-codes-testing-tracker/",
    count: 0,
    confidence: "analysis",
    deck: "A no-fake-code launch tracker for platform-specific cheat testing.",
    nextUpdate: "Publish only official or repeatably tested codes after release."
  },
  {
    title: "Missions",
    href: "/guides/gta-6-mission-list-walkthrough-hub/",
    count: 0,
    confidence: "analysis",
    deck: "A spoiler-safe mission hub waiting for hands-on walkthrough verification.",
    nextUpdate: "Open mission rows after launch testing, not rumor threads."
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
