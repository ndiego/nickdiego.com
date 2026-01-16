import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export function PostCard({ post }: { post: PostMeta }) {
  const date = dateFormatter.format(new Date(post.date));

  return (
    <article className="group">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        {post.categories.map((cat, i) => (
          <span key={cat}>
            <Link
              href={`/posts?category=${cat.toLowerCase()}`}
              className="hover:text-foreground transition-colors"
            >
              {cat}
            </Link>
            {i < post.categories.length - 1 && ', '}
          </span>
        ))}
        {post.categories.length > 0 && (
          <span className="text-border">·</span>
        )}
        <time dateTime={post.date}>{date}</time>
        <span className="text-border">·</span>
        <span>{post.readingTime}</span>
      </div>

      <h2 className="text-xl font-medium mb-2">
        <Link
          href={`/posts/${post.slug}`}
          className="group-hover:text-muted-foreground transition-colors"
        >
          {post.title}
        </Link>
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        {post.excerpt}
      </p>
    </article>
  );
}
