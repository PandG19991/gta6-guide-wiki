import type { EvidenceLevel } from "./site";
import type { MediaId } from "./media";

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
  evidence: EvidenceLevel;
  deck: string;
  mediaId: MediaId;
}> = [
  {
    title: "Vehicles",
    href: "/gta-6/database/vehicles/",
    evidence: "official",
    deck: "Browse vehicle classes shown in official GTA 6 material.",
    mediaId: "grotti-cheetah"
  },
  {
    title: "Characters",
    href: "/gta-6/database/characters/",
    evidence: "official",
    deck: "Browse Jason, Lucia, and other characters profiled by Rockstar.",
    mediaId: "jason-lucia"
  },
  {
    title: "Locations",
    href: "/gta-6/database/locations/",
    evidence: "official",
    deck: "Browse Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
    mediaId: "vice-city"
  },
  {
    title: "Editions",
    href: "/gta-6/database/editions/",
    evidence: "official",
    deck: "Compare Standard and Ultimate Editions, preorder bonuses, GTA+ benefits, and preload details.",
    mediaId: "vintage-pack"
  }
];

export const gta6FeatureSections = [
  {
    title: "Release Information",
    evidence: "official" as const,
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
    evidence: "official" as const,
    points: [
      "Leonida is the official state setting.",
      "Official destination names include Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
      "Leaked map claims are not part of the confirmed location list."
    ],
    sourceId: "rockstar-leonida",
    href: "/guides/gta-6-map-leonida-regions-locations/"
  },
  {
    title: "Characters and Story Setup",
    evidence: "official" as const,
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
    evidence: "official" as const,
    points: [
      "Rockstar names multiple vehicles in the Ultimate Edition and Vintage Vice City Pack.",
      "Official media also shows cars, motorcycles, boats, aircraft, and police or emergency vehicles.",
      "Use the vehicle database for named bonuses, current categories, and official media links."
    ],
    sourceId: "rockstar-editions",
    href: "/gta-6/database/vehicles/"
  },
  {
    title: "Editions and Preorder",
    evidence: "official" as const,
    points: [
      "Standard Edition includes the game; Ultimate adds named story vehicles, weapons, businesses, and customization locations.",
      "Standard owners can buy the Ultimate Edition Upgrade later through the PlayStation or Xbox store.",
      "Digital and physical preorder benefits differ, and the physical box contains a code rather than a disc."
    ],
    sourceId: "rockstar-support-editions",
    href: "/guides/gta-6-pre-order-standard-vs-ultimate/"
  }
];

export const vehicleDatabaseRows: Array<{
  category: string;
  status: "Observed" | "Official" | "Analysis";
  proof: string;
  sourceId: string;
  page: string;
  mediaId: MediaId;
}> = [
  {
    category: "Street cars and traffic",
    status: "Observed",
    proof: "Official media shows regular road traffic and player-facing vehicle use, but this site does not treat specific model names as confirmed without stronger proof.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
    mediaId: "grotti-cheetah"
  },
  {
    category: "Motorcycles and bikes",
    status: "Observed",
    proof: "Official media shows two-wheel vehicles, but Rockstar has not published a complete named motorcycle or bicycle list.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
    mediaId: "grotti-cheetah"
  },
  {
    category: "Boats and watercraft",
    status: "Observed",
    proof: "Leonida's coastal setting and official media support watercraft tracking, but the final list remains unconfirmed.",
    sourceId: "rockstar-vi",
    page: "/guides/gta-6-map-leonida-regions-locations/",
    mediaId: "leonida-keys"
  },
  {
    category: "Aircraft",
    status: "Observed",
    proof: "Official media shows aircraft, but Rockstar has not confirmed which aircraft are player-controlled or how they are acquired.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-trailer-2-breakdown-evidence/",
    mediaId: "grotti-cheetah"
  },
  {
    category: "Police and emergency vehicles",
    status: "Observed",
    proof: "Official media shows police and emergency vehicles, but it does not confirm pursuit rules, roadblocks, or escape mechanics.",
    sourceId: "rockstar-media",
    page: "/guides/gta-6-vehicles-confirmed-so-far/",
    mediaId: "grotti-cheetah"
  },
  {
    category: "Named edition and preorder vehicles",
    status: "Official",
    proof: "Rockstar names the '55 Vapid Stanier, '95 Grotti Cheetah, Shitzu Squalo, '67 Vapid Dominator Buggy, and other vehicle rewards.",
    sourceId: "rockstar-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  }
];

export const characterDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  mediaId: MediaId;
}> = [
  {
    name: "Jason Duval",
    status: "Official",
    proof: "Rockstar profiles Jason as one of the central characters and links him to the Keys, local runners, and Lucia.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-jason-duval-character-guide/",
    mediaId: "jason-duval"
  },
  {
    name: "Lucia Caminos",
    status: "Official",
    proof: "Rockstar profiles Lucia as a central character with prison, family, and Jason story framing.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-lucia-caminos-character-guide/",
    mediaId: "lucia-caminos"
  },
  {
    name: "Cal Hampton",
    status: "Official",
    proof: "Rockstar identifies Cal as Jason's friend and a fellow associate of Brian.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    mediaId: "jason-lucia"
  },
  {
    name: "Boobie Ike",
    status: "Official",
    proof: "Rockstar describes Boobie as a Vice City figure tied to real estate, a club, a studio, and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    mediaId: "jason-lucia"
  },
  {
    name: "Dre'Quan Priest",
    status: "Official",
    proof: "Rockstar profiles Dre'Quan around Only Raw Records, Boobie's club, and the Vice City music scene.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    mediaId: "jason-lucia"
  },
  {
    name: "Real Dimez",
    status: "Official",
    proof: "Rockstar profiles Bae-Luxe and Roxy as Real Dimez and links them to DWNPLY and Only Raw Records.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-real-dimez-character-guide/",
    mediaId: "real-dimez"
  },
  {
    name: "Raul Bautista",
    status: "Official",
    proof: "Rockstar profiles Raul as a seasoned bank robber looking for talent and bigger scores.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    mediaId: "jason-lucia"
  },
  {
    name: "Brian Heder",
    status: "Official",
    proof: "Rockstar profiles Brian as a Keys drug runner connected to Jason and local work.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-characters-official-cast/",
    mediaId: "jason-lucia"
  }
];

export const locationDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  mediaId: MediaId;
}> = [
  {
    name: "Vice City",
    status: "Official",
    proof: "Rockstar presents Vice City as a major Leonida destination and the clearest urban anchor for the setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-vice-city-location-guide/",
    mediaId: "vice-city"
  },
  {
    name: "Leonida Keys",
    status: "Official",
    proof: "Rockstar lists the Keys as an official Leonida destination with island and water-route relevance.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-leonida-keys-location-guide/",
    mediaId: "leonida-keys"
  },
  {
    name: "Grassrivers",
    status: "Official",
    proof: "Rockstar lists Grassrivers as an official destination and describes its wetland setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-locations/",
    mediaId: "grassrivers"
  },
  {
    name: "Port Gellhorn",
    status: "Official",
    proof: "Rockstar lists Port Gellhorn as an official Leonida destination and describes its coastal setting.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-locations/",
    mediaId: "port-gellhorn"
  },
  {
    name: "Ambrosia",
    status: "Official",
    proof: "Rockstar lists Ambrosia as an official Leonida destination; exact boundaries and activities are not confirmed.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-locations/",
    mediaId: "vice-city"
  },
  {
    name: "Mount Kalaga",
    status: "Official",
    proof: "Rockstar lists Mount Kalaga as an official Leonida destination; exact terrain routes and activities are not confirmed.",
    sourceId: "rockstar-leonida",
    page: "/guides/gta-6-map-leonida-regions-locations/",
    mediaId: "vice-city"
  }
];

export const editionDatabaseRows: Array<{
  name: string;
  status: "Official";
  proof: string;
  sourceId: string;
  page: string;
  mediaId: MediaId;
}> = [
  {
    name: "Standard Edition",
    status: "Official",
    proof: "Take-Two's preorder announcement lists Standard Edition at $79.99.",
    sourceId: "take-two-preorders",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  },
  {
    name: "Ultimate Edition",
    status: "Official",
    proof: "The $99.99 edition includes the game plus named vehicles, weapons, businesses, clothing, and customization locations.",
    sourceId: "rockstar-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  },
  {
    name: "Ultimate Edition Upgrade",
    status: "Official",
    proof: "Standard owners can purchase the Ultimate Edition Upgrade later through the PlayStation or Xbox store.",
    sourceId: "rockstar-support-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "grotti-cheetah"
  },
  {
    name: "Vintage Vice City Pack",
    status: "Official",
    proof: "The pack includes a '55 Vapid Stanier Sedan and Garage, outfits and hairstyles, and an exclusive weapon pattern.",
    sourceId: "rockstar-support-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  },
  {
    name: "Digital preorder GTA+ month",
    status: "Official",
    proof: "Digital preorders and purchases before November 20 include one month of GTA+; physical preorders do not list this benefit.",
    sourceId: "rockstar-support-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  },
  {
    name: "Digital preload",
    status: "Official",
    proof: "Rockstar's preorder announcement says digital preloading is scheduled to begin November 12, 2026.",
    sourceId: "rockstar-preorders",
    page: "/guides/gta-6-preload-download-size-prep/",
    mediaId: "cover-art"
  },
  {
    name: "Physical download-code preload",
    status: "Official",
    proof: "The physical Standard Edition contains a download code, no disc, and can support preload once the code is received.",
    sourceId: "rockstar-support-editions",
    page: "/guides/gta-6-pre-order-standard-vs-ultimate/",
    mediaId: "vintage-pack"
  }
];
