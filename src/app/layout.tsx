import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Refay — Junior .NET Developer Portfolio",
  description:
    "Portfolio of Omar Ayman (Refay) — Junior Full-Stack .NET Developer specializing in ASP.NET MVC/Core, React, SQL Server, and 3-Tier Architecture.",
  keywords: [
    "Omar Ayman",
    "Refay",
    ".NET Developer",
    "ASP.NET",
    "React",
    "SQL Server",
    "Portfolio",
    "Junior Developer",
    "Full-Stack",
  ],
  authors: [{ name: "Omar Ayman" }],
  openGraph: {
    title: "Refay — Junior .NET Developer Portfolio",
    description:
      "Junior .NET Developer building scalable backends and clean frontends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
      <body className="bg-paper text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
