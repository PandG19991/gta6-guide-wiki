import type { ConfidenceKey } from "./site";

export type GuideStatus = "live" | "tracker" | "launch-week" | "planned";

export type Guide = {
  slug: string;
  title: string;
  deck: string;
  category: "Release" | "Map" | "Characters" | "Vehicles" | "Missions" | "Cheats" | "Buying" | "SEO";
  intent: "pre-launch" | "launch-week" | "evergreen";
  status: GuideStatus;
  confidence: ConfidenceKey;
  updated: string;
  sourceIds: string[];
  bullets: string[];
  nextUpdate: string;
  searchTerms: string[];
};

export const guides: Guide[] = [
  {
    slug: "gta-6-release-date-countdown-preload",
    title: "GTA 6 Release Date, Countdown, and Preload Times",
    deck: "The source-tracked launch timing page: release date, supported console platforms, digital preload, and what is still unconfirmed.",
    category: "Release",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "take-two-preorders", "rockstar-preorders"],
    bullets: [
      "Grand Theft Auto VI is officially scheduled for November 19, 2026.",
      "Confirmed platforms are PlayStation 5 and Xbox Series X|S.",
      "Digital preloading is scheduled to begin November 12, 2026.",
      "No official PC release date has been announced yet."
    ],
    nextUpdate: "Track store-page changes and any platform-specific preload window updates.",
    searchTerms: ["gta 6 release date", "gta 6 preload", "gta 6 platforms"]
  },
  {
    slug: "gta-6-pre-order-standard-vs-ultimate",
    title: "GTA 6 Pre-Order Guide: Standard vs Ultimate Edition",
    deck: "A plain-English comparison of prices, preorder bonuses, digital preload, and what each edition currently includes.",
    category: "Buying",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["take-two-preorders", "rockstar-preorders", "rockstar-vi"],
    bullets: [
      "Standard Edition is listed at $79.99.",
      "Ultimate Edition is listed at $99.99.",
      "Preorders and purchases before November 20, 2026 include the Vintage Vice City Pack.",
      "Digital preorders include one free month of GTA+ according to the current publisher announcement."
    ],
    nextUpdate: "Add retailer availability and region-specific store links only from official or storefront sources.",
    searchTerms: ["gta 6 pre order", "gta 6 price", "gta 6 ultimate edition"]
  },
  {
    slug: "gta-6-map-leonida-regions-evidence-tracker",
    title: "GTA 6 Map: Leonida Regions and Evidence Tracker",
    deck: "A pre-launch map hub that separates official location names from trailer-observed details and community theories.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "observed",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "rockstar-leonida", "rockstar-media"],
    bullets: [
      "Rockstar describes Leonida as the state that includes Vice City and surrounding regions.",
      "Official destination names currently include Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
      "This page does not publish leaked map claims as fact.",
      "The interactive map layer is planned for launch week and will start with official or self-verified markers only."
    ],
    nextUpdate: "Convert official destinations into a filterable map shell and add evidence cards per region.",
    searchTerms: ["gta 6 map", "gta 6 leonida", "gta 6 vice city map"]
  },
  {
    slug: "gta-6-characters-official-cast",
    title: "GTA 6 Characters: Jason, Lucia, and Official Cast Tracker",
    deck: "Confirmed character pages with short bios, relationship notes, and source confidence labels.",
    category: "Characters",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Jason Duval and Lucia Caminos are the central pair in the current official story setup.",
      "Other officially profiled people include Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista, and Brian Heder.",
      "Character relationship notes are paraphrased from official pages, not copied wholesale.",
      "Voice actor, mission, and faction details remain unknown unless explicitly sourced."
    ],
    nextUpdate: "Split each confirmed person into database pages when more official or self-tested details exist.",
    searchTerms: ["gta 6 characters", "gta 6 lucia", "gta 6 jason"]
  },
  {
    slug: "gta-6-vehicles-confirmed-so-far",
    title: "GTA 6 Vehicles Confirmed So Far",
    deck: "A conservative vehicle tracker that starts with officially shown or named vehicles and avoids leak-driven list spam.",
    category: "Vehicles",
    intent: "pre-launch",
    status: "tracker",
    confidence: "observed",
    updated: "2026-07-08",
    sourceIds: ["rockstar-media", "rockstar-vi"],
    bullets: [
      "Vehicle pages will separate officially named vehicles from trailer-observed vehicle classes.",
      "Launch-week updates will add handling notes, prices, spawn locations, storage, and upgrade paths after hands-on verification.",
      "Image-heavy vehicle pages will use original thumbnails or licensed screenshots only.",
      "Unverified leak lists stay out of the main database."
    ],
    nextUpdate: "Create schema for vehicle class, acquisition, price, storage, and proof source.",
    searchTerms: ["gta 6 cars", "gta 6 vehicles", "gta 6 cars list"]
  },
  {
    slug: "gta-6-mission-list-walkthrough-hub",
    title: "GTA 6 Mission List and Walkthrough Hub",
    deck: "A launch-week mission index designed for walkthroughs, rewards, replay notes, and spoiler-safe navigation.",
    category: "Missions",
    intent: "launch-week",
    status: "launch-week",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi"],
    bullets: [
      "The mission list is not published before release because no complete official mission order exists.",
      "The launch-week format will support spoiler-safe summaries, objectives, fail states, rewards, and replay tips.",
      "Mission pages will be tested from gameplay, not generated from rumor threads.",
      "A single hub prevents thin one-mission pages until each guide has real value."
    ],
    nextUpdate: "Open after launch with spoiler-safe index and first verified story walkthroughs.",
    searchTerms: ["gta 6 missions", "gta 6 walkthrough", "gta 6 mission list"]
  },
  {
    slug: "gta-6-cheats-codes-testing-tracker",
    title: "GTA 6 Cheats: Codes and Testing Tracker",
    deck: "A no-fake-codes page that will only publish cheat codes after official confirmation or repeatable in-game testing.",
    category: "Cheats",
    intent: "launch-week",
    status: "launch-week",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["google-spam", "adsense-publisher"],
    bullets: [
      "No GTA 6 cheat codes are treated as confirmed on this site before release.",
      "Launch testing will record platform, input method, effect, limitations, and side effects.",
      "Fake unlimited-money or exploit claims are excluded.",
      "Cheat pages will distinguish fun codes from online cheating or exploit content."
    ],
    nextUpdate: "Add a test matrix on launch day and publish only repeatable results.",
    searchTerms: ["gta 6 cheats", "gta 6 cheats ps5", "gta 6 cheats xbox"]
  },
  {
    slug: "gta-6-domain-strategy-fan-site-seo",
    title: "Domain Strategy for a GTA 6 Fan Guide",
    deck: "Domain ideas that capture search intent without implying official Rockstar or Take-Two affiliation.",
    category: "SEO",
    intent: "pre-launch",
    status: "live",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["google-seo-starter", "google-spam", "adsense-publisher", "rockstar-copyright"],
    bullets: [
      "Use a brand-first domain rather than an exact trademark-heavy domain.",
      "Keep GTA 6 in page titles and body copy where it is descriptive and useful.",
      "Avoid official-looking language, logos, store/preorder wording, and confusing visual identity.",
      "Recommended short list: leonidaledger.com, openworldfieldguide.com, launchgameguide.com, vicecityfieldguide.com."
    ],
    nextUpdate: "Check availability and choose a brandable domain before connecting a custom Cloudflare domain.",
    searchTerms: ["gta 6 guide domain", "gta 6 wiki seo", "gta 6 fan site"]
  }
];

export const liveGuides = guides.filter((guide) => guide.status === "live" || guide.status === "tracker");
export const plannedGuides = guides.filter((guide) => guide.status === "launch-week" || guide.status === "planned");

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

