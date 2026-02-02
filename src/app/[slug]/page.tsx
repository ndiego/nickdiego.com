import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/components/ui/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import { remarkGitHubAlerts } from "@/lib/remark-github-alerts";
import { rehypeRelativeImages } from "@/lib/rehype-relative-images";
import { getMDXComponents } from "../../../mdx-components";
import { siteConfig } from "@/lib/site";
import { generateArticleJsonLd } from "@/lib/metadata";
import { getCategorySlug } from "@/lib/categories";
import { dateFormatter } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/${slug}`;
  const ogImage = post.meta.featuredImage
    ? post.meta.featuredImage
    : `${siteConfig.url}/api/og?title=${encodeURIComponent(post.meta.title)}`;

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url,
      type: "article",
      publishedTime: post.meta.date,
      authors: [siteConfig.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const date = dateFormatter.format(new Date(post.meta.date));

  const jsonLd = generateArticleJsonLd({
    title: post.meta.title,
    description: post.meta.excerpt,
    path: `/${slug}`,
    publishedTime: post.meta.date,
    image: post.meta.featuredImage,
  });

  return (
    <>
      <link
        rel="alternate"
        type="text/markdown"
        href={`${siteConfig.url}/${slug}.md`}
        title={post.meta.title}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-2xl mx-auto px-6 py-6 md:py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-medium mb-2 text-balance">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-3">
            <time
              dateTime={post.meta.date}
              className="text-muted-foreground text-sm"
            >
              {date}
            </time>
            {post.meta.draft && (
              <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded">
                Draft
              </span>
            )}
          </div>
        </header>

        <div>
          <MDXRemote
            source={post.content}
            components={getMDXComponents(
              {},
              { imageBasePath: post.imageBasePath },
            )}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGitHubAlerts],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                      properties: {
                        className: ["heading-anchor"],
                      },
                    },
                  ],
                  rehypeMdxCodeProps,
                  [rehypeRelativeImages, { imageBasePath: post.imageBasePath }],
                ],
              },
            }}
          />
        </div>

        {post.meta.categories.length > 0 && (
          <footer className="mt-12">
            <div className="flex flex-wrap gap-2">
              {post.meta.categories.map((category: string) => (
                <Link
                  key={category}
                  href={`/writing/category/${getCategorySlug(category)}`}
                  variant="unstyled"
                  className="px-3 py-1.5 text-sm border border-border rounded-full text-foreground hover:bg-neutral-50 dark:hover:bg-muted/50 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </footer>
        )}
      </article>
    </>
  );
}
