import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Skip internal files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".") // images, icons, robots.txt, sitemap.xml
    ) {
        return;
    }

    // Redirect to default locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /projects
    // The new URL is now /en/projects
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: match specific paths
    ],
};
