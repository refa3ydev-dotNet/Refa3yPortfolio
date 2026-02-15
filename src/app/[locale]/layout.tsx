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
  const title = isAr ? `${dict.fullName} | ${dict.title}` : `${dict.fullName} | ${dict.title}`;
  const description = dict.hero.subtitle;

  // Construct canonical URL:
  // If locale is default (en), canonical should be without locale prefix (root).
  // If locale is ar, canonical should be /ar
  const path = locale === "en" ? "/" : `/${locale}`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: isAr ? "/og-ar.jpg" : "/OG.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [isAr ? "/og-ar.jpg" : "/OG.jpg"],
    },
    alternates: {
      canonical: canonical,
      languages: {
        en: "/", // Point English to root
        ar: "/ar",
        "x-default": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
    }
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
