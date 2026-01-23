import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import Image from "next/image";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12 space-y-16 md:space-y-24">
      <section className="flex flex-col sm:flex-row gap-8 items-center">
        <div>
          <h1 className="text-4xl font-medium mb-4">Hi there</h1>
          <p className="text-copy leading-relaxed">
            I&apos;m Nick—a Product Marketing Manager at Automattic, WordPress
            Core contributor, and hobby web developer. This site&apos;s
            dedicated to my current WordPress projects and explorations into
            related technologies. Have a look around.
          </p>
        </div>
        <div className="flex hidden sm:block flex-shrink-0">
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
          <div className="space-y-8 mb-8">
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
          <Link
            href="/writing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
      </section>
    </div>
  );
}
