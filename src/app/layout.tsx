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
  title: "Tuan Thinh Do - Fullstack Developer | Portfolio",
  description: "Passionate fullstack developer with 3+ years of experience in designing and implementing high-performance, scalable server-side applications. Specialized in microservices architecture, cloud technologies, and database optimization.",
  keywords: [
    "fullstack developer",
    "software engineer",
    "Nextjs",
    "Python",
    "PHP",
    "Rust",
    "C#",
    ".NET",
    "microservices",
    "API development",
    "database optimization",
    "portfolio"
  ],
  authors: [{ name: "Tuan Thinh Do" }],
  creator: "Tuan Thinh Do",
  metadataBase: new URL("https://dotuanthinh.id.vn"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotuanthinh.id.vn",
    title: "Tuan Thinh Do - Fullstack Developer",
    description: "Passionate fullstack developer specializing in scalable server-side applications and microservices architecture.",
    siteName: "Tuan Thinh Do Portfolio",
    images: [
      {
        url: "/avt.jpg",
        width: 1200,
        height: 630,
        alt: "Tuan Thinh Do - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuan Thinh Do - Fullstack Developer",
    description: "Passionate fullstack developer specializing in scalable server-side applications.",
    images: ["/avt.jpg"],
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
