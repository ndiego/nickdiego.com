import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Twitterbot",
        allow: "/api/og",
      },
      {
        userAgent: "*",
        allow: ["/", "/api/og"],
        disallow: "/api/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
