# Content Authoring

This guide covers the mechanics of writing blog posts with MDX: file structure, frontmatter, images, code blocks, and callouts.

For **how the writing should sound** (tone, structure, diction, and hard rules like never using em-dashes), use the [`voice` skill](../.claude/skills/voice/SKILL.md). Draft the words in Nick's voice first, then apply the mechanics below.

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

### Image Best Practices

Use the `<Image>` component for images in post content (see [components.md](./components.md#image) for all props).

- **Always pass `width` and `height`** matching the image's real pixel dimensions. This reserves layout space and prevents cumulative layout shift. Get the dimensions with:

  ```bash
  sips -g pixelWidth -g pixelHeight ./screenshot.png
  ```

- **Write meaningful `alt` text** describing what the image shows. Leave `alt=""` only for purely decorative images.
- **Colocate images** in the post's folder and reference them with `./`. Don't link to external image hosts for post content.
- Prefer optimized formats (`.webp`, or `.png`/`.jpg`) and reasonably sized source files. Blog images are served at their source resolution, so avoid dropping in an oversized export.

### Frontmatter Schema

```yaml
---
title: Post Title # sentence case; an optional "colon: subtitle" is fine
date: YYYY-MM-DD
excerpt: Short description # 1-2 complete sentences, in Nick's voice
categories:
  - Category # reuse existing categories where possible
featuredImage: ./cover.png # optional, used for OpenGraph/social sharing
draft: true # optional, hides the post outside development
---
```

Notes:

- **Reading time** is calculated automatically from the content. Don't add it to frontmatter.
- **Author** is always Nick Diego. There is no author field.
- **Categories** in use across the blog: Personal, Projects, Blocks, Extensibility, AI, Tutorials, Tools, Speaking. Prefer these over inventing new ones so the category pages stay meaningful.

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

**Important:** Do NOT use `<CodeBlock>` as a JSX component directly in MDX. The MDX compiler strips indentation from JSX expressions.

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

This syntax follows [GitHub's alert convention](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) and is easier to write than JSX. For more control, you can also use the `<Notice>` component directly. See [components.md](./components.md#notice).
