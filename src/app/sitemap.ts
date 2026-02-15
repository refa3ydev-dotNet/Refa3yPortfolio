import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const paths = ["/", "/projects", "/ar", "/ar/projects"];

    return paths.map((p) => ({
        url: `${SITE_URL}${p === "/" ? "" : p}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: p === "/" || p === "/ar" ? 1 : 0.8,
    }));
}
