import { Link } from "@/components/ui/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import Image from "next/image";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12 space-y-16 md:space-y-24">
      <section className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium">Hi there</h1>
          <p className="text-copy leading-relaxed">
            I&apos;m Nick. I build things for the web and explore what&apos;s
            possible with AI. I work on the Growth &amp; Data team at{" "}
            <Link href="https://automattic.com">Automattic</Link>, contribute to
            WordPress, and build{" "}
            <Link href="https://spellbinder.gg">Spellbinder</Link> on the side.
          </p>
          <p className="text-copy leading-relaxed">
            This site is home to my projects, experiments, and updates along the
            way. Reach out at{" "}
            <Link href="https://x.com/nickmdiego">@nickmdiego</Link>.
          </p>
        </div>
        <div className="hidden sm:block flex-shrink-0">
          <Image
            src="/images/avatar.png"
            alt="Nick Diego"
            width={156}
            height={156}
            className="rounded-full"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-6">Latest</h2>

        {posts.length > 0 ? (
          <div className="space-y-6 sm:space-y-8 mb-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-copy mb-8">
            No posts yet. Add MDX files to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded-md">
              src/blog/
            </code>{" "}
            to get started.
          </p>
        )}

        <div className="flex justify-end">
          <Link href="/writing" variant="muted" className="text-sm">
            View all →
          </Link>
        </div>
      </section>
    </div>
  );
}
