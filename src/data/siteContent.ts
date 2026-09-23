export const profile = {
  name: "Do Tuan Thinh",
  role: "C# Fullstack Developer · Enterprise ERP Solutions",
  email: "dotuanthinh37.work@gmail.com",
  location: "Da Nang, Vietnam",
  github: "https://github.com/tuanthinh16",
  linkedin: "https://linkedin.com/in/tuanthinh16",
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
];

export const expertise = [
  {
    number: "01 / PRIMARY",
    title: "C# fullstack",
    description: "ERP workflows, business logic, permissions and deployment for enterprise teams.",
    tools: ["C# / ASP.NET Core", "Razor / .NET MAUI", "SQL Server", "IIS"],
  },
  {
    number: "02 / PRODUCT",
    title: "Next.js",
    description: "Useful web interfaces that connect cleanly to the systems behind them.",
    tools: ["Next.js / React", "API integration", "SSR / SEO", "Tailwind CSS"],
  },
  {
    number: "03 / DATA",
    title: "Python",
    description: "Data collection and transformation services that make information usable.",
    tools: ["Python / Flask", "Data pipelines", "PostgreSQL", "TimescaleDB"],
  },
  {
    number: "04 / SERVICES",
    title: "PHP / Laravel",
    description: "Reliable APIs and background work for data-intensive products.",
    tools: ["PHP / Laravel", "API development", "Redis", "Job queues"],
  },
];

export const additionalSkills = [
  "Vue.js", "NestJS", "WebSocket / Socket.IO", "Kafka", "MySQL",
  "MongoDB", "Oracle DB", "Docker / Linux", "Nginx", "Rust",
  "DevExpress", "MUI", "Bootstrap", "Flexcel", "JWT",
];

export const career = [
  {
    slug: "freelance",
    locationId: "unspecified",
    period: "2021 — 2023",
    role: "Independent Developer",
    organization: "Freelance",
    domain: "INDEPENDENT / WEB",
    summary: "Web products, dashboards and backend services for independent clients.",
    context: "Worked directly with clients to deliver SEO-focused websites, storefronts and dashboards alongside backend services.",
    contributions: [
      "Built web interfaces with Next.js and server-side rendering.",
      "Created data processing and API services with Flask and NestJS.",
      "Deployed services with Docker and maintained projects on VPS infrastructure.",
    ],
    technologies: ["Next.js", "Flask", "NestJS", "PostgreSQL", "Docker"],
    demo: "https://www.phatdatprecision.com/",
  },
  {
    slug: "vietsens",
    locationId: "ha-noi",
    period: "2023 — 2025",
    role: "C# Developer",
    organization: "Vietsens",
    domain: "HEALTHCARE / HIS & LIS",
    summary: "Hospital software, backend services and integrations with existing healthcare systems.",
    context: "Contributed to C#/.NET systems for hospitals with demanding operational workflows and existing HIS/LIS integrations.",
    contributions: [
      "Developed backend services in C#/.NET for healthcare workflows.",
      "Integrated services with HIS/LIS systems and existing hospital processes.",
      "Built reporting dashboards with DevExpress and Oracle, and supported production monitoring.",
    ],
    technologies: ["C#", ".NET", "Oracle", "DevExpress", "HIS / LIS"],
  },
  {
    slug: "trinity",
    locationId: "ho-chi-minh",
    period: "2025 — 2026",
    role: "Backend & Frontend Developer",
    organization: "Trinity Net Technology",
    domain: "FINTECH / REAL-TIME",
    summary: "Real-time trading platform, market data services and customer-facing web applications.",
    context: "Worked with a backend team on a stock trading platform handling market data for thousands of symbols.",
    contributions: [
      "Developed Laravel APIs and processing pipelines for stock trading data.",
      "Built Flask and NestJS services to collect, normalize and persist market prices.",
      "Aggregated tick data into candlesticks with PostgreSQL / TimescaleDB and integrated real-time Vue.js dashboards.",
    ],
    technologies: ["PHP / Laravel", "Python / Flask", "NestJS", "PostgreSQL / TimescaleDB", "WebSocket"],
  },
  {
    slug: "luvina",
    locationId: "da-nang",
    period: "2026 — NOW",
    role: "Fullstack C# Developer",
    organization: "Luvina Software",
    domain: "ENTERPRISE / ERP",
    summary: "A studio ERP connecting photo bookings, event tickets and handmade product sales across multiple partners.",
    context: "Developing an ERP for a photo studio whose operations span shoot scheduling, event ticketing and handmade product sales for a Japanese client.",
    contributions: [
      "Build booking, ticketing and product sales workflows in one enterprise system.",
      "Implement role-based permissions for different operational responsibilities.",
      "Support multiple partners, each with its own provider to manage data separately.",
      "Own requirements analysis, database design, interface flows, testing and deployment.",
    ],
    technologies: ["C#", "ASP.NET Core", "Razor", ".NET MAUI", "SQL Server", "IIS"],
  },
];

// Added 2026-09-23: CV-confirmed cities and illustrative distances for roadmap scenery and signs; freelance has no city in the CV.
export const careerLocations: Record<string, { name: string; signName: string; landmark: string }> = {
  "da-nang": { name: "Đà Nẵng", signName: "ĐÀ NẴNG", landmark: "Cầu Rồng · Sông Hàn" },
  "ho-chi-minh": { name: "TP. Hồ Chí Minh", signName: "TP.HCM", landmark: "Chợ Bến Thành · Bitexco" },
  "ha-noi": { name: "Hà Nội", signName: "HÀ NỘI", landmark: "Tháp Rùa · Hồ Hoàn Kiếm" },
  unspecified: { name: "Location not listed", signName: "INDEPENDENT", landmark: "Independent projects" },
};

export const careerRouteDistances: Record<string, number> = {
  "da-nang:ho-chi-minh": 1000,
  "ha-noi:ho-chi-minh": 1700,
  "da-nang:ha-noi": 760,
};
