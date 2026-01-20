import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import {
  getCategoryFromSlug,
  getCategorySlug,
  categoryMeta,
} from "@/lib/categories";
import { PostCard } from "@/components/PostCard";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: getCategorySlug(cat) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = getCategoryFromSlug(slug, categories);

  if (!category) return {};

  const description =
    categoryMeta[category]?.description ?? `Posts about ${category}`;

  return {
    title: category,
    description,
    alternates: {
      canonical: `${siteConfig.url}/writing/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = getCategoryFromSlug(slug, categories);

  if (!category) notFound();

  const posts = getPostsByCategory(category);
  const description = categoryMeta[category]?.description;

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-medium">{category}</h1>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← All posts
        </Link>
      </div>

      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-muted-foreground">
            No posts in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
