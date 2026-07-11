export type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessed: string;
  priority: 1 | 2 | 3 | 4 | 5;
  notes: string;
};

export const sources: Source[] = [
  {
    id: "rockstar-vi",
    title: "Grand Theft Auto VI official page",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Release date, platforms, official media links, editions, and current public positioning."
  },
  {
    id: "rockstar-preorders",
    title: "Grand Theft Auto VI Pre-Orders Begin on June 25",
    publisher: "Rockstar Newswire",
    url: "https://www.rockstargames.com/newswire/article/517oa135328155/grand-theft-auto-vi-pre-orders-begin-on-june-25",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Preorder timing, edition details, preload timing, and storefront availability."
  },
  {
    id: "take-two-preorders",
    title: "Rockstar Games Announces Pre-Orders for Grand Theft Auto VI",
    publisher: "Take-Two Interactive",
    url: "https://www.take2games.com/ir/news/rockstar-games-announces-pre-orders-grand-theft-auto-vi",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Official confirmation of the release date, platforms, prices, preorder benefits, and preload."
  },
  {
    id: "rockstar-leonida",
    title: "Grand Theft Auto VI: Only in Leonida",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/only-in-leonida",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Official character and location descriptions."
  },
  {
    id: "rockstar-media",
    title: "Grand Theft Auto VI Media",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/media",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Official trailers, screenshots, edition imagery, artwork, and downloadable media."
  },
  {
    id: "rockstar-editions",
    title: "Grand Theft Auto VI editions",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI/editions",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Standard and Ultimate Edition contents, upgrade items, and preorder bonuses."
  },
  {
    id: "rockstar-support-editions",
    title: "Grand Theft Auto VI platforms, editions, and versions",
    publisher: "Rockstar Games Support",
    url: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Edition upgrade rules, code-in-box format, preload timing, bonuses, and regional code guidance."
  },
  {
    id: "rockstar-support-preorders",
    title: "Grand Theft Auto VI preorder details",
    publisher: "Rockstar Games Support",
    url: "https://support.rockstargames.com/articles/46YkMi4rHxYXMeIHtZiKaE/grand-theft-auto-vi-pre-order-details",
    accessed: "2026-07-11",
    priority: 1,
    notes: "Official PlayStation, Xbox, and Rockstar Store preorder links and country availability."
  },
  {
    id: "google-seo-starter",
    title: "SEO Starter Guide",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    accessed: "2026-07-08",
    priority: 1,
    notes: "Technical SEO and people-first site quality baseline."
  },
  {
    id: "google-spam",
    title: "Spam policies for Google web search",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/essentials/spam-policies",
    accessed: "2026-07-08",
    priority: 1,
    notes: "Scaled-content, scraping, and manipulative search policy guardrails."
  },
  {
    id: "adsense-publisher",
    title: "Google Publisher Policies",
    publisher: "Google AdSense Help",
    url: "https://support.google.com/adsense/answer/10502938?hl=en",
    accessed: "2026-07-08",
    priority: 1,
    notes: "Copyright, low-value inventory, and monetization policy guardrails."
  },
  {
    id: "rockstar-copyright",
    title: "Policy on posting copyrighted Rockstar Games material",
    publisher: "Rockstar Support",
    url: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material",
    accessed: "2026-07-08",
    priority: 1,
    notes: "Fan material, commercial-use caution, and pre-release leaked footage boundaries."
  }
];

export const sourceById = Object.fromEntries(sources.map((source) => [source.id, source]));

