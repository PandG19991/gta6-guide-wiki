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
  decisionRows?: Array<{
    option: string;
    bestFor: string;
    status: string;
    caveat: string;
  }>;
};

export type EvidenceRow = {
  claim: string;
  status: "Official" | "Observed" | "Policy" | "Analysis";
  proof: string;
  sourceId: string;
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
    searchTerms: ["gta 6 release date", "gta 6 preload", "gta 6 platforms"],
    decisionRows: [
      {
        option: "PS5 / Xbox Series X|S launch",
        bestFor: "Console players planning day-one access",
        status: "Official release date is November 19, 2026, with digital preload scheduled for November 12, 2026.",
        caveat: "Check final platform store pages close to launch for local timing, preload windows, and file size."
      },
      {
        option: "PC launch",
        bestFor: "Players waiting for a PC version",
        status: "No official PC release date is listed in the current launch copy.",
        caveat: "Do not trust PC preorder or download claims unless they cite Rockstar, Take-Two, or a platform store."
      }
    ]
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
    searchTerms: ["gta 6 pre order", "gta 6 price", "gta 6 ultimate edition"],
    decisionRows: [
      {
        option: "Standard Edition",
        bestFor: "Players who want the base game at the lowest currently listed price",
        status: "Publisher announcement lists Standard Edition at $79.99.",
        caveat: "Wait for final platform store pages before assuming regional tax, bundles, or refund terms."
      },
      {
        option: "Ultimate Edition",
        bestFor: "Players who know they want the higher-priced edition benefits",
        status: "Publisher announcement lists Ultimate Edition at $99.99.",
        caveat: "Do not buy only from the edition name; verify the exact included items on official store pages."
      },
      {
        option: "Wait before preordering",
        bestFor: "Players unsure about platform, edition contents, or PC availability",
        status: "Preorder bonus timing is official, but some storefront details are still best checked near launch.",
        caveat: "Waiting may mean losing time-limited preorder extras if Rockstar keeps the current cutoff."
      }
    ]
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
    searchTerms: ["gta 6 price", "gta 6 standard edition", "gta 6 ultimate edition price"],
    decisionRows: [
      {
        option: "$79.99 Standard Edition",
        bestFor: "Single-player-first buyers and players who mainly want launch access",
        status: "Official publisher announcement lists the Standard Edition at $79.99.",
        caveat: "Final storefront taxes, refunds, and local currency prices should be checked on the platform store."
      },
      {
        option: "$99.99 Ultimate Edition",
        bestFor: "Buyers who can verify the extra benefits are worth the additional cost",
        status: "Official publisher announcement lists the Ultimate Edition at $99.99.",
        caveat: "Avoid assuming value from the word Ultimate; compare the final official item list first."
      },
      {
        option: "Wait for storefront details",
        bestFor: "Budget-sensitive buyers, PC waiters, and players unsure about edition contents",
        status: "Core pricing is official, but store-level terms can still matter before purchase.",
        caveat: "Waiting may affect preorder bonus eligibility if the current bonus window remains unchanged."
      }
    ]
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
    searchTerms: ["is gta 6 coming to pc", "gta 6 pc release date", "gta 6 pc confirmed"],
    decisionRows: [
      {
        option: "Buy on PS5 / Xbox Series X|S",
        bestFor: "Players who want the officially listed launch platforms",
        status: "Rockstar and Take-Two currently list PlayStation 5 and Xbox Series X|S for launch.",
        caveat: "Storefront-specific preload, file size, and feature details still need final store checks."
      },
      {
        option: "Wait for PC",
        bestFor: "PC-only players or players who prefer mods, keyboard/mouse, or future PC performance settings",
        status: "No official PC release date is listed on the current official GTA 6 page.",
        caveat: "Avoid third-party PC preorder, beta, or download claims until an official PC announcement exists."
      }
    ]
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
    searchTerms: ["gta 6 platforms", "gta 6 ps5", "gta 6 xbox series x"],
    decisionRows: [
      {
        option: "PlayStation 5",
        bestFor: "Players already on PS5 or choosing a confirmed console platform",
        status: "Listed in the current official launch platform copy.",
        caveat: "Check the PlayStation store close to launch for download size, preload timing, and platform terms."
      },
      {
        option: "Xbox Series X|S",
        bestFor: "Players already on current Xbox hardware or choosing a confirmed console platform",
        status: "Listed in the current official launch platform copy.",
        caveat: "Check the Xbox store close to launch for download size, preload timing, and platform terms."
      },
      {
        option: "PC / last-gen / Nintendo",
        bestFor: "Players who do not want to buy on the currently listed launch consoles",
        status: "Not listed as launch platforms in the current official launch copy.",
        caveat: "Treat dates, store pages, and download links as unconfirmed unless Rockstar, Take-Two, or a platform store publishes them."
      }
    ]
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
    searchTerms: ["gta 6 preload", "gta 6 download size", "gta 6 physical download code"],
    decisionRows: [
      {
        option: "Digital preorder",
        bestFor: "Players who want the simplest preload path",
        status: "Digital preloading is scheduled to begin November 12, 2026.",
        caveat: "Final file size and exact platform timing still need official store metadata."
      },
      {
        option: "Physical box with download code",
        bestFor: "Collectors or gift buyers who still want launch-week preload support",
        status: "Current publisher copy describes the physical version as containing a download code available November 12, 2026.",
        caveat: "Retailer delivery or pickup timing can still affect when the code is actually in hand."
      },
      {
        option: "Storage prep",
        bestFor: "Anyone with limited console storage or slow internet",
        status: "Final file size is not treated as confirmed yet.",
        caveat: "Keep free space, account access, payment status, and console updates ready before preload week."
      }
    ]
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
    searchTerms: ["gta 6 gta plus", "gta 6 preorder gta+", "gta 6 digital preorder bonus"],
    decisionRows: [
      {
        option: "Digital preorder with GTA+ month",
        bestFor: "Players who already use or want to test GTA+ around launch",
        status: "Publisher announcement lists one free month of GTA+ for digital preorders.",
        caveat: "Check renewal, cancellation, and platform account terms before redeeming."
      },
      {
        option: "Physical purchase",
        bestFor: "Players who prefer a box or retailer purchase",
        status: "The free month is described around digital preorders in the current announcement.",
        caveat: "Verify retailer and platform terms before assuming the same subscription benefit applies."
      },
      {
        option: "Ignore the subscription bonus",
        bestFor: "Players buying only for GTA 6 story access",
        status: "The current benefit language does not confirm a GTA 6 Online feature list.",
        caveat: "Do not overvalue the bonus until Rockstar explains launch-era online services clearly."
      }
    ]
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
    searchTerms: ["gta 6 physical vs digital", "gta 6 physical edition", "gta 6 download code"],
    decisionRows: [
      {
        option: "Digital preorder",
        bestFor: "Launch-night access, automatic preload, and fewer retailer timing variables",
        status: "Digital preorders are currently the cleanest path for November 12 preload.",
        caveat: "Read platform refund rules before preloading."
      },
      {
        option: "Physical download-code box",
        bestFor: "Collectors, gift buyers, or players who prefer retailer purchases",
        status: "Publisher copy describes the physical version as a box with a download code.",
        caveat: "Delivery, pickup time, and code redemption can affect launch access."
      },
      {
        option: "Wait after launch",
        bestFor: "Players prioritizing reviews, performance reports, or final edition details",
        status: "Waiting avoids preorder uncertainty.",
        caveat: "You may miss preorder timing or launch-week preload convenience."
      }
    ]
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
    searchTerms: ["vintage vice city pack", "gta 6 preorder bonus", "gta 6 bonus items"],
    decisionRows: [
      {
        option: "Buy inside the bonus window",
        bestFor: "Players who know they want GTA 6 and value preorder cosmetics or extras",
        status: "Take-Two says preorders and purchases before November 20, 2026 include the pack.",
        caveat: "Verify the exact item list on official edition pages before treating the pack as a major value driver."
      },
      {
        option: "Wait for more detail",
        bestFor: "Players who care more about reviews, performance, or final edition contents",
        status: "The pack name and timing are official, but item-level value still needs stable official detail.",
        caveat: "Waiting past the cutoff could mean losing the preorder bonus if terms stay the same."
      }
    ]
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
    sourceIds: ["rockstar-vi", "rockstar-media", "rockstar-copyright"],
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
    slug: "how-to-avoid-gta-6-spoilers-before-launch",
    title: "How to Avoid GTA 6 Spoilers Before Launch",
    deck: "A practical spoiler-control guide for muting leaks, avoiding fake download bait, and staying on official GTA 6 information paths.",
    category: "Missions",
    intent: "pre-launch",
    status: "live",
    confidence: "analysis",
    updated: "2026-07-08",
    sourceIds: ["rockstar-vi", "google-spam", "adsense-publisher"],
    bullets: [
      "Use official Rockstar, Take-Two, platform store, and source-tracked guide pages for launch facts.",
      "Mute terms around Lucia, Jason, endings, missions, map leaks, and final mission before launch week.",
      "Avoid beta, download, generator, and leak pages that mix spoilers with malware bait or thin search spam.",
      "This site keeps spoiler-heavy walkthrough details out of pre-launch hubs and labels launch-week pages clearly."
    ],
    nextUpdate: "Add platform-specific mute steps for YouTube, Reddit, TikTok, X, and search results if spoiler leaks become widespread.",
    searchTerms: ["gta 6 spoilers", "avoid gta 6 spoilers", "gta 6 leaks"],
    decisionRows: [
      {
        option: "Strict blackout",
        bestFor: "Players who want story, mission, and map surprises preserved",
        status: "Mute character, ending, mission, leak, and final-mission terms across feeds.",
        caveat: "You may miss legitimate official trailers or preorder updates unless official sources are allowed."
      },
      {
        option: "Official-only feed",
        bestFor: "Players who want news without leak threads or unverified claims",
        status: "Follow Rockstar, Take-Two, platform stores, and source-led guide pages.",
        caveat: "Official trailers can still reveal setting, character, and feature details."
      },
      {
        option: "Spoiler-safe guides",
        bestFor: "Players who want launch prep without mission outcomes",
        status: "Use pages that label speculation and keep walkthrough spoilers out of broad hubs.",
        caveat: "Post-launch pages should still be checked for spoiler warnings before reading deeply."
      }
    ]
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

export const guideCategoryMeta = [
  {
    category: "Release",
    slug: "release",
    title: "GTA 6 Release Guides",
    deck: "Release date, preload, platforms, PC status, and launch-readiness pages with official-source guardrails.",
    image: "/assets/og-release.png"
  },
  {
    category: "Buying",
    slug: "buying",
    title: "GTA 6 Buying Guides",
    deck: "Preorder, price, edition, bonus, physical-vs-digital, and purchase-timing guidance.",
    image: "/assets/og-buying.png"
  },
  {
    category: "Map",
    slug: "map",
    title: "GTA 6 Map and Location Guides",
    deck: "Leonida, Vice City, official regions, trailer evidence, and launch-week map verification plans.",
    image: "/assets/og-map.png"
  },
  {
    category: "Characters",
    slug: "characters",
    title: "GTA 6 Character Guides",
    deck: "Official character profiles, relationship notes, and source-led cast trackers.",
    image: "/assets/og-characters.png"
  },
  {
    category: "Vehicles",
    slug: "vehicles",
    title: "GTA 6 Vehicle Guides",
    deck: "Vehicle tracker pages that separate official or observed evidence from leak-driven list spam.",
    image: "/assets/og-vehicles.png"
  },
  {
    category: "Missions",
    slug: "missions",
    title: "GTA 6 Mission and Walkthrough Guides",
    deck: "Spoiler-safe mission, beginner, police, money, and launch-week walkthrough planning.",
    image: "/assets/og-missions.png"
  },
  {
    category: "Cheats",
    slug: "cheats",
    title: "GTA 6 Cheat Guides",
    deck: "No-fake-code cheat tracking, launch-week test plans, and policy-safe cheat coverage.",
    image: "/assets/og-cheats.png"
  },
  {
    category: "SEO",
    slug: "seo",
    title: "GTA 6 Fan Site SEO Guides",
    deck: "Domain, source, and fan-site policy choices for building a useful unofficial guide site.",
    image: "/assets/og-seo.png"
  }
] as const satisfies Array<{ category: Guide["category"]; slug: string; title: string; deck: string; image: string }>;

export const categoryMetaBySlug = Object.fromEntries(guideCategoryMeta.map((meta) => [meta.slug, meta]));
export const categoryMetaByName = Object.fromEntries(guideCategoryMeta.map((meta) => [meta.category, meta]));

export const guideEvidenceRows: Record<string, EvidenceRow[]> = {
  "gta-6-release-date-countdown-preload": [
    {
      claim: "Launch date",
      status: "Official",
      proof: "Rockstar and Take-Two list November 19, 2026 as the scheduled release date.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Launch platforms",
      status: "Official",
      proof: "The current platform copy lists PlayStation 5 and Xbox Series X|S.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Preload timing",
      status: "Official",
      proof: "The preorder announcement says digital preloading is scheduled to begin November 12, 2026.",
      sourceId: "rockstar-preorders"
    },
    {
      claim: "PC status",
      status: "Official",
      proof: "The current official launch platform copy does not list a PC release date.",
      sourceId: "rockstar-vi"
    }
  ],
  "gta-6-pre-order-standard-vs-ultimate": [
    {
      claim: "Standard Edition price",
      status: "Official",
      proof: "Take-Two's preorder announcement lists Standard Edition at $79.99.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Ultimate Edition price",
      status: "Official",
      proof: "Take-Two's preorder announcement lists Ultimate Edition at $99.99.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Preorder bonus window",
      status: "Official",
      proof: "The publisher copy ties the Vintage Vice City Pack to preorders and purchases before November 20, 2026.",
      sourceId: "rockstar-preorders"
    },
    {
      claim: "GTA+ digital benefit",
      status: "Official",
      proof: "The announcement describes one free month of GTA+ for digital preorders.",
      sourceId: "take-two-preorders"
    }
  ],
  "gta-6-price-standard-ultimate-explained": [
    {
      claim: "Base price",
      status: "Official",
      proof: "Standard Edition is listed at $79.99 in the publisher preorder announcement.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Higher edition price",
      status: "Official",
      proof: "Ultimate Edition is listed at $99.99 in the same announcement.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Value caution",
      status: "Analysis",
      proof: "The page recommends comparing final item lists and store terms before paying extra.",
      sourceId: "rockstar-preorders"
    }
  ],
  "is-gta-6-coming-to-pc": [
    {
      claim: "Current launch platforms",
      status: "Official",
      proof: "Rockstar's current GTA 6 page names PS5 and Xbox Series X|S for launch.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "PC date not announced",
      status: "Official",
      proof: "The official page and current preorder copy do not list a PC launch date.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Fake PC claim filter",
      status: "Policy",
      proof: "Unverified PC download, beta, or preorder claims are kept out unless they cite official sources.",
      sourceId: "google-spam"
    }
  ],
  "gta-6-platforms-ps5-xbox-series-x-s": [
    {
      claim: "PS5 support",
      status: "Official",
      proof: "PlayStation 5 is named in the current official platform list.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Xbox Series X|S support",
      status: "Official",
      proof: "Xbox Series X|S is named in the current official platform list.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Unsupported launch platforms",
      status: "Official",
      proof: "The current official launch copy does not list PS4, Xbox One, Nintendo, or PC.",
      sourceId: "rockstar-vi"
    }
  ],
  "gta-6-preload-download-size-prep": [
    {
      claim: "Digital preload date",
      status: "Official",
      proof: "The preorder announcement says digital preload begins November 12, 2026.",
      sourceId: "rockstar-preorders"
    },
    {
      claim: "Physical download code",
      status: "Official",
      proof: "Publisher copy describes the physical version as a box with a download code available for preload.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Download size",
      status: "Analysis",
      proof: "No final file size is treated as confirmed until official store metadata is visible.",
      sourceId: "rockstar-preorders"
    }
  ],
  "gta-6-gta-plus-preorder-benefit": [
    {
      claim: "Digital preorder benefit",
      status: "Official",
      proof: "The publisher announcement lists one free month of GTA+ for digital preorders.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Benefit scope",
      status: "Official",
      proof: "The current copy describes GTA+ around GTA Online and the GTA+ Games Library, not a final GTA 6 Online feature list.",
      sourceId: "rockstar-preorders"
    },
    {
      claim: "Subscription caution",
      status: "Analysis",
      proof: "Readers should check platform renewal and cancellation terms before redeeming a subscription benefit.",
      sourceId: "rockstar-preorders"
    }
  ],
  "gta-6-physical-vs-digital-preorder": [
    {
      claim: "Digital preload path",
      status: "Official",
      proof: "Digital preloading is scheduled for November 12, 2026.",
      sourceId: "rockstar-preorders"
    },
    {
      claim: "Physical format",
      status: "Official",
      proof: "The current publisher copy describes the physical version as containing a download code.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Retail timing risk",
      status: "Analysis",
      proof: "Physical access still depends on retailer delivery, pickup, and code redemption timing.",
      sourceId: "take-two-preorders"
    }
  ],
  "gta-6-vintage-vice-city-pack": [
    {
      claim: "Bonus name",
      status: "Official",
      proof: "Rockstar names the Vintage Vice City Pack as the current preorder bonus.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Bonus cutoff",
      status: "Official",
      proof: "Take-Two says preorders and purchases before November 20, 2026 include the pack.",
      sourceId: "take-two-preorders"
    },
    {
      claim: "Item-level restraint",
      status: "Analysis",
      proof: "The page does not claim a final item list beyond the official pack name and timing.",
      sourceId: "rockstar-preorders"
    }
  ],
  "gta-6-trailer-2-breakdown-evidence": [
    {
      claim: "Official media basis",
      status: "Official",
      proof: "Rockstar lists Trailer 2 and the current public media set through its official GTA 6 pages.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Observation boundary",
      status: "Analysis",
      proof: "The page limits trailer notes to official media and does not convert frame observations into mission or story claims.",
      sourceId: "rockstar-media"
    },
    {
      claim: "Leak boundary",
      status: "Policy",
      proof: "Rockstar's copyright guidance is the reason this site avoids leaked pre-release material and does not rehost official assets by default.",
      sourceId: "rockstar-copyright"
    }
  ],
  "gta-6-vice-city-location-guide": [
    {
      claim: "Official setting",
      status: "Official",
      proof: "Rockstar's Leonida page presents Vice City as an official GTA 6 destination inside Leonida.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Launch context",
      status: "Official",
      proof: "The current official GTA 6 page frames Vice City and Leonida as the public setting context for the game.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Neighborhood restraint",
      status: "Analysis",
      proof: "The page does not publish neighborhood, shop, collectible, or activity claims before official or tested location data exists.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-leonida-keys-location-guide": [
    {
      claim: "Official destination name",
      status: "Official",
      proof: "Leonida Keys is listed as an official destination on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Character tie",
      status: "Official",
      proof: "Jason's official profile connects him to the Keys and local drug runners.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Marker restraint",
      status: "Analysis",
      proof: "Activity, property, and vehicle-spawn claims remain out until official material or launch-week testing supports them.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-grassrivers-location-guide": [
    {
      claim: "Official destination name",
      status: "Official",
      proof: "Grassrivers is listed as an official destination on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Boundary restraint",
      status: "Analysis",
      proof: "The current page treats the destination name as confirmed without claiming the full map boundary.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Collectible restraint",
      status: "Analysis",
      proof: "Collectible, wildlife, route, and activity notes wait for official detail or launch-week testing.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-port-gellhorn-location-guide": [
    {
      claim: "Official destination name",
      status: "Official",
      proof: "Port Gellhorn appears as an official destination name on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Layout restraint",
      status: "Analysis",
      proof: "The page does not infer city layout, economy, mission chains, or activity density before launch.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Future proof path",
      status: "Analysis",
      proof: "Missions, vehicles, activities, and collectibles will be added only when official material or tested gameplay supports them.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-characters-official-cast": [
    {
      claim: "Official central pair",
      status: "Official",
      proof: "Rockstar's Leonida page profiles Jason Duval and Lucia Caminos as the central character pair in the current story setup.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Official supporting profiles",
      status: "Official",
      proof: "The same official page also profiles Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista, and Brian Heder.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Casting restraint",
      status: "Analysis",
      proof: "Voice actor, mission role, and ending claims stay out unless Rockstar, Take-Two, or tested gameplay confirms them.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-jason-duval-character-guide": [
    {
      claim: "Official profile",
      status: "Official",
      proof: "Jason Duval has an official profile on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Keys connection",
      status: "Official",
      proof: "Rockstar's bio connects Jason to the Keys and local drug runners.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Story restraint",
      status: "Analysis",
      proof: "The page does not claim Jason's full mission arc, voice actor, gameplay abilities, or ending before official or tested evidence exists.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-lucia-caminos-character-guide": [
    {
      claim: "Official profile",
      status: "Official",
      proof: "Lucia Caminos has an official profile on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Official background",
      status: "Official",
      proof: "Rockstar's bio connects Lucia to family, prison, and a plan to change her odds.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Story restraint",
      status: "Analysis",
      proof: "Gameplay abilities, mission order, relationship outcomes, and endings remain unconfirmed on this site.",
      sourceId: "rockstar-leonida"
    }
  ],
  "gta-6-real-dimez-character-guide": [
    {
      claim: "Official profile",
      status: "Official",
      proof: "Real Dimez are officially profiled on Rockstar's Leonida page.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Official music-scene tie",
      status: "Official",
      proof: "The official copy links Real Dimez to social media presence, rap tracks, DWNPLY, and Only Raw Records.",
      sourceId: "rockstar-leonida"
    },
    {
      claim: "Mission restraint",
      status: "Analysis",
      proof: "Song lists, radio appearances, exact mission roles, and reward claims remain out until official or tested evidence supports them.",
      sourceId: "rockstar-leonida"
    }
  ],
  "how-to-avoid-gta-6-spoilers-before-launch": [
    {
      claim: "Official-source path",
      status: "Analysis",
      proof: "Spoiler-safe launch prep should start with official Rockstar or publisher pages and source-tracked guide summaries.",
      sourceId: "rockstar-vi"
    },
    {
      claim: "Leak and bait risk",
      status: "Policy",
      proof: "Google's spam guidance warns against manipulative, low-value, or deceptive pages; GTA leak/download bait belongs outside this site's recommendations.",
      sourceId: "google-spam"
    },
    {
      claim: "Ad-safety boundary",
      status: "Policy",
      proof: "The site avoids thin, misleading, or copied spoiler content that would reduce user value and create publisher-policy risk.",
      sourceId: "adsense-publisher"
    }
  ],
  "gta-6-domain-strategy-fan-site-seo": [
    {
      claim: "Brand-first domain",
      status: "Analysis",
      proof: "Search terms belong in titles and content; the domain should avoid looking official or trademark-heavy.",
      sourceId: "google-seo-starter"
    },
    {
      claim: "Copyright boundary",
      status: "Policy",
      proof: "The site avoids official logos, leaked assets, and confusing Rockstar or Take-Two affiliation.",
      sourceId: "rockstar-copyright"
    },
    {
      claim: "Ad-safety boundary",
      status: "Policy",
      proof: "The strategy rejects scraped, thin, or misleading pages that only exist for ads.",
      sourceId: "adsense-publisher"
    }
  ]
};

