import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "game-deals-tracker",
    name: "Game Deals Tracker",
    tagline: "Mobile app aggregating game deals across online stores.",
    description:
      "A mobile application that aggregates game deals and pricing information from online stores, letting users search titles, compare prices, and check store details in one place.",
    role: "Sole mobile developer — design, implementation, and API integration.",
    problem:
      "Game prices are scattered across many storefronts, making it slow to figure out where a title is actually cheapest or worth buying right now.",
    solution:
      "A React Native app that pulls live deal data from a games-pricing API, normalizes it, and presents it as a searchable, browsable catalog with per-game store breakdowns.",
    technicalApproach:
      "Built with Expo and TypeScript. Redux Toolkit manages global state for search results, filters, and cached game details, keeping API calls efficient. Data fetching is handled through a typed API layer, with loading and error states handled per-screen rather than globally.",
    challenges:
      "The pricing API returns inconsistent image sizes and occasionally missing fields, so the UI needed to stay stable and legible even with incomplete data. Optimizing image loading for long, scrollable lists without jank took several passes.",
    learnings:
      "Sharpened my approach to normalizing third-party API data before it reaches the UI layer, and got much more deliberate about when global state (Redux) is worth the overhead versus local component state.",
    features: [
      "Search across games and deals",
      "Game detail pages with store-by-store pricing",
      "Store information and links",
      "Dynamic data from a live pricing API",
      "Centralized state management with Redux Toolkit",
      "Optimized image loading for smooth scrolling",
      "Responsive layouts across device sizes",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "REST APIs"],
    githubUrl: "https://github.com/T-dave/games-galore",
    liveUrl: undefined,
    image: "/projects/gamesGalore.png",
  },
  {
    slug: "webtraffic-marketplace",
    name: "WebTraffic Marketplace",
    tagline: "Full-stack marketplace with listings, stores, and messaging.",
    description:
      "A marketplace platform where users can create stores, list items, message other users, and manage listings and favorites — built end-to-end, from the database up through the client.",
    role: "Full-stack developer — API design, database modeling, and client implementation.",
    problem:
      "Independent sellers needed a lightweight place to list items, run a store, and talk to buyers directly, without the overhead of a full e-commerce platform.",
    solution:
      "A Node.js and Express backend exposing REST APIs for authentication, listings, stores, and messaging, backed by MongoDB, paired with a React-based client that consumes those APIs.",
    technicalApproach:
      "Authentication uses JWT with protected routes on the API. Images are uploaded to Cloudinary rather than stored on the server. The data model separates users, stores, and listings so a user can own multiple stores, each with its own listings and favorites. Messaging is modeled as threads between two users tied to a listing.",
    challenges:
      "Getting authentication state to stay in sync between the client and API — including token refresh and protected-route handling — took careful design. Structuring the listings/stores/favorites relationships in MongoDB so queries stayed fast also required a few iterations on the schema.",
    learnings:
      "Learned a lot about structuring a REST API around real-world relationships (users → stores → listings) rather than a flat resource model, and about handling file uploads and image hosting outside the app server.",
    features: [
      "User authentication with JWT",
      "Marketplace listings with search",
      "Store creation and management",
      "Favorites",
      "Direct messaging between users",
      "Profile management",
      "Image uploads via Cloudinary",
      "REST API backend",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/247websolutionsltd/Web-Traffic",
    liveUrl: undefined,
    image: "/projects/web-traffic.png",
  },
  {
    slug: "247-web-solutions",
    name: "247 Web Solutions",
    tagline: "Business application built for a real operating company.",
    description:
      "A business-facing application built to support day-to-day operations for a small company, focused on practical, reliable functionality over anything flashy.",
    role: "Developer — implementation and ongoing maintenance.",
    problem:
      "The business needed a straightforward digital tool to support its operations, without existing software fitting the specific workflow.",
    solution:
      "A focused application built around the business's actual process, prioritizing reliability and ease of use over feature breadth.",
    technicalApproach:
      "Built using the same core stack as my other work — a JavaScript/TypeScript client backed by a Node.js API — keeping the architecture simple and maintainable for a small, real-world user base.",
    challenges:
      "Working directly with a non-technical stakeholder meant translating vague operational needs into concrete features, and adjusting scope as requirements became clearer during the build.",
    learnings:
      "Reinforced how much requirements shift once real users start using software, and the value of shipping a simple, working version early rather than over-building upfront.",
    features: [
      "Core workflow support tailored to the business",
      "Simple, maintainable architecture",
      "Built and iterated on with direct stakeholder feedback",
    ],
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/247websolutionsltd/234websolutions-app",
    liveUrl: undefined,
    image: "/projects/247Web.png",
  },
  {
    slug: "247-logistics",
    name: "247 Logistics",
    tagline: "Pickup requests, dispatch flow, and shipment tracking in one place.",
    description:
      "A logistics operations dashboard designed to help a delivery business manage requests, assign jobs, and track active shipments from dispatch to completion.",
    role: "Full-stack developer — product workflow design, API development, and dashboard implementation.",
    problem:
      "The business was handling shipments across several disconnected touchpoints, which made it hard to keep track of pickups, delivery status, and assignment updates in one place.",
    solution:
      "A centralized operations platform that allows customers to request pickups and allows dispatch teams to assign and monitor deliveries through a simple workflow.",
    technicalApproach:
      "I built the platform with a React front end and a Node.js/Express API, with MongoDB storing job records, shipment details, and operational status. The data model keeps dispatch information organized without making the interface complicated for day-to-day users.",
    challenges:
      "The main challenge was translating a real-world logistics flow into a clean interface without losing important operational details like status changes, pickup timing, and delivery updates.",
    learnings:
      "This project sharpened my understanding of how operational software needs to reflect the real rhythm of a business, especially when teams are working under time pressure.",
    features: [
      "Pickup and delivery request management",
      "Dispatch dashboard for assignment tracking",
      "Shipment status monitoring",
      "Order and customer record management",
      "Operational workflow for delivery teams",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/247websolutionsltd/247Logistics.git",
    liveUrl: undefined,
    image: "/projects/247-logistics.png",
  },
];
