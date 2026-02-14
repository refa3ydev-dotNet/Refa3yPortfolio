import { SITE_URL } from "@/lib/site";

export async function GET() {
    const urls = [
        `${SITE_URL}/en`,
        `${SITE_URL}/en/projects`,
        `${SITE_URL}/ar`,
        `${SITE_URL}/ar/projects`,
    ];

    const now = new Date().toISOString();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
            .map((url) => {
                return `
  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url.endsWith("/projects") ? "0.8" : "1.0"}</priority>
  </url>`;
            })
            .join("")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "no-store, max-age=0",
        },
    });
}
