import Link from "next/link";
import { getCategorySlug } from "@/lib/categories";

interface CategoryNavProps {
  categories: string[];
  desktopSidebar?: boolean;
}

export function CategoryNav({ categories, desktopSidebar }: CategoryNavProps) {
  if (categories.length === 0) return null;

  // Desktop sticky sidebar (absolutely positioned relative to page container)
  if (desktopSidebar) {
    return (
      <div className="hidden xl:block absolute top-12 bottom-0 left-[calc(50%+336px)]">
        <aside className="sticky top-18 mt-1 pl-12">
          <h2 className="font-medium mb-4 text-sm">Categories</h2>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/writing/category/${getCategorySlug(cat)}`}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }

  // Mobile badges
  return (
    <div className="xl:hidden mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/writing/category/${getCategorySlug(cat)}`}
            className="px-3 py-1.5 text-sm border border-border rounded-full text-muted-foreground hover:bg-muted/50 transition-colors"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
