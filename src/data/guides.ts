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
    slug: "gta-6-price-standard-ultimate-explained",
    title: "GTA 6 Price Explained: Standard, Ultimate, and Value Check",
    deck: "A buyer-focused breakdown of the confirmed US prices, preorder bonus timing, and who should wait before spending more.",
    category: "Buying",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["take-two-preorders", "rockstar-preorders"],
    bullets: [
      "Standard Edition is currently listed at $79.99 in the publisher announcement.",
      "Ultimate Edition is currently listed at $99.99.",
      "The Vintage Vice City Pack applies to preorders and purchases before November 20, 2026.",
      "Players who only want the single-player launch can wait for final storefront details before choosing an edition."
    ],
    nextUpdate: "Add platform store links and regional price checks when the storefront pages expose stable public data.",
    searchTerms: ["gta 6 price", "gta 6 standard edition", "gta 6 ultimate edition price"]
  },
  {
    slug: "is-gta-6-coming-to-pc",
    title: "Is GTA 6 Coming to PC?",
    deck: "The current PC status page: what has been announced, what has not, and how to avoid fake PC preorder claims.",
    category: "Release",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "take-two-preorders", "google-spam"],
    bullets: [
      "Rockstar and Take-Two currently list PlayStation 5 and Xbox Series X|S for launch.",
      "No official PC release date is listed on the current official GTA 6 page.",
      "A page claiming a confirmed PC date should cite Rockstar, Take-Two, or a platform store.",
      "This page will update only when an official PC announcement exists."
    ],
    nextUpdate: "Watch official Rockstar, Take-Two, and storefront pages for a PC platform announcement.",
    searchTerms: ["is gta 6 coming to pc", "gta 6 pc release date", "gta 6 pc confirmed"]
  },
  {
    slug: "gta-6-platforms-ps5-xbox-series-x-s",
    title: "GTA 6 Platforms: PS5 and Xbox Series X|S",
    deck: "A simple platform guide for launch support, what is confirmed, and what remains unannounced.",
    category: "Release",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "take-two-preorders"],
    bullets: [
      "The current official platform list is PlayStation 5 and Xbox Series X|S.",
      "The official page says GTA 6 plays best on PlayStation 5.",
      "No PS4, Xbox One, Nintendo, or PC launch listing is currently shown in the official launch copy.",
      "Storefront-specific download, preload, and performance details should be checked close to launch."
    ],
    nextUpdate: "Add store-page links and any platform-specific feature notes once they are public and stable.",
    searchTerms: ["gta 6 platforms", "gta 6 ps5", "gta 6 xbox series x"]
  },
  {
    slug: "gta-6-preload-download-size-prep",
    title: "GTA 6 Preload and Download Prep",
    deck: "A practical preload checklist for console players, separating confirmed dates from unknown file-size details.",
    category: "Release",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["take-two-preorders", "rockstar-preorders"],
    bullets: [
      "Digital preloading is scheduled to begin November 12, 2026.",
      "The physical version is described as containing a download code and being available November 12, 2026 to support preloading.",
      "No final file size is treated as confirmed here until official storefront metadata is visible.",
      "Players should keep console storage, account access, and payment details ready before preload week."
    ],
    nextUpdate: "Add PS5 and Xbox file size, version number, and preload windows when official store metadata appears.",
    searchTerms: ["gta 6 preload", "gta 6 download size", "gta 6 physical download code"]
  },
  {
    slug: "gta-6-gta-plus-preorder-benefit",
    title: "GTA 6 GTA+ Preorder Benefit Explained",
    deck: "What the current digital preorder GTA+ benefit says, who it helps, and what not to assume about GTA 6 Online.",
    category: "Buying",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["take-two-preorders", "rockstar-preorders"],
    bullets: [
      "The publisher announcement lists one free month of GTA+ for digital preorders.",
      "The benefit is described around GTA Online and the GTA+ Games Library, not as a confirmed GTA 6 Online feature list.",
      "Subscription renewal terms should be checked on the platform store before redeeming.",
      "Physical buyers should verify retailer and platform terms because the free month is tied to digital preorders in the announcement."
    ],
    nextUpdate: "Add exact redemption flow and renewal terms when platform store pages expose them clearly.",
    searchTerms: ["gta 6 gta plus", "gta 6 preorder gta+", "gta 6 digital preorder bonus"]
  },
  {
    slug: "gta-6-physical-vs-digital-preorder",
    title: "GTA 6 Physical vs Digital Preorder",
    deck: "A console buyer guide for preload timing, download-code boxes, collector habits, and refund friction.",
    category: "Buying",
    intent: "pre-launch",
    status: "live",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["take-two-preorders", "rockstar-preorders"],
    bullets: [
      "Digital preorders are the cleanest path for automatic preload on November 12, 2026.",
      "The physical version is described as a box with a download code inside.",
      "Digital buyers should read platform refund rules before preloading.",
      "Physical buyers should verify retailer delivery timing if launch-night access matters."
    ],
    nextUpdate: "Add retailer-specific pickup, delivery, and code-redemption notes only from public retailer pages.",
    searchTerms: ["gta 6 physical vs digital", "gta 6 physical edition", "gta 6 download code"]
  },
  {
    slug: "gta-6-vintage-vice-city-pack",
    title: "GTA 6 Vintage Vice City Pack",
    deck: "A focused tracker for the confirmed preorder bonus and the cutoff date currently attached to it.",
    category: "Buying",
    intent: "pre-launch",
    status: "live",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "take-two-preorders"],
    bullets: [
      "The Vintage Vice City Pack is the named preorder bonus currently shown by Rockstar.",
      "Take-Two says preorders and purchases before November 20, 2026 include the pack.",
      "The exact item list should be checked against Rockstar's edition pages before purchase.",
      "This site will not claim exclusive items beyond what official copy confirms."
    ],
    nextUpdate: "Add the official item list and platform terms when Rockstar exposes stable edition detail pages.",
    searchTerms: ["vintage vice city pack", "gta 6 preorder bonus", "gta 6 bonus items"]
  },
  {
    slug: "gta-6-trailer-2-breakdown-evidence",
    title: "GTA 6 Trailer 2 Breakdown: Evidence Only",
    deck: "A spoiler-safe trailer notes page for officially published material, without leak claims or frame-by-frame overreach.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "observed",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "rockstar-media"],
    bullets: [
      "Rockstar's official page identifies Trailer 2 as public media for GTA 6.",
      "Trailer observations on this site stay limited to visible, non-leaked official media.",
      "Speculation is kept out of the current-answer bullets and moved into clearly labeled analysis when useful.",
      "No official screenshots or video files are rehosted by default."
    ],
    nextUpdate: "Build a timestamped observation table after reviewing official media with source links beside each note.",
    searchTerms: ["gta 6 trailer 2 breakdown", "gta 6 trailer analysis", "gta 6 official trailer"]
  },
  {
    slug: "gta-6-vice-city-location-guide",
    title: "GTA 6 Vice City Location Guide",
    deck: "The Vice City hub for official description, map context, and future neighborhood-by-neighborhood guides.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "rockstar-leonida"],
    bullets: [
      "Rockstar presents Vice City as a central setting inside Leonida.",
      "Official copy frames the story around Jason and Lucia in and beyond Vice City.",
      "Neighborhood, shop, collectible, and activity pages wait for official or tested location data.",
      "This page is the future internal-link hub for Vice City guides."
    ],
    nextUpdate: "Add official destination notes and launch-week tested markers as soon as they can be verified.",
    searchTerms: ["gta 6 vice city", "gta 6 vice city map", "gta 6 locations"]
  },
  {
    slug: "gta-6-leonida-keys-location-guide",
    title: "GTA 6 Leonida Keys Location Guide",
    deck: "A conservative Leonida Keys tracker for official region mentions, character ties, and future map markers.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Leonida Keys is an official destination name on Rockstar's Leonida page.",
      "Jason's official bio ties him to the Keys and local drug runners.",
      "Activity, property, and vehicle-spawn claims remain unconfirmed before launch.",
      "This page will collect verified Keys markers once gameplay can be tested."
    ],
    nextUpdate: "Add region evidence cards and tested markers after launch, starting with official names only.",
    searchTerms: ["gta 6 leonida keys", "gta 6 keys", "gta 6 map locations"]
  },
  {
    slug: "gta-6-grassrivers-location-guide",
    title: "GTA 6 Grassrivers Location Guide",
    deck: "A pre-launch region page for Grassrivers that keeps official naming separate from biome speculation.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Grassrivers is listed as an official destination on Rockstar's Leonida page.",
      "The current site treats the name as confirmed, not the full map boundary.",
      "Collectibles, wildlife, route, and activity claims wait for hands-on verification.",
      "Future map markers will show confidence labels beside every point."
    ],
    nextUpdate: "Add verified route, activity, and collectible data only after official or launch-week testing supports it.",
    searchTerms: ["gta 6 grassrivers", "gta 6 grass rivers", "gta 6 leonida map"]
  },
  {
    slug: "gta-6-port-gellhorn-location-guide",
    title: "GTA 6 Port Gellhorn Location Guide",
    deck: "The Port Gellhorn tracker for official destination status and future tested mission, vehicle, and activity notes.",
    category: "Map",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Port Gellhorn appears as an official destination name on Rockstar's Leonida page.",
      "This page does not infer a full city layout, economy, or mission chain before launch.",
      "Future sections will separate missions, vehicles, activities, and collectibles by proof type.",
      "Rumor-map claims are excluded from the current answer."
    ],
    nextUpdate: "Add official destination copy and launch-week tested markers once reliable evidence exists.",
    searchTerms: ["gta 6 port gellhorn", "port gellhorn gta 6", "gta 6 locations"]
  },
  {
    slug: "gta-6-jason-duval-character-guide",
    title: "GTA 6 Jason Duval Character Guide",
    deck: "A compact Jason guide using official bio details while leaving mission, actor, and ending speculation out.",
    category: "Characters",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Jason Duval is one of the central GTA 6 characters officially profiled by Rockstar.",
      "Rockstar's bio connects him to the Keys and local drug runners.",
      "His relationship with Lucia is central to the official story setup.",
      "Voice actor, full mission arc, and ending details are not confirmed on this site."
    ],
    nextUpdate: "Add relationship, mission, and gameplay sections only from official material or verified gameplay.",
    searchTerms: ["gta 6 jason", "jason duval gta 6", "gta 6 protagonist"]
  },
  {
    slug: "gta-6-lucia-caminos-character-guide",
    title: "GTA 6 Lucia Caminos Character Guide",
    deck: "A source-led Lucia page for official background, Jason ties, and future mission/walkthrough links.",
    category: "Characters",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Lucia Caminos is one of the central characters officially profiled by Rockstar.",
      "Rockstar's bio connects her background to family, prison, and a plan for a better life.",
      "Her partnership with Jason is part of the current official story framing.",
      "Gameplay abilities, mission order, and endings remain unconfirmed."
    ],
    nextUpdate: "Add verified mission links and spoiler-safe story sections after launch.",
    searchTerms: ["gta 6 lucia", "lucia caminos gta 6", "gta 6 female protagonist"]
  },
  {
    slug: "gta-6-real-dimez-character-guide",
    title: "GTA 6 Real Dimez Character Guide",
    deck: "A short official tracker for Real Dimez, Only Raw Records, and music-scene story threads.",
    category: "Characters",
    intent: "pre-launch",
    status: "tracker",
    confidence: "official",
    updated: "2026-07-08",
    sourceIds: ["rockstar-leonida"],
    bullets: [
      "Real Dimez are officially profiled on Rockstar's Leonida page.",
      "The official copy links them to social media presence, rap tracks, and Only Raw Records.",
      "This page tracks confirmed ties without turning music-scene hints into mission claims.",
      "Song lists, radio appearances, and mission roles remain unconfirmed until sourced."
    ],
    nextUpdate: "Add official media references, character links, and launch-week mission ties when verified.",
    searchTerms: ["gta 6 real dimez", "real dimez gta 6", "gta 6 only raw records"]
  },
  {
    slug: "gta-6-beginner-guide-launch-week",
    title: "GTA 6 Beginner Guide for Launch Week",
    deck: "A spoiler-safe beginner hub planned for first settings, saving, map reading, wanted levels, money, and vehicles.",
    category: "Missions",
    intent: "launch-week",
    status: "launch-week",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "google-spam"],
    bullets: [
      "A real beginner guide requires hands-on launch testing, so this page does not invent controls or systems.",
      "The launch-week checklist will cover settings, saving, map use, wanted levels, money, and early vehicles.",
      "Spoilers will be separated from basic setup and first-hour guidance.",
      "Thin placeholder sections will stay unpublished until they answer a real player question."
    ],
    nextUpdate: "Replace planning bullets with tested steps during launch week.",
    searchTerms: ["gta 6 beginner guide", "gta 6 tips", "gta 6 launch guide"]
  },
  {
    slug: "gta-6-wanted-level-police-escape-guide",
    title: "GTA 6 Wanted Level and Police Escape Guide",
    deck: "A launch-week test plan for wanted levels, escape routes, hiding, vehicles, and repeatable police behavior.",
    category: "Missions",
    intent: "launch-week",
    status: "launch-week",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "google-spam"],
    bullets: [
      "No wanted-level mechanics are treated as final until tested in the released game.",
      "The guide will test stars, line of sight, vehicle swaps, safe locations, and mission restrictions.",
      "Exploit or online-cheating claims will not be promoted.",
      "The page is prebuilt so launch-week test notes have a stable URL."
    ],
    nextUpdate: "Run repeatable escape tests on console launch and publish only consistent results.",
    searchTerms: ["gta 6 wanted level", "gta 6 police", "gta 6 escape cops"]
  },
  {
    slug: "gta-6-money-fast-early-no-exploits",
    title: "GTA 6 Money Fast Early: No Exploits",
    deck: "A future early-money guide that will avoid fake unlimited-money claims and separate story, side activity, and online advice.",
    category: "Missions",
    intent: "launch-week",
    status: "launch-week",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["adsense-publisher", "google-spam", "rockstar-vi"],
    bullets: [
      "No GTA 6 money method is confirmed here before launch testing.",
      "The guide will exclude malware bait, fake generators, and online-cheating instructions.",
      "Launch-week sections will compare early story rewards, repeatable activities, risk, and time cost.",
      "Every method will include platform, prerequisites, payout, and whether it affects progression."
    ],
    nextUpdate: "Test early-game earning routes and publish only repeatable, policy-safe methods.",
    searchTerms: ["gta 6 money fast", "gta 6 early money", "gta 6 no exploit money"]
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

