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
  title: "Do Tuan Thinh - C# Fullstack Developer | Enterprise ERP",
  description: "Do Tuan Thinh is a C# fullstack developer focused on enterprise ERP workflows, healthcare integrations and reliable business software.",
  keywords: [
    'enterprise ERP',
    'C# fullstack developer',
    'business software',
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
    'Da Nang'
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
    description: "Enterprise ERP solutions and reliable business software built by a C# fullstack developer.",
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
    description: 'C# fullstack developer building enterprise ERP and dependable business software.',
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
    "jobTitle": "C# Fullstack Developer",
    "description": "Fullstack developer focused on enterprise ERP, healthcare integrations and reliable business software.",
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
      "Enterprise ERP",
      "Business Operations",
      "C#",
      ".NET",
      "Next.js",
      "Backend Development",
      "Fullstack Development",
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "Microservices",
      "Real-time Systems",
      "API Development"
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
