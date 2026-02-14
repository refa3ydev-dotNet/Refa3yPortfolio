import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // allow static files & verification files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap-v2.xml" ||
        (pathname.startsWith("/google") && pathname.endsWith(".html")) ||
        pathname.match(/\.(.*)$/) // any file with extension (.png .jpg .svg .html ...)
    ) {
        return NextResponse.next();
    }

    // Redirect to default locale logic
    const locale = defaultLocale;
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
