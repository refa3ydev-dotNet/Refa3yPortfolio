import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes = [
        "",
        "/projects",
        // Add more static routes here if they exist (e.g., /about, /contact)
        // Profile nav has anchors mostly, but /projects is a real route.
    ];

    const routes = baseRoutes.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // If implementing dynamic project details in the future:
    // const projectRoutes = profile.projects.map((project) => ({
    //     url: `${SITE_URL}/projects/${project.slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: "weekly" as const,
    //     priority: 0.7,
    // }));

    return [...routes];
}
