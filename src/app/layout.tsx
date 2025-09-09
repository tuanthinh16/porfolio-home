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
  title: "John Smith - Senior Backend Developer | Portfolio",
  description: "Passionate backend developer with 5+ years of experience in designing and implementing high-performance, scalable server-side applications. Specialized in microservices architecture, cloud technologies, and database optimization.",
  keywords: [
    "backend developer",
    "software engineer",
    "Node.js",
    "Python",
    "microservices",
    "cloud architecture",
    "API development",
    "database optimization",
    "DevOps",
    "portfolio"
  ],
  authors: [{ name: "John Smith" }],
  creator: "John Smith",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "John Smith - Senior Backend Developer",
    description: "Passionate backend developer specializing in scalable server-side applications and microservices architecture.",
    siteName: "John Smith Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Smith - Senior Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Smith - Senior Backend Developer",
    description: "Passionate backend developer specializing in scalable server-side applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
