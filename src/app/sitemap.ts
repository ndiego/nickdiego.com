import { getAllPosts, getAllCategories } from "@/lib/posts";
import { getCategorySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${siteConfig.url}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryUrls = getAllCategories().map((category) => ({
    url: `${siteConfig.url}/writing/category/${getCategorySlug(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/writing", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/speaking", priority: 0.7, changeFrequency: "monthly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...staticPages, ...categoryUrls, ...postUrls];
}
