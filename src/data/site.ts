export const site = {
  name: "Leonida Ledger",
  shortName: "Leonida Ledger",
  description:
    "An unofficial GTA 6 guide hub for release details, Leonida locations, vehicles, characters, editions, and player guides.",
  url: "https://gta6gameguide.xyz",
  author: "Leonida Ledger editorial desk",
  locale: "en-US",
  currentDate: "2026-07-11"
};

export const navItems = [
  { label: "GTA 6", href: "/gta-6/" },
  { label: "Release", href: "/release/" },
  { label: "Map", href: "/map/" },
  { label: "Guides", href: "/guides/" },
  { label: "Database", href: "/gta-6/database/" },
  { label: "Updates", href: "/updates/" }
];

export const evidenceLevels = [
  {
    key: "official",
    label: "Official",
    description: "Published by Rockstar, Take-Two, PlayStation, Xbox, or a platform store.",
    tone: "green"
  },
  {
    key: "first-party-tested",
    label: "Tested",
    description: "Reproduced by Leonida Ledger with platform, version, date, and method recorded.",
    tone: "blue"
  },
  {
    key: "corroborated",
    label: "Corroborated",
    description: "Verified from reproducible or independent records by an editor.",
    tone: "amber"
  }
] as const;

export type EvidenceLevel = (typeof evidenceLevels)[number]["key"];

