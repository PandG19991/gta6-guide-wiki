export type PublicUpdate = {
  date: string;
  title: string;
  source: string;
  url: string;
  affectedRoutes: string[];
};

export const publicUpdates: PublicUpdate[] = [
  {
    date: "2026-06-26",
    title: "Rockstar clarified that physical boxes contain download codes, not discs, and documented preload and code-region rules.",
    source: "Rockstar Support",
    url: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    affectedRoutes: [
      "/guides/gta-6-pre-order-standard-vs-ultimate/",
      "/guides/gta-6-preload-download-size-prep/"
    ]
  },
  {
    date: "2026-06-25",
    title: "GTA 6 preorders began across digital storefronts and select retailers.",
    source: "Rockstar Games",
    url: "https://support.rockstargames.com/articles/46YkMi4rHxYXMeIHtZiKaE/grand-theft-auto-vi-pre-order-details",
    affectedRoutes: [
      "/guides/gta-6-pre-order-standard-vs-ultimate/",
      "/guides/gta-6-release-date-countdown-preload/"
    ]
  },
  {
    date: "2026-06-24",
    title: "Rockstar detailed Standard and Ultimate Edition contents, prices, preorder bonuses, and November 12 preload.",
    source: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/editions",
    affectedRoutes: [
      "/guides/gta-6-pre-order-standard-vs-ultimate/",
      "/gta-6/database/editions/"
    ]
  }
];

