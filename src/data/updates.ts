export type LedgerUpdate = {
  date: string;
  time: string;
  confidence: "official" | "observed" | "analysis" | "unconfirmed";
  title: string;
  source: string;
};

export const ledgerUpdates: LedgerUpdate[] = [
  {
    date: "2026-07-08",
    time: "04:58 ET",
    confidence: "official",
    title: "Site source ledger refreshed against Rockstar and Take-Two launch/preorder pages.",
    source: "Editorial desk"
  },
  {
    date: "2026-06-25",
    time: "00:00 local",
    confidence: "official",
    title: "GTA 6 preorders began across digital storefronts and select retailers.",
    source: "Rockstar Newswire"
  },
  {
    date: "2026-06-24",
    time: "06:15 ET",
    confidence: "official",
    title: "Take-Two confirmed $79.99 Standard Edition, $99.99 Ultimate Edition, and November 12 preload.",
    source: "Take-Two"
  }
];

