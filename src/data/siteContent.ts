export const profile = {
  name: "Do Tuan Thinh",
  role: "Fullstack Software Engineer · Web, Cloud & Real-Time Systems",
  email: "dotuanthinh37.work@gmail.com",
  location: "Da Nang, Vietnam",
  github: "https://github.com/tuanthinh16",
  linkedin: "https://linkedin.com/in/tuanthinh16",
};

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#skills" },
  { label: "About", href: "#about" },
];

export const selectedWork = [
  {
    number: "01",
    area: "ENTERPRISE / ERP",
    visual: "erp",
    experienceSlug: "luvina",
    title: "One studio. Many moving parts.",
    description: "An ERP for photo bookings, event tickets and handmade products, with role-based access and partner-specific data management.",
    stack: ["C#", "ASP.NET Core", "Razor", "SQL Server"],
    detail: "Luvina Software · 2026 — Present",
  },
  {
    number: "02",
    area: "HEALTHCARE / HIS & LIS",
    visual: "health",
    experienceSlug: "vietsens",
    title: "Making complex healthcare systems connect.",
    description: "C#/.NET services and HIS/LIS integrations supporting hospital operations at scale.",
    stack: ["C#", ".NET", "Oracle", "HIS / LIS"],
    detail: "Vietsens · 2023 — 2025",
  },
  {
    number: "03",
    area: "FINTECH / REAL-TIME",
    visual: "market",
    experienceSlug: "trinity",
    title: "Trading systems built for the moment.",
    description: "Market data pipelines, WebSocket services and trading interfaces for a live stock platform.",
    stack: ["Laravel", "Node.js", "WebSocket", "TimescaleDB", "Redis"],
    detail: "Trinity Net Technology · 2025 — 2026",
  },
  {
    number: "04",
    area: "FULLSTACK / FREELANCE & E-COMMERCE",
    visual: "freelance",
    experienceSlug: "freelance",
    title: "High-speed storefronts with automated CI/CD.",
    description: "Modern e-commerce and web platforms built with Next.js, featuring automated GitHub Actions CI/CD pipelines and Vercel edge deployment.",
    stack: ["Next.js", "Vercel", "GitHub Actions", "NestJS", "PostgreSQL"],
    detail: "Freelance & Client Projects · 2021 — 2023",
  },
];

export const expertise = [
  {
    number: "01 / CORE & PLATFORM",
    title: "Fullstack Architecture",
    description: "Enterprise workflows, multi-partner ERPs, scalable business logic, and cross-platform systems.",
    tools: ["C# / ASP.NET Core", ".NET MAUI / Razor", "SQL Server", "IIS / Enterprise"],
  },
  {
    number: "02 / MODERN WEB",
    title: "Next.js & Frontend",
    description: "High-performance reactive interfaces, server-side rendering, and automated Vercel edge deployments.",
    tools: ["Next.js / React", "TypeScript", "SSR / SEO", "Tailwind CSS / Vercel"],
  },
  {
    number: "03 / DATA & STREAMING",
    title: "Real-Time & Data",
    description: "High-throughput tick ingestion, time-series aggregation, and low-latency WebSocket market feeds.",
    tools: ["Python / Flask", "TimescaleDB", "PostgreSQL / Redis", "WebSocket / Kafka"],
  },
  {
    number: "04 / CLOUD & DEVOPS",
    title: "APIs & CI/CD Automation",
    description: "Automated continuous delivery with GitHub Actions, containerization, microservices, and reliable high-load APIs.",
    tools: ["GitHub Actions", "Vercel", "Docker / Linux", "PHP / Laravel / NestJS"],
  },
];

export const additionalSkills = [
  "Vue.js", "NestJS", "WebSocket / Socket.IO", "Kafka", "MySQL",
  "MongoDB", "Oracle DB", "Docker / Linux", "Nginx", "Rust",
  "DevExpress", "MUI", "Bootstrap", "Flexcel", "JWT",
  "Vercel", "GitHub Actions",
];

export const career = [
  {
    slug: "freelance",
    locationId: "unspecified",
    period: "2021 — 2023",
    role: "Independent Fullstack Engineer",
    organization: "Freelance & Client Projects",
    domain: "FULLSTACK / WEB & CLOUD",
    summary: "Production web applications, e-commerce storefronts, and automated CI/CD deployment pipelines for independent businesses.",
    context: "Partnered directly with clients from requirements analysis to architecture design, fullstack development, automated CI/CD with GitHub Actions, and high-availability Vercel/Docker deployment.",
    contributions: [
      "Engineered high-performance web applications using Next.js (SSR, App Router, SEO-first architecture) and React.",
      "Constructed modular backend services and RESTful APIs using NestJS and Flask with PostgreSQL/MongoDB persistence.",
      "Configured automated CI/CD pipelines via GitHub Actions for automated linting, unit tests, and continuous deployment to Vercel and Docker VPS.",
      "Built responsive e-commerce platforms with payment integrations, inventory alerts, and optimized Google PageSpeed scores (98+).",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "GitHub Actions", "NestJS", "Python / Flask", "PostgreSQL", "Docker", "Tailwind CSS"],
    demo: "https://www.phatdatprecision.com/",
  },
  {
    slug: "vietsens",
    locationId: "ha-noi",
    period: "2023 — 2025",
    role: "Software Engineer · Healthcare Systems",
    organization: "Vietsens",
    domain: "HEALTHCARE / HIS & LIS",
    summary: "Hospital software, backend services and integrations with existing healthcare systems.",
    context: "Contributed to C#/.NET systems for hospitals with demanding operational workflows and existing HIS/LIS integrations.",
    contributions: [
      "Engineered robust backend healthcare services and database access layers using C#/.NET.",
      "Architected high-throughput integrations connecting hospital workflows with HIS/LIS laboratory systems.",
      "Built clinical reporting dashboards with DevExpress and Oracle DB, optimizing complex hospital query performance.",
    ],
    technologies: ["C#", ".NET", "Oracle", "DevExpress", "HIS / LIS"],
  },
  {
    slug: "trinity",
    locationId: "ho-chi-minh",
    period: "2025 — 2026",
    role: "Fullstack & Real-Time Engineer",
    organization: "Trinity Net Technology",
    domain: "FINTECH / REAL-TIME",
    summary: "Real-time trading platform, market data services and customer-facing web applications.",
    context: "Worked with a backend team on a stock trading platform handling market data for thousands of symbols.",
    contributions: [
      "Developed high-concurrency Laravel APIs and data ingestion pipelines for stock trading platforms.",
      "Built Flask and NestJS services to collect, normalize, and stream market tick data via WebSocket.",
      "Aggregated tick records into candlestick intervals using PostgreSQL / TimescaleDB and integrated reactive Vue.js trading screens.",
    ],
    technologies: ["PHP / Laravel", "Python / Flask", "NestJS", "PostgreSQL / TimescaleDB", "WebSocket"],
  },
  {
    slug: "luvina",
    locationId: "da-nang",
    period: "2026 — NOW",
    role: "Senior Fullstack Engineer",
    organization: "Luvina Software",
    domain: "ENTERPRISE / ERP",
    summary: "Enterprise studio ERP connecting photo bookings, event tickets and handmade product sales across multiple partners with strict RBAC.",
    context: "Developing an ERP for a photo studio whose operations span shoot scheduling, event ticketing and handmade product sales for a Japanese client.",
    contributions: [
      "Architected unified booking, ticketing, and product sales workflows in a multi-tenant enterprise system.",
      "Implemented role-based access control (RBAC) and multi-partner data isolation for Japanese clients.",
      "Engineered fullstack solutions spanning C#, ASP.NET Core, Razor, .NET MAUI, SQL Server, and IIS deployment.",
      "Led requirements analysis, schema design, API contracts, automated testing, and CI/CD deployment.",
    ],
    technologies: ["C#", "ASP.NET Core", "Razor", ".NET MAUI", "SQL Server", "IIS"],
  },
];

// Added 2026-09-23: CV-confirmed cities and illustrative distances for roadmap scenery and signs; freelance has no city in the CV.
export const careerLocations: Record<string, { name: string; signName: string; landmark: string }> = {
  "da-nang": { name: "Đà Nẵng", signName: "ĐÀ NẴNG", landmark: "Cầu Rồng · Sông Hàn" },
  "ho-chi-minh": { name: "TP. Hồ Chí Minh", signName: "TP.HCM", landmark: "Chợ Bến Thành · Bitexco" },
  "ha-noi": { name: "Hà Nội", signName: "HÀ NỘI", landmark: "Tháp Rùa · Hồ Hoàn Kiếm" },
  unspecified: { name: "Remote / Client Projects", signName: "FREELANCE", landmark: "Independent & Client Systems" },
};

export const careerRouteDistances: Record<string, number> = {
  "da-nang:ho-chi-minh": 1000,
  "ha-noi:ho-chi-minh": 1700,
  "da-nang:ha-noi": 760,
};

// Config added 2026-10-14: Comprehensive tech stack inventory categorized for the dedicated tech stack dashboard section
export interface TechStackItem {
  name: string;
  category: "backend" | "frontend" | "database" | "realtime" | "devops";
  categoryLabel: string;
  domain: string;
  badge: string;
  description: string;
  proficiency: "Enterprise Core" | "High Throughput" | "Production Live" | "Specialized";
}

export const structuredTechStack: TechStackItem[] = [
  // Backend & Core
  {
    name: "C# / ASP.NET Core",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Luvina Software",
    badge: "Enterprise ERP",
    description: "Core architecture for multi-partner ERP, business logic, role-based authorization, and high-reliability APIs.",
    proficiency: "Enterprise Core",
  },
  {
    name: "PHP / Laravel",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Trinity Net Technology",
    badge: "Fintech Platform",
    description: "High-volume market data APIs, background queue workers, and transaction execution pipelines.",
    proficiency: "High Throughput",
  },
  {
    name: "Python / Flask",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Trinity Net Technology",
    badge: "Market Ingestion",
    description: "Tick data collection engines, market price normalization, and real-time streaming services.",
    proficiency: "High Throughput",
  },
  {
    name: "NestJS",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Trinity / Freelance",
    badge: "Microservices",
    description: "Modular TypeScript backend services, WebSocket gateways, and scalable API architecture.",
    proficiency: "Production Live",
  },
  {
    name: "Rust",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Additional Skills",
    badge: "Systems Exploration",
    description: "Memory-safe systems programming, concurrency exploration, and performance-critical routines.",
    proficiency: "Specialized",
  },
  {
    name: "Flexcel",
    category: "backend",
    categoryLabel: "Core & Backend",
    domain: "Vietsens / Luvina",
    badge: "Data Automation",
    description: "Automated enterprise Excel spreadsheet generation, template manipulation, and financial exports.",
    proficiency: "Enterprise Core",
  },

  // Frontend & UI
  {
    name: "Next.js / React",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Freelance / Web",
    badge: "SSR & SEO",
    description: "Server-side rendered web applications, dashboard interfaces, App Router architecture, and SEO optimization.",
    proficiency: "Production Live",
  },
  {
    name: "Vue.js",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Trinity Net Technology",
    badge: "Trading UI",
    description: "Reactive trading screens, live order books, and dynamic candlestick charting components.",
    proficiency: "High Throughput",
  },
  {
    name: ".NET MAUI",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Luvina Software",
    badge: "Cross-Platform",
    description: "Cross-platform desktop and mobile management clients for studio booking operations.",
    proficiency: "Enterprise Core",
  },
  {
    name: "Razor Pages",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Luvina Software",
    badge: "Partner Portals",
    description: "Server-rendered enterprise interface flows and partner data management dashboards.",
    proficiency: "Enterprise Core",
  },
  {
    name: "DevExpress",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Vietsens",
    badge: "Hospital Dashboards",
    description: "High-density data grid reporting, operational monitoring, and hospital clinical data visualization.",
    proficiency: "Enterprise Core",
  },
  {
    name: "MUI & Bootstrap",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    domain: "Additional Skills",
    badge: "Design Systems",
    description: "Component library customization, responsive layout systems, and enterprise design standards.",
    proficiency: "Production Live",
  },

  // Databases & Storage
  {
    name: "Microsoft SQL Server",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Luvina Software",
    badge: "Enterprise Schemas",
    description: "Complex relational schemas, stored procedures, multi-tenant partner data isolation, transaction integrity.",
    proficiency: "Enterprise Core",
  },
  {
    name: "Oracle DB",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Vietsens",
    badge: "Hospital Warehousing",
    description: "High-throughput hospital records, HIS/LIS query optimization, and clinical database maintenance.",
    proficiency: "Enterprise Core",
  },
  {
    name: "PostgreSQL / TimescaleDB",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Trinity Net Technology",
    badge: "Time-Series Hypertable",
    description: "Financial tick data persistence, candlestick chart hypertable aggregation for market symbols.",
    proficiency: "High Throughput",
  },
  {
    name: "Redis",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Trinity Net Technology",
    badge: "In-Memory Cache",
    description: "Low-latency market depth caching, real-time symbol state, and Pub/Sub message broker.",
    proficiency: "High Throughput",
  },
  {
    name: "MySQL",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Additional Skills",
    badge: "Relational DB",
    description: "Schema normalization, indexing strategies, and transactional web application data stores.",
    proficiency: "Production Live",
  },
  {
    name: "MongoDB",
    category: "database",
    categoryLabel: "Databases & Storage",
    domain: "Additional Skills",
    badge: "Document Store",
    description: "Document-based persistence, high-velocity schema-free logging, and catalog stores.",
    proficiency: "Production Live",
  },

  // Real-Time & Architecture
  {
    name: "WebSocket / Socket.IO",
    category: "realtime",
    categoryLabel: "Real-Time & Architecture",
    domain: "Trinity Net Technology",
    badge: "Low-Latency Stream",
    description: "Bidirectional streaming pipelines for live stock prices and trade execution feeds.",
    proficiency: "High Throughput",
  },
  {
    name: "HIS / LIS Protocols",
    category: "realtime",
    categoryLabel: "Real-Time & Architecture",
    domain: "Vietsens",
    badge: "Healthcare Integration",
    description: "Integration pipelines connecting Hospital Information & Lab Information Systems.",
    proficiency: "Enterprise Core",
  },
  {
    name: "Apache Kafka",
    category: "realtime",
    categoryLabel: "Real-Time & Architecture",
    domain: "Additional Skills",
    badge: "Event Streaming",
    description: "Distributed event streaming and decoupled message processing pipelines for high-throughput symbol events.",
    proficiency: "High Throughput",
  },
  {
    name: "JWT & RBAC Security",
    category: "realtime",
    categoryLabel: "Real-Time & Architecture",
    domain: "Luvina / Freelance",
    badge: "Enterprise Auth",
    description: "Role-based access control, stateless tokens, partner data isolation, and API security barriers.",
    proficiency: "Enterprise Core",
  },

  // DevOps & Infrastructure
  {
    name: "Vercel",
    category: "devops",
    categoryLabel: "DevOps & Infrastructure",
    domain: "Freelance / Web",
    badge: "Edge & Cloud",
    description: "Zero-configuration edge hosting, Next.js SSR/ISR builds, serverless APIs, global CDN edge network, and preview branches.",
    proficiency: "Production Live",
  },
  {
    name: "GitHub Actions",
    category: "devops",
    categoryLabel: "DevOps & Infrastructure",
    domain: "Freelance / Production",
    badge: "CI/CD Automation",
    description: "Automated continuous integration and deployment pipelines, automated lint/test suites, docker build triggers, and release tagging.",
    proficiency: "Production Live",
  },
  {
    name: "Docker & Linux / VPS",
    category: "devops",
    categoryLabel: "DevOps & Infrastructure",
    domain: "Freelance / Deploy",
    badge: "Containerization",
    description: "Multi-stage Docker builds, Linux container orchestration, VPS server maintenance.",
    proficiency: "Production Live",
  },
  {
    name: "IIS Server",
    category: "devops",
    categoryLabel: "DevOps & Infrastructure",
    domain: "Luvina Software",
    badge: "Windows Server",
    description: "Enterprise Windows Server deployment, application pools, rewrite rules & SSL setup.",
    proficiency: "Enterprise Core",
  },
  {
    name: "Nginx",
    category: "devops",
    categoryLabel: "DevOps & Infrastructure",
    domain: "Production",
    badge: "Reverse Proxy",
    description: "High-performance reverse proxy, SSL termination, rate-limiting, and web server tuning.",
    proficiency: "Production Live",
  },
];
