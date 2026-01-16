import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import { getMDXComponents } from '../../../../mdx-components';
import { siteConfig } from '@/lib/site';
import { generateArticleJsonLd } from '@/lib/metadata';

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

  const url = `${siteConfig.url}/posts/${slug}`;
  const ogImage = post.meta.featuredImage
    ? post.meta.featuredImage
    : `${siteConfig.url}/api/og?title=${encodeURIComponent(post.meta.title)}&subtitle=${encodeURIComponent(post.meta.excerpt)}`;

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
      type: 'article',
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
      card: 'summary_large_image',
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

  const date = new Date(post.meta.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const jsonLd = generateArticleJsonLd({
    title: post.meta.title,
    description: post.meta.excerpt,
    path: `/posts/${slug}`,
    publishedTime: post.meta.date,
    image: post.meta.featuredImage,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-content mx-auto px-6 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            {post.meta.categories.length > 0 && (
              <>
                {post.meta.categories.join(', ')}
                <span className="text-border">·</span>
              </>
            )}
            <time dateTime={post.meta.date}>{date}</time>
            <span className="text-border">·</span>
            <span>{post.meta.readingTime}</span>
          </div>
          <h1 className="text-3xl font-medium">{post.meta.title}</h1>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={getMDXComponents({})}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: 'wrap',
                      properties: {
                        className: ['heading-anchor'],
                      },
                    },
                  ],
                  rehypeMdxCodeProps,
                ],
              },
            }}
          />
        </div>
      </article>
    </>
  );
}
