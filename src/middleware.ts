import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. Skip static files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml" || // Keep sitemap.xml allowed
        (pathname.startsWith("/google") && pathname.endsWith(".html")) ||
        pathname.match(/\.(.*)$/)
    ) {
        return NextResponse.next();
    }

    // 2. Redirect /en to / (Permanent 308)
    if (pathname.startsWith("/en")) {
        const newPath = pathname.replace(/^\/en/, "") || "/";
        const url = req.nextUrl.clone();
        url.pathname = newPath;
        return NextResponse.redirect(url, 308);
    }

    // 3. Rewrite / (or non-locale paths) to /en (Internal)
    // If path starts with /ar, let it pass (it will be handled by [locale] automagically or we can rewrite if needed, 
    // but usually [locale] folder handles it if the URL matches).
    // EXCEPT: The file structure is app/[locale]/... so we MUST rewrite everything to include a locale internally.

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // If no locale in path, rewrite to default locale (en)
    // This makes "/" render "app/en/page.tsx" but URL remains "/"
    const locale = defaultLocale;
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
