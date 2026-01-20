'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';
import { getCategorySlug } from '@/lib/categories';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export function PostCard({ post }: { post: PostMeta }) {
  const router = useRouter();
  const date = dateFormatter.format(new Date(post.date));
  const postUrl = `/${post.slug}`;

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on a link
    if ((e.target as HTMLElement).closest('a')) return;

    // Support cmd/ctrl+click to open in new tab
    if (e.metaKey || e.ctrlKey) {
      window.open(postUrl, '_blank');
    } else {
      router.push(postUrl);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className="rounded-md border border-border p-6 transition-colors hover:bg-muted/50 cursor-pointer"
    >
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
        <div className="flex items-center">
          {post.categories.map((cat, i) => (
            <span key={cat}>
              <Link
                href={`/writing/category/${getCategorySlug(cat)}`}
                className="hover:text-foreground transition-colors"
              >
                {cat}
              </Link>
              {i < post.categories.length - 1 && (
                <span className="mx-2">·</span>
              )}
            </span>
          ))}
        </div>
        <time dateTime={post.date}>{date}</time>
      </div>

      <h2 className="text-xl font-medium mb-3 text-balance">
        <Link href={postUrl} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      <p className="text-sm text-copy leading-relaxed">
        {post.excerpt}
      </p>
    </article>
  );
}
