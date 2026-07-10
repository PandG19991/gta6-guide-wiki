import type { ImageMetadata } from "astro";
import coverArt from "../assets/media/official/cover-art.jpg";
import jasonLucia from "../assets/media/official/jason-lucia.jpg";
import jasonDuval from "../assets/media/official/jason-duval.jpg";
import luciaCaminos from "../assets/media/official/lucia-caminos.jpg";
import realDimez from "../assets/media/official/real-dimez.jpg";
import viceCity from "../assets/media/official/vice-city.jpg";
import leonidaKeys from "../assets/media/official/leonida-keys.jpg";
import grassrivers from "../assets/media/official/grassrivers.jpg";
import portGellhorn from "../assets/media/official/port-gellhorn.jpg";
import grottiCheetah from "../assets/media/official/grotti-cheetah.jpg";
import vintagePack from "../assets/media/official/vintage-pack.jpg";

export type MediaRecord = {
  id: string;
  local: ImageMetadata;
  kind: "official-artwork" | "official-screenshot";
  subject: string;
  owner: string;
  sourceUrl: string;
  sourceAssetUrl: string;
  usageBasis: string;
  rights: "approved" | "pending";
  permissionStatus: "not-formally-granted" | "requested" | "granted";
  attribution: string;
  alt: string;
  width: number;
  height: number;
  placements: Array<"homepage-primary" | "release-guides" | "platform-guides" | "preload-guides" | "spoiler-guides" | "character-guides" | "character-database" | "jason-guide" | "lucia-guide" | "real-dimez-guide" | "map-guides" | "location-database" | "keys-guide" | "grassrivers-guide" | "port-gellhorn-guide" | "vehicle-guides" | "vehicle-database" | "buying-guides" | "edition-database">;
};

export const mediaRegistry = [
  {
    id: "cover-art",
    local: coverArt,
    kind: "official-artwork",
    subject: "Grand Theft Auto VI official cover art",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/artwork-wallpapers",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_landscape.12.uu2irr.2_a.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games artwork",
    alt: "Grand Theft Auto VI official cover art",
    width: 1280,
    height: 720,
    placements: ["homepage-primary", "release-guides", "platform-guides", "preload-guides", "spoiler-guides"]
  },
  {
    id: "jason-lucia",
    local: jasonLucia,
    kind: "official-artwork",
    subject: "Jason and Lucia",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_03_landscape.0419q._86ukpt.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Jason and Lucia in Grand Theft Auto VI promotional artwork",
    width: 1280,
    height: 720,
    placements: ["character-guides", "character-database"]
  },
  {
    id: "jason-duval",
    local: jasonDuval,
    kind: "official-screenshot",
    subject: "Jason Duval",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_01.07m377xeb6jhq.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Jason Duval in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["jason-guide", "character-database"]
  },
  {
    id: "lucia-caminos",
    local: luciaCaminos,
    kind: "official-screenshot",
    subject: "Lucia Caminos",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_01.0a7yqvewctkfp.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Lucia Caminos in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["lucia-guide", "character-database"]
  },
  {
    id: "real-dimez",
    local: realDimez,
    kind: "official-screenshot",
    subject: "Real Dimez",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_01.0djwwboo8-glx.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games screenshot",
    alt: "Real Dimez in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["real-dimez-guide", "character-database"]
  },
  {
    id: "vice-city",
    local: viceCity,
    kind: "official-screenshot",
    subject: "Vice City",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Vice_City_01.135x56yoeu.6t.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Vice City in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["map-guides", "location-database"]
  },
  {
    id: "leonida-keys",
    local: leonidaKeys,
    kind: "official-screenshot",
    subject: "Leonida Keys",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_01.0zgz7tveur6y8.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Leonida Keys in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["keys-guide", "location-database"]
  },
  {
    id: "grassrivers",
    local: grassrivers,
    kind: "official-screenshot",
    subject: "Grassrivers",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Grassrivers_01.1096rw4lbjur_.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games screenshot",
    alt: "Grassrivers in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["grassrivers-guide", "location-database"]
  },
  {
    id: "port-gellhorn",
    local: portGellhorn,
    kind: "official-screenshot",
    subject: "Port Gellhorn",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_01.0fmisvza-5-cq.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games screenshot",
    alt: "Port Gellhorn in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["port-gellhorn-guide", "location-database"]
  },
  {
    id: "grotti-cheetah",
    local: grottiCheetah,
    kind: "official-screenshot",
    subject: "Grotti Cheetah",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_GROTTI_CHEETAH_01.0a.wy3s_ogjey.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games media",
    alt: "Grotti Cheetah in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["vehicle-guides", "vehicle-database"]
  },
  {
    id: "vintage-pack",
    local: vintagePack,
    kind: "official-screenshot",
    subject: "Vintage Vice City Pack",
    owner: "Rockstar Games",
    sourceUrl: "https://www.rockstargames.com/VI/media/screenshots",
    sourceAssetUrl: "https://www.rockstargames.com/VI/_next/static/media/VINTAGE_VICE_CITY_PACK_01.05zaof7o1uz.3.jpg?akim=1&imdensity=1&imwidth=1280",
    usageBasis: "Internal limited editorial use decision",
    rights: "approved",
    permissionStatus: "not-formally-granted",
    attribution: "Official Rockstar Games screenshot",
    alt: "Vintage Vice City Pack in an official Grand Theft Auto VI screenshot",
    width: 1280,
    height: 720,
    placements: ["buying-guides", "edition-database"]
  },
] as const satisfies readonly MediaRecord[];

export type MediaId = (typeof mediaRegistry)[number]["id"];
export const mediaById = Object.fromEntries(mediaRegistry.map((media) => [media.id, media])) as unknown as Record<MediaId, MediaRecord>;
