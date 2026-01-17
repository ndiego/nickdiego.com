import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const blogDirectory = path.join(process.cwd(), 'src/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  readingTime: string;
  featuredImage?: string;
}

function getMdxFilesRecursively(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFilesRecursively(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getAllPosts(): PostMeta[] {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);

  return mdxFiles
    .map((fullPath) => {
      const slug = path.basename(fullPath, '.mdx');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? new Date().toISOString(),
        excerpt: data.excerpt ?? '',
        categories: data.categories ?? [],
        readingTime: stats.text,
        featuredImage: data.featuredImage,
      };
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);
  const fullPath = mdxFiles.find((file) => path.basename(file, '.mdx') === slug);

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title ?? 'Untitled',
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? '',
      categories: data.categories ?? [],
      readingTime: stats.text,
      featuredImage: data.featuredImage,
    },
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach((post) => post.categories.forEach((cat) => categories.add(cat)));
  return Array.from(categories).sort();
}

export function getPostsByCategory(category: string): PostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
}

export function getPostMarkdown(slug: string): string | null {
  const mdxFiles = getMdxFilesRecursively(blogDirectory);
  const fullPath = mdxFiles.find((file) => path.basename(file, '.mdx') === slug);

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Build YAML frontmatter
  const dateStr = data.date
    ? new Date(data.date).toISOString()
    : new Date().toISOString();

  const frontmatter: string[] = ['---'];
  frontmatter.push(`title: '${(data.title ?? 'Untitled').replace(/'/g, "''")}'`);
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
  frontmatter.push('---');

  return frontmatter.join('\n') + '\n\n' + content.trim();
}
