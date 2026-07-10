export const site = {
  name: "Leonida Ledger",
  shortName: "Leonida Ledger",
  description:
    "An unofficial GTA 6 guide hub for release details, Leonida locations, vehicles, characters, editions, and player guides.",
  url: "https://leonida-ledger.pandg1991.workers.dev",
  author: "Leonida Ledger editorial desk",
  locale: "en_US",
  currentDate: "2026-07-09"
};

export const navItems = [
  { label: "GTA 6", href: "/gta-6/" },
  { label: "Release", href: "/release/" },
  { label: "Map", href: "/map/" },
  { label: "Guides", href: "/guides/" },
  { label: "Database", href: "/gta-6/database/" },
  { label: "Updates", href: "/updates/" }
];

export const confidenceLevels = [
  {
    key: "official",
    label: "Official",
    description: "Published by Rockstar, Take-Two, PlayStation, Xbox, or a platform store.",
    tone: "green"
  },
  {
    key: "observed",
    label: "Observed",
    description: "Visible in official trailers, media, or store material without extra claims.",
    tone: "blue"
  },
  {
    key: "analysis",
    label: "Analysis",
    description: "Reasoned guidance or comparison based on available evidence.",
    tone: "amber"
  },
  {
    key: "unconfirmed",
    label: "Unconfirmed",
    description: "Rumor, leak, or community theory. Not treated as fact.",
    tone: "gray"
  }
] as const;

export type ConfidenceKey = (typeof confidenceLevels)[number]["key"];

