import { cache } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { siteConfig } from "./site";

const blogDirectory = path.join(process.cwd(), "src/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  readingTime: string;
  featuredImage?: string;
  draft?: boolean;
}

function scanDirectory(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...scanDirectory(fullPath));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Cached per-request to avoid repeated file system scans
const getMdxFilesRecursively = cache((dir: string): string[] => {
  return scanDirectory(dir);
});

/**
 * Extract slug from MDX file path.
 * Handles both formats:
 * - src/blog/2024/my-post.mdx -> "my-post"
 * - src/blog/2024/my-post/index.mdx -> "my-post"
 */
function getSlugFromPath(fullPath: string): string {
  const fileName = path.basename(fullPath, ".mdx");
  if (fileName === "index") {
    // For folder-based posts, use the parent directory name as slug
    return path.basename(path.dirname(fullPath));
  }
  return fileName;
}

/**
 * Get the image base path for a post (used for relative image resolution).
 * Returns the path segment after src/blog/ for folder-based posts.
 * - src/blog/2024/my-post/index.mdx -> "2024/my-post"
 * - src/blog/2024/my-post.mdx -> null (no colocated images)
 */
function getImageBasePath(fullPath: string): string | null {
  const fileName = path.basename(fullPath, ".mdx");
  if (fileName === "index") {
    // Extract path relative to blogDirectory
    const dirPath = path.dirname(fullPath);
    const relativePath = path.relative(blogDirectory, dirPath);
    return relativePath;
  }
  return null;
}

/**
 * Resolve a featured image path to an absolute URL.
 * - Relative paths (./cover.png) -> full URL via blog-images API
 * - Absolute URLs (https://...) -> returned as-is
 * - Undefined -> undefined
 */
function resolveFeaturedImage(
  featuredImage: string | undefined,
  imageBasePath: string | null,
): string | undefined {
  if (!featuredImage) return undefined;

  // Already an absolute URL
  if (
    featuredImage.startsWith("http://") ||
    featuredImage.startsWith("https://")
  ) {
    return featuredImage;
  }

  // Relative path - resolve via blog-images API
  if (featuredImage.startsWith("./") && imageBasePath) {
    const filename = featuredImage.slice(2); // Remove "./"
    return `${siteConfig.url}/api/blog-images/${imageBasePath}/${filename}`;
  }

  return undefined;
}

/**
 * Get all posts with request-level deduplication via React.cache().
 * Categories are pre-sorted alphabetically.
 */
export const getAllPosts = cache((): PostMeta[] => {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);

  return mdxFiles
    .map((fullPath) => {
      const slug = getSlugFromPath(fullPath);
      const imageBasePath = getImageBasePath(fullPath);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      // Pre-sort categories alphabetically
      const categories = (data.categories ?? [])
        .slice()
        .sort((a: string, b: string) => a.localeCompare(b));

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? new Date().toISOString(),
        excerpt: data.excerpt ?? "",
        categories,
        readingTime: stats.text,
        featuredImage: resolveFeaturedImage(data.featuredImage, imageBasePath),
        draft: data.draft ?? false,
      };
    })
    .filter((post) => {
      // Show drafts in development, hide in production
      if (process.env.NODE_ENV === "production" && post.draft) {
        return false;
      }
      return true;
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
});

/**
 * Get a single post by slug with request-level deduplication via React.cache().
 * Categories are pre-sorted alphabetically.
 */
export const getPostBySlug = cache((slug: string) => {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);
  const fullPath = mdxFiles.find((file) => getSlugFromPath(file) === slug);

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Block access to drafts in production
  if (process.env.NODE_ENV === "production" && data.draft) {
    return null;
  }

  const stats = readingTime(content);
  const imageBasePath = getImageBasePath(fullPath);

  // Pre-sort categories alphabetically
  const categories = (data.categories ?? [])
    .slice()
    .sort((a: string, b: string) => a.localeCompare(b));

  return {
    meta: {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? "",
      categories,
      readingTime: stats.text,
      featuredImage: resolveFeaturedImage(data.featuredImage, imageBasePath),
      draft: data.draft ?? false,
    },
    content,
    imageBasePath,
  };
});

/**
 * Get all unique categories with request-level deduplication via React.cache().
 */
export const getAllCategories = cache((): string[] => {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach((post) =>
    post.categories.forEach((cat) => categories.add(cat)),
  );
  return Array.from(categories).sort();
});

/**
 * Get posts by category with request-level deduplication via React.cache().
 */
export const getPostsByCategory = cache((category: string): PostMeta[] => {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()),
  );
});

/**
 * Convert MDX content to plain Markdown by transforming JSX components
 * to their Markdown equivalents.
 */
function convertMdxToMarkdown(
  content: string,
  imageBasePath: string | null,
): string {
  let result = content;

  // Image: <Image src="./foo.png" alt="description" ... /> → ![description](url)
  result = result.replace(
    /<Image\s+([^>]*?)\/>/g,
    (_match: string, attrs: string) => {
      const srcMatch = attrs.match(/src=["']([^"']+)["']/);
      const altMatch = attrs.match(/alt=["']([^"']+)["']/);
      let src = srcMatch?.[1] ?? "";
      const alt = altMatch?.[1] ?? "";

      // Resolve relative paths
      if (src.startsWith("./") && imageBasePath) {
        src = `${siteConfig.url}/api/blog-images/${imageBasePath}/${src.slice(2)}`;
      }

      return `![${alt}](${src})`;
    },
  );

  // Video: <Video id="..." /> → [Watch video](cloudflare-url)
  result = result.replace(/<Video\s+([^>]*?)\/>/g, (_match: string, attrs: string) => {
    const idMatch = attrs.match(/id=["']([^"']+)["']/);
    const id = idMatch?.[1] ?? "";
    return `[Watch video](https://cloudflarestream.com/${id})`;
  });

  // YouTube: <YouTube id="..." /> → [Watch on YouTube](youtube-url)
  result = result.replace(/<YouTube\s+([^>]*?)\/>/g, (_match: string, attrs: string) => {
    const idMatch = attrs.match(/id=["']([^"']+)["']/);
    const id = idMatch?.[1] ?? "";
    return `[Watch on YouTube](https://www.youtube.com/watch?v=${id})`;
  });

  // Tweet: <Tweet id="..." /> → [View on X](x.com-url)
  result = result.replace(/<Tweet\s+([^>]*?)\/>/g, (_match: string, attrs: string) => {
    const idMatch = attrs.match(/id=["']([^"']+)["']/);
    const id = idMatch?.[1] ?? "";
    return `[View on X](https://x.com/i/status/${id})`;
  });

  // GHRepoCard: <GHRepoCard repo="..." title="..." description="..." /> → **[title](url)** - description
  result = result.replace(
    /<GHRepoCard\s+([^>]*?)\/>/g,
    (_match: string, attrs: string) => {
      const repoMatch = attrs.match(/repo=["']([^"']+)["']/);
      const titleMatch = attrs.match(/title=["']([^"']+)["']/);
      const descMatch = attrs.match(/description=["']([^"']+)["']/);
      const repo = repoMatch?.[1] ?? "";
      const title = titleMatch?.[1] ?? repo;
      const description = descMatch?.[1] ?? "";

      const link = `**[${title}](https://github.com/${repo})**`;
      return description ? `${link} - ${description}` : link;
    },
  );

  // WPPluginCard: <WPPluginCard slug="..." title="..." description="..." /> → **[title](url)** - description
  result = result.replace(
    /<WPPluginCard\s+([^>]*?)\/>/g,
    (_match: string, attrs: string) => {
      const slugMatch = attrs.match(/slug=["']([^"']+)["']/);
      const titleMatch = attrs.match(/title=["']([^"']+)["']/);
      const descMatch = attrs.match(/description=["']([^"']+)["']/);
      const slug = slugMatch?.[1] ?? "";
      const title = titleMatch?.[1] ?? slug;
      const description = descMatch?.[1] ?? "";

      const link = `**[${title}](https://wordpress.org/plugins/${slug}/)**`;
      return description ? `${link} - ${description}` : link;
    },
  );

  // LinkButton: <LinkButton href="..." label="..." /> → [label](href)
  result = result.replace(
    /<LinkButton\s+([^>]*?)\/>/g,
    (_match: string, attrs: string) => {
      const hrefMatch = attrs.match(/href=["']([^"']+)["']/);
      const labelMatch = attrs.match(/label=["']([^"']+)["']/);
      const href = hrefMatch?.[1] ?? "";
      const label = labelMatch?.[1] ?? href;
      return `[${label}](${href})`;
    },
  );

  // Notice: <Notice type="...">content</Notice> → > **Type:** content
  result = result.replace(
    /<Notice(?:\s+type=["']([^"']+)["'])?\s*>([\s\S]*?)<\/Notice>/g,
    (_match: string, type: string | undefined, innerContent: string) => {
      const noticeType = type ?? "note";
      const label =
        noticeType.charAt(0).toUpperCase() + noticeType.slice(1).toLowerCase();
      // Convert inner content to blockquote lines
      const lines = innerContent.trim().split("\n");
      return lines.map((line, i) => (i === 0 ? `> **${label}:** ${line}` : `> ${line}`)).join("\n");
    },
  );

  return result;
}

export const getPostMarkdown = cache((slug: string): string | null => {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);
  const fullPath = mdxFiles.find((file) => getSlugFromPath(file) === slug);

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const imageBasePath = getImageBasePath(fullPath);

  // Convert MDX components to plain Markdown
  const markdownContent = convertMdxToMarkdown(content, imageBasePath);

  // Build YAML frontmatter
  const dateStr = data.date
    ? new Date(data.date).toISOString()
    : new Date().toISOString();

  const frontmatter: string[] = ["---"];
  frontmatter.push(
    `title: '${(data.title ?? "Untitled").replace(/'/g, "''")}'`,
  );
  frontmatter.push(`date: '${dateStr}'`);
  frontmatter.push(`author: Nick Diego`);
  if (data.excerpt) {
    frontmatter.push(`summary: '${data.excerpt.replace(/'/g, "''")}'`);
  }
  if (data.featuredImage) {
    frontmatter.push(`image: ${data.featuredImage}`);
  }
  if (data.categories?.length) {
    frontmatter.push(`tags:`);
    for (const cat of data.categories) {
      frontmatter.push(`  - '${cat.replace(/'/g, "''")}'`);
    }
  }
  frontmatter.push(`url: /${slug}`);
  frontmatter.push("---");

  return frontmatter.join("\n") + "\n\n" + markdownContent.trim();
});
