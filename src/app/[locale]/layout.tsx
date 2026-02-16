import type { Metadata } from "next";
import "../globals.css";
import InitialLoader from "@/components/InitialLoader";
import ThemeProvider from "@/components/ThemeProvider";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import { SITE_URL, SITE_NAME } from "@/lib/site";
import { locales, Locale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = messages[locale] || messages.en;
  const isAr = locale === "ar";

  const title = "Omar Ayman (Refay) | .NET Backend Developer";
  const description =
    "Junior .NET Developer (Omar Ayman / عمر ايمن) specializing in ASP.NET Core & React. Building scalable backend systems and clean architecture solutions.";

  // Construct canonical URL:
  const path = locale === "en" ? "/" : `/${locale}`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | .NET Backend Developer`,
    },
    description,
    keywords: [
      "Omar Ayman",
      "Omar Refay",
      "عمر ايمن",
      "عمر رفاعي",
      ".NET Developer",
      "Backend",
      "ASP.NET Core",
      "Egypt",
      "Full Stack",
    ],
    authors: [{ name: "Omar Ayman", url: SITE_URL }],
    creator: "Omar Ayman",
    publisher: "Omar Ayman",
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Omar Ayman (Refay) Portfolio",
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-card.png",
          width: 1200,
          height: 630,
          alt: "Omar Ayman (Refay) - .NET Developer - عمر ايمن",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-card.png"],
      creator: "@refa3ydev",
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    alternates: {
      canonical: canonical,
      languages: {
        en: "/",
        ar: "/ar",
        "x-default": "/",
      },
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
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const dict = messages[locale] || messages.en;
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Person Schema (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Ayman",
    alternateName: [
      "Omar Refay",
      "Omar Ayman Refay",
      "عمر ايمن",
      "عمر رفاعي",
      "عمر ايمن ويب ديفيلوبر",
      "عمر رفاعي دوت نت",
    ],
    jobTitle: "Full-Stack .NET Developer",
    url: "https://omarrefay.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/omar-ayman-refay/",
      "https://github.com/refa3ydev-dotNet",
      "https://www.facebook.com/omar.refa3y",
    ],
    knowsAbout: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "React",
      "Software Architecture",
    ],
    image: "https://omarrefay.vercel.app/og-card.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Egypt",
    },
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-paper text-ink antialiased`}>
        <ThemeProvider>
          <InitialLoader />
          <Navbar dict={dict} locale={locale} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
