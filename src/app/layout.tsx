import type { Metadata } from "next";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";
import ThemeProvider from "@/components/ThemeProvider";
import { Inter } from "next/font/google";

import { SITE_URL, SITE_NAME } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Portfolio of Omar Ayman Allam, a Junior Full-Stack .NET Developer specializing in ASP.NET MVC/Core, React, and SQL Server.",
  keywords: ["Omar Ayman", "Refay", ".NET Developer", "Full Stack", "React", "ASP.NET Core", "Portfolio"],
  authors: [{ name: "Omar Ayman", url: SITE_URL }],
  creator: "Omar Ayman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: "Junior .NET Developer building scalable backends and clean frontends.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/OG.jpg", // Must be in public/OG.jpg
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Junior .NET Developer building scalable backends and clean frontends.",
    images: ["/OG.jpg"],
    creator: "@refa3ydev", // Replace if known, otherwise generic or omit
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
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // If exists, otherwise omit or map to favicon
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Inline script to set dark class before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-paper text-ink antialiased`}>
        <ThemeProvider>
          <InitialLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
