import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Do Tuan Thinh - Fullstack Software Engineer | Web, Cloud & Real-Time Systems",
  description: "Do Tuan Thinh is a Fullstack Software Engineer specializing in modern web platforms, real-time data streaming, enterprise ERP workflows, and automated CI/CD with Vercel and GitHub Actions. Experienced across Next.js, C#/.NET Core, NestJS, Laravel, Python, TimescaleDB, and cloud deployments.",
  keywords: [
    // Fullstack Engineering & Modern Web (Freelance & Production)
    'Fullstack Software Engineer',
    'Fullstack Engineer',
    'Fullstack Developer',
    'software engineer',
    'backend developer',
    'Next.js fullstack',
    'Next.js',
    'React',
    'TypeScript',
    'SSR SEO',
    'RESTful API',
    'API development',
    'microservices',

    // Cloud, CI/CD & DevOps Automation
    'Vercel',
    'GitHub Actions',
    'CI/CD automation',
    'continuous integration',
    'automated deployment',
    'Docker',
    'Linux VPS',
    'Nginx',
    'cloud architecture',
    'freelance developer',
    'e-commerce development',

    // Enterprise ERP & C# .NET Systems (Luvina Software)
    'C# fullstack developer',
    'C# developer',
    'ASP.NET Core',
    '.NET MAUI',
    'Razor Pages',
    'enterprise ERP',
    'studio ERP',
    'business software',
    'SQL Server',
    'Microsoft SQL Server',
    'IIS',
    'role-based access control',
    'multi-partner architecture',
    'enterprise software architecture',

    // Healthcare IT & HIS/LIS Systems (Vietsens)
    'HIS LIS integration',
    'hospital information system',
    'healthcare IT',
    'healthcare developer',
    'hospital software integration',
    'Oracle DB',
    'DevExpress',
    'DevExpress reporting',
    'medical workflow systems',

    // Fintech & Real-Time Trading Systems (Trinity Net Technology)
    'real-time systems',
    'trading systems',
    'stock trading platform',
    'market data pipelines',
    'WebSocket',
    'Socket.IO',
    'TimescaleDB',
    'PostgreSQL TimescaleDB',
    'Redis',
    'Kafka',
    'Laravel',
    'PHP Laravel',
    'Python Flask',
    'NestJS',
    'candlestick data aggregation',
    'Vue.js',
    'JWT authentication',
    'MySQL',
    'MongoDB',
    'Rust',

    // Vietnamese localized search queries
    'Do Tuan Thinh',
    'Đỗ Tuấn Thịnh',
    'kỹ sư phần mềm fullstack',
    'lập trình viên fullstack',
    'lập trình viên C#',
    'lập trình viên .NET',
    'lập trình viên Next.js',
    'kỹ sư phần mềm',
    'phần mềm ERP doanh nghiệp',
    'tích hợp HIS LIS bệnh viện',
    'hệ thống chứng khoán realtime',
    'xử lý dữ liệu thị trường',
    'lập trình viên tự do',
    'freelancer IT Việt Nam',
    'lập trình viên Đà Nẵng',
    'Da Nang',
    'Đà Nẵng',
    'Vietnam developer'
  ],
  authors: [{ name: 'Do Tuan Thinh' }],
  creator: 'Do Tuan Thinh',
  publisher: 'Do Tuan Thinh',
  metadataBase: new URL("https://dotuanthinh.id.vn"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotuanthinh.id.vn",
    title: "Do Tuan Thinh - Fullstack Software Engineer | Web, Cloud & Real-Time Systems",
    description: "Fullstack Software Engineer architecting modern web platforms, automated CI/CD with Vercel and GitHub Actions, real-time trading pipelines, and enterprise ERP systems.",
    siteName: "Do Tuan Thinh Portfolio",
    images: [
      {
        url: "/avt.jpg",
        width: 1200,
        height: 630,
        alt: 'Do Tuan Thinh - Fullstack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do Tuan Thinh - Fullstack Software Engineer | Web & Cloud Systems',
    description: "Fullstack software engineer building high-performance web applications, automated CI/CD pipelines with Vercel and GitHub Actions, and enterprise software systems.",
    images: ['/avt.jpg'],
    creator: '@dotuanthinh16',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Do Tuan Thinh",
    "alternateName": "Đỗ Tuấn Thịnh",
    "jobTitle": "Fullstack Software Engineer · Web, Cloud & Real-time Systems",
    "description": "Fullstack Software Engineer specializing in modern web platforms, automated CI/CD pipelines with Vercel and GitHub Actions, real-time data streaming, and enterprise ERP systems.",
    "url": "https://dotuanthinh.id.vn",
    "sameAs": [
      "https://github.com/tuanthinh16",
      "https://linkedin.com/in/tuanthinh16"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Da Nang",
      "addressCountry": "Vietnam"
    },
    "knowsAbout": [
      "Fullstack Software Engineering",
      "Vercel",
      "GitHub Actions",
      "CI/CD Automation",
      "Next.js",
      "React",
      "TypeScript",
      "Vue.js",
      "C#",
      ".NET",
      "ASP.NET Core",
      ".NET MAUI",
      "Razor Pages",
      "SQL Server",
      "IIS",
      "Hospital Information Systems (HIS)",
      "Laboratory Information Systems (LIS)",
      "Healthcare Integrations",
      "Oracle DB",
      "DevExpress",
      "Fintech Platforms",
      "Real-time Trading Systems",
      "Market Data Pipelines",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "WebSocket",
      "Socket.IO",
      "Apache Kafka",
      "Python",
      "Flask",
      "PHP",
      "Laravel",
      "NestJS",
      "Microservices",
      "API Development",
      "Docker",
      "Linux",
      "Nginx",
      "Role-Based Access Control (RBAC)",
      "Cloud Architecture"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// Config added 2026-10-14: Config viewport va theme toi uu SEO mobile rendering theo kinh nghiem thuc te
export const viewport = {
  themeColor: "#0c1018",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};
