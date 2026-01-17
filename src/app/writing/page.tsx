import { getAllPosts, getAllCategories } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import Link from 'next/link';

export const metadata = {
  title: 'Writing',
};

export default function WritingPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-medium mb-12">Writing</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
        <div className="space-y-12">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-muted-foreground">
              No posts yet. Add MDX files to{' '}
              <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                src/blog/
              </code>{' '}
              to get started.
            </p>
          )}
        </div>

        {categories.length > 0 && (
          <aside>
            <h2 className="font-medium mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/writing?category=${cat.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
