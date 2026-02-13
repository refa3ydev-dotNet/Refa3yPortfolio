import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes = [
        "",
        "/projects",
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const route of baseRoutes) {
            sitemapEntries.push({
                url: `${SITE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: route === "" ? 1 : 0.8,
            });
        }
    }

    return sitemapEntries;
}
