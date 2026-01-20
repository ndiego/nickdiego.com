import { getAllPosts, getAllCategories } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { CategoryNav } from "@/components/CategoryNav";

export const metadata = {
  title: "Writing",
};

export default function WritingPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="relative">
      {/* Main content - centered */}
      <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
        <h1 className="text-3xl font-medium mb-12">Writing</h1>

        <CategoryNav categories={categories} />

        <div className="space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-muted-foreground">
              No posts yet. Add MDX files to{" "}
              <code className="text-sm bg-muted px-1.5 py-0.5 rounded-md">
                src/blog/
              </code>{" "}
              to get started.
            </p>
          )}
        </div>
      </div>

      {/* Desktop sidebar - positioned to the right of centered content */}
      <CategoryNav categories={categories} desktopSidebar />
    </div>
  );
}
