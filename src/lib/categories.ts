export const categoryMeta: Record<string, { description?: string }> = {
  // Add descriptions as needed, categories without entries just won't show one
};

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getCategoryFromSlug(
  slug: string,
  categories: string[],
): string | undefined {
  return categories.find((cat) => getCategorySlug(cat) === slug);
}
