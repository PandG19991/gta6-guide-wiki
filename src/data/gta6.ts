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
  { label: "Updates", href: "/updates/" }
];

export const gta6HubStats = [
  { label: "Release", value: "Nov 19", detail: "2026" },
  { label: "Platforms", value: "PS5 / Xbox", detail: "Series X|S" },
  { label: "Setting", value: "Leonida", detail: "including Vice City" },
  { label: "Preload", value: "Nov 12", detail: "digital editions" }
];

export const gta6DatabaseCards: Array<{
  title: string;
  href: string;
  confidence: ConfidenceKey;
  deck: string;
}> = [
  {
    title: "Vehicles",
    href: "/gta-6/database/vehicles/",
    confidence: "observed",
    deck: "Browse vehicle classes shown in official GTA 6 material."
  },
  {
    title: "Characters",
    href: "/gta-6/database/characters/",
    confidence: "official",
    deck: "Browse Jason, Lucia, and other characters profiled by Rockstar."
  },
  {
    title: "Locations",
    href: "/gta-6/database/locations/",
    confidence: "official",
    deck: "Browse Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga."
  },
  {
    title: "Editions",
    href: "/gta-6/database/editions/",
    confidence: "official",
    deck: "Compare Standard and Ultimate Editions, preorder bonuses, GTA+ benefits, and preload details."
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
      "Leaked map claims are not part of the confirmed location list."
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
      "Official media shows cars, motorcycles, boats, aircraft, and police or emergency vehicles.",
      "Rockstar has not published a complete named vehicle list.",
      "Use the vehicle database for the currently confirmed categories and official media links."
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
      "Regional taxes, refund terms, and final item lists can vary, so check the PlayStation or Xbox store before buying."
    ],
    sourceId: "take-two-preorders",
    href: "/guides/gta-6-pre-order-standard-vs-ultimate/"
  },
  {
    title: "Cheats and Missions",
    confidence: "analysis" as const,
    points: [
      "No cheat codes, mission order, or early-money methods are treated as confirmed before release.",
      "Avoid fake generators, invented code lists, and claims that cannot be checked against the game or an official announcement.",
      "Use the missions category for current spoiler-safe preparation guides."
    ],
    sourceId: "rockstar-vi",
    href: "/guides/category/missions/"
  }
];

export const vehicleDatabaseRows: Array<{
  category: string;
  status: "Observed" | "Official" | "Analysis";
  proof: string;
  sourceId: string;
  page: string;
}> = [
  {
    category: "Street cars and traffic",
    status: "Observed",
    proof: "Official media shows regular road traffic and player-facing vehicle use, but this site does not treat specific model names as confirmed without stronger proof.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
  },
  {
    category: "Motorcycles and bikes",
    status: "Observed",
    proof: "Official media shows two-wheel vehicles, but Rockstar has not published a complete named motorcycle or bicycle list.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
  },
  {
    category: "Boats and watercraft",
    status: "Observed",
    proof: "Leonida's coastal setting and official media support watercraft tracking, but the final list remains unconfirmed.",
    sourceId: "rockstar-vi",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
  },
  {
    category: "Aircraft",
    status: "Observed",
    proof: "Official media shows aircraft, but Rockstar has not confirmed which aircraft are player-controlled or how they are acquired.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-trailer-2-breakdown-evidence/",
  },
  {
    category: "Police and emergency vehicles",
    status: "Observed",
    proof: "Official media shows police and emergency vehicles, but it does not confirm pursuit rules, roadblocks, or escape mechanics.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
  },
  {
    category: "Edition or bonus vehicles",
    status: "Analysis",
    proof: "Publisher preorder copy confirms edition and bonus framing, but no specific bonus vehicle is confirmed in the current item details.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-vintage-vice-city-pack/",
  }
];

export const characterDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
}> = [
  {
    name: "Jason Duval",
    status: "Official",
    proof: "Rockstar profiles Jason as one of the central characters and links him to the Keys, local runners, and Lucia.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-jason-duval-character-guide/",
  },
  {
    name: "Lucia Caminos",
    status: "Official",
    proof: "Rockstar profiles Lucia as a central character with prison, family, and Jason story framing.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-lucia-caminos-character-guide/",
  },
  {
    name: "Cal Hampton",
    status: "Official",
    proof: "Rockstar identifies Cal as Jason's friend and a fellow associate of Brian.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
  },
  {
    name: "Boobie Ike",
    status: "Official",
    proof: "Rockstar describes Boobie as a Vice City figure tied to real estate, a club, a studio, and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
  },
  {
    name: "Dre'Quan Priest",
    status: "Official",
    proof: "Rockstar profiles Dre'Quan around Only Raw Records, Boobie's club, and the Vice City music scene.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
  },
  {
    name: "Real Dimez",
    status: "Official",
    proof: "Rockstar profiles Bae-Luxe and Roxy as Real Dimez and links them to DWNPLY and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-real-dimez-character-guide/",
  },
  {
    name: "Raul Bautista",
    status: "Official",
    proof: "Rockstar profiles Raul as a seasoned bank robber looking for talent and bigger scores.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
  },
  {
    name: "Brian Heder",
    status: "Official",
    proof: "Rockstar profiles Brian as a Keys drug runner connected to Jason and local work.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
  }
];

export const locationDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
}> = [
  {
    name: "Vice City",
    status: "Official",
    proof: "Rockstar presents Vice City as a major Leonida destination and the clearest urban anchor for the setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-vice-city-location-guide/",
  },
  {
    name: "Leonida Keys",
    status: "Official",
    proof: "Rockstar lists the Keys as an official Leonida destination with island and water-route relevance.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-leonida-keys-location-guide/",
  },
  {
    name: "Grassrivers",
    status: "Official",
    proof: "Rockstar lists Grassrivers as an official destination and describes its wetland setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-grassrivers-location-guide/",
  },
  {
    name: "Port Gellhorn",
    status: "Official",
    proof: "Rockstar lists Port Gellhorn as an official Leonida destination and describes its coastal setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-port-gellhorn-location-guide/",
  },
  {
    name: "Ambrosia",
    status: "Official",
    proof: "Rockstar lists Ambrosia as an official Leonida destination; exact boundaries and activities are not confirmed.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
  },
  {
    name: "Mount Kalaga",
    status: "Official",
    proof: "Rockstar lists Mount Kalaga as an official Leonida destination; exact terrain routes and activities are not confirmed.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-evidence-tracker/",
  }
];

export const editionDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
}> = [
  {
    name: "Standard Edition",
    status: "Official",
    proof: "Take-Two's preorder announcement lists Standard Edition at $79.99.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
  },
  {
    name: "Ultimate Edition",
    status: "Official",
    proof: "Take-Two's preorder announcement lists Ultimate Edition at $99.99.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-price-standard-ultimate-explained/",
  },
  {
    name: "Vintage Vice City Pack",
    status: "Official",
    proof: "Publisher copy ties the Vintage Vice City Pack to preorders and purchases before November 20, 2026.",
    sourceId: "rockstar-preorders",
    page: "/guides/gta-6-vintage-vice-city-pack/",
  },
  {
    name: "Digital preorder GTA+ month",
    status: "Official",
    proof: "The publisher announcement describes one free month of GTA+ for digital preorders.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-gta-plus-preorder-benefit/",
  },
  {
    name: "Digital preload",
    status: "Official",
    proof: "Rockstar's preorder announcement says digital preloading is scheduled to begin November 12, 2026.",
    sourceId: "rockstar-preorders",
    page: "/guides/gta-6-preload-download-size-prep/",
  },
  {
    name: "Physical download-code preload",
    status: "Official",
    proof: "Publisher copy describes the physical version as a box with a download code available for preload.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-physical-vs-digital-preorder/",
  }
];
