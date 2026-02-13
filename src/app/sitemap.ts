import type { MetadataRoute } from "next";
import { headers } from "next/headers";

function getBaseUrl() {
    const h = headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();
    const now = new Date();

    const paths = ["/en", "/en/projects", "/ar", "/ar/projects"];

    return paths.map((p) => ({
        url: `${baseUrl}${p}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: p === "/en" || p === "/ar" ? 1 : 0.8,
    }));
}
