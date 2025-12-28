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
  title: "Do Tuan Thinh - Fullstack Developer (Backend-Oriented) Portfolio",
  description: "Fullstack Developer with 4 years of experience delivering backend-driven web and trading systems. Specializing in API development, data processing pipelines, and real-time services using NodeJS, Python, PHP/Laravel, NestJS, and C#.",
  keywords: [
    'backend developer',
    'fullstack developer',
    'software engineer',
    'portfolio',
    'web development',
    'API development',
    'real-time systems',
    'Node.js',
    'Python',
    'PHP',
    'Laravel',
    'NestJS',
    'C#',
    'microservices',
    'trading systems',
    'data processing',
    'Vietnamese developer',
    'Ho Chi Minh City'
  ],
  authors: [{ name: 'Do Tuan Thinh' }],
  creator: 'Do Tuan Thinh',
  publisher: 'Do Tuan Thinh',
  metadataBase: new URL("https://dotuanthinh.id.vn"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotuanthinh.id.vn",
    title: "Do Tuan Thinh - Fullstack Developer Portfolio",
    description: "Explore my portfolio showcasing expertise in backend and fullstack development with modern technologies.",
    siteName: "Do Tuan Thinh Portfolio",
    images: [
      {
        url: "/avt.jpg",
        width: 1200,
        height: 630,
        alt: 'Do Tuan Thinh - Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do Tuan Thinh - Fullstack Developer Portfolio',
    description: 'Fullstack Developer specializing in backend-driven systems and real-time applications.',
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
    "jobTitle": "Fullstack Developer (Backend-Oriented)",
    "description": "Fullstack Developer with 4 years of experience delivering backend-driven web and trading systems.",
    "url": "https://dotuanthinh.id.vn",
    "sameAs": [
      "https://github.com/tuanthinh16",
      "https://linkedin.com/in/tuanthinh16"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    },
    "knowsAbout": [
      "Backend Development",
      "Fullstack Development",
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "C#",
      ".NET",
      "Microservices",
      "Real-time Systems",
      "API Development"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
