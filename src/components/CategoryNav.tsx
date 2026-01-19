'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { getCategorySlug } from '@/lib/categories';

interface CategoryNavProps {
  categories: string[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (categories.length === 0) return null;

  return (
    <>
      {/* Mobile dropdown */}
      <div className="xl:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Categories</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="mt-3 flex flex-wrap gap-2">
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
        )}
      </div>

      {/* Desktop floating sidebar */}
      <aside className="hidden xl:block fixed top-32 left-[calc(50%+384px)] w-48">
        <h2 className="font-medium mb-4 text-sm">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/writing/category/${getCategorySlug(cat)}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
