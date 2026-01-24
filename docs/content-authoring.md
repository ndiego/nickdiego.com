# Content Authoring

This guide covers writing blog posts and other content using MDX.

## Blog Posts

Blog posts are MDX files in `src/blog/`. Posts can be organized in two ways:

1. **Simple posts** (no images): `src/blog/2024/my-post.mdx`
2. **Posts with images** (folder structure): `src/blog/2024/my-post/index.mdx` with images alongside

For posts with images, colocate the images in the same folder:

```
src/blog/2024/my-post/
├── index.mdx
├── screenshot.png
└── diagram.jpg
```

Reference images using relative paths (e.g., `src="./screenshot.png"`).

### Frontmatter Schema

```yaml
---
title: Post Title
date: YYYY-MM-DD
excerpt: Short description
categories:
  - Category
featuredImage: ./cover.png # optional, used for OpenGraph/social sharing
---
```

### Featured Images

The `featuredImage` field sets the OpenGraph image used when sharing posts on social media. It supports:

- **Colocated images** (recommended): `featuredImage: ./cover.png` - relative path to an image in the same folder
- **External URLs**: `featuredImage: https://example.com/image.jpg` - absolute URL to any image

If no `featuredImage` is set, an OG image is auto-generated using the post title and excerpt.

For best results, use images sized **1200×630 pixels** (the standard OG image size).

### Draft Posts

To create a draft post that won't be published, add `draft: true` to the frontmatter:

```yaml
---
title: Work in Progress
date: 2025-01-15
excerpt: This post is still being written
draft: true
---
```

Draft posts are excluded from the blog listing and sitemap but can still be previewed directly by URL during development.

## MDX Features

MDX allows you to use React components directly in your markdown content. See [components.md](./components.md) for available components.

### Code Blocks

Always use fenced code blocks with metadata in the info string. This preserves indentation correctly:

```mdx
\`\`\`json filename="package.json"
{
"name": "my-app",
"scripts": {
"dev": "next dev"
}
}
\`\`\`
```

Available options in the info string:

- `filename="name.ext"` - Shows filename header
- `maxLines={8}` - Collapsible with expand button
- `showLineNumbers={false}` - Hides line numbers

**Important:** Do NOT use `<CodeBlock>` as a JSX component directly in MDX—the MDX compiler strips indentation from JSX expressions.

### Callouts

Use GitHub-style alerts for callouts. These automatically transform into `<Notice>` components:

```md
> [!NOTE]
> General information the reader should know.

> [!TIP]
> Helpful suggestions or best practices.

> [!IMPORTANT]
> Key information to highlight.

> [!WARNING]
> Potential issues to be aware of.

> [!CAUTION]
> Critical warnings about dangerous actions.
```

This syntax follows [GitHub's alert convention](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) and is easier to write than JSX. For more control, you can also use the `<Notice>` component directly—see [components.md](./components.md#notice).
