# nickdiego.com

My personal website built with Next.js 16 and MDX. The source code is public so others can see how a modern blog with rich content authoring works in practice.

**Live site:** [nickdiego.com](https://nickdiego.com)

## What Makes This Interesting

The core of this site is a flexible MDX-based blog system. Posts are written in MDX (Markdown + JSX) with custom components for rich content:

```
src/blog/
├── 2024/
│   ├── simple-post.mdx              # Simple post as single file
│   └── post-with-images/            # Post with colocated assets
│       ├── index.mdx
│       ├── screenshot.png
│       └── diagram.svg
└── 2025/
    └── ...
```

Each post has frontmatter for metadata:

```yaml
---
title: Building a Custom Block
date: 2024-03-15
excerpt: A deep dive into WordPress block development
categories: [WordPress, Block Editor]
featuredImage: ./cover.png
---
```

### Custom MDX Components

Beyond standard Markdown, posts can use custom components:

- **Code blocks** with syntax highlighting, line numbers, copy button, and collapsible sections
- **Images** with captions, responsive sizing, and automatic optimization
- **GitHub repo cards** showing live star/fork counts
- **WordPress plugin cards** with ratings and install counts
- **YouTube and video embeds** with Cloudflare Stream support
- **Notice callouts** (note, tip, warning, etc.)

Example usage in a post:

~~~mdx
Here's a code block with a filename header:

```tsx title="Button.tsx"
export function Button({ children }) {
  return <button className="btn">{children}</button>
}
```

<GHRepoCard repo="WordPress/gutenberg" />

<Notice type="tip">
  This is a helpful tip for readers.
</Notice>
~~~

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with React Compiler (automatic memoization)
- **MDX** via @next/mdx and next-mdx-remote
- **Tailwind CSS v4** with shadcn/ui components
- **Shiki** for syntax highlighting
- **Base UI** for accessible primitives

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/           # Next.js pages and API routes
├── blog/          # MDX blog posts organized by year
├── components/    # React components (ui/ for shadcn)
├── lib/           # Utilities (post fetching, syntax highlighting)
└── mdx-components.tsx  # MDX component registry
```

## Documentation

Detailed docs are in the [`docs/`](docs/) folder:

- [Getting Started](docs/getting-started.md) – Tech stack, commands, project structure
- [Content Authoring](docs/content-authoring.md) – Writing blog posts with MDX
- [Components](docs/components.md) – Custom MDX components reference
- [Styling](docs/styling.md) – Tailwind CSS v4 and color system
- [Design Patterns](docs/design-patterns.md) – Code conventions

## License

The code is available for reference and learning. Feel free to use it as inspiration for your own projects.
