export type UpdatePublication = "public" | "internal";

export type LedgerUpdate = {
  publication: UpdatePublication;
  date: string;
  time: string;
  confidence: "official" | "observed" | "analysis" | "unconfirmed";
  title: string;
  source: string;
  url: string;
};

export const ledgerUpdates: LedgerUpdate[] = [
  {
    publication: "internal",
    date: "2026-07-08",
    time: "04:58 ET",
    confidence: "official",
    title: "Site source ledger refreshed against Rockstar and Take-Two launch/preorder pages.",
    source: "Editorial desk",
    url: "/sources/"
  },
  {
    publication: "public",
    date: "2026-06-26",
    time: "00:00 local",
    confidence: "official",
    title: "Rockstar clarified that physical boxes contain download codes, not discs, and documented preload and code-region rules.",
    source: "Rockstar Support",
    url: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
  },
  {
    publication: "public",
    date: "2026-06-25",
    time: "00:00 local",
    confidence: "official",
    title: "GTA 6 preorders began across digital storefronts and select retailers.",
    source: "Rockstar Games",
    url: "https://support.rockstargames.com/articles/46YkMi4rHxYXMeIHtZiKaE/grand-theft-auto-vi-pre-order-details"
  },
  {
    publication: "public",
    date: "2026-06-24",
    time: "06:15 ET",
    confidence: "official",
    title: "Rockstar detailed Standard and Ultimate Edition contents, prices, preorder bonuses, and November 12 preload.",
    source: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/editions"
  }
];

export const publicLedgerUpdates = ledgerUpdates.filter((update) => update.publication === "public");

