import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { getCategorySlug } from "@/lib/categories";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function PostCard({ post }: { post: PostMeta }) {
  const date = dateFormatter.format(new Date(post.date));
  const postUrl = `/${post.slug}`;

  return (
    <article className="relative rounded-md border border-border p-6 transition-colors hover:bg-muted/50">
      <Link
        href={postUrl}
        className="absolute inset-0 z-0"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="relative z-10 space-y-4 pointer-events-none">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            {post.categories.map((cat, i) => (
                <span key={cat}>
                  <Link
                    href={`/writing/category/${getCategorySlug(cat)}`}
                    className="hover:text-foreground transition-colors pointer-events-auto"
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

        <h2 className="text-lg font-medium text-balance leading-tight max-w-[90%]">
          <Link href={postUrl} className="pointer-events-auto">
            {post.title}
          </Link>
        </h2>

        {post.excerpt && (
          <p className="text-sm text-copy leading-relaxed text-pretty">
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
