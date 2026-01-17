# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/claude-code) when working with this codebase.

## Project Overview

Personal website for Nick Diego built with Next.js 16, MDX for content, and Tailwind CSS v4. Migrating from WordPress to a modern static site architecture.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: MDX with next-mdx-remote
- **Styling**: Tailwind CSS v4 with shadcn/ui color system
- **Syntax Highlighting**: Shiki (GitHub light/dark themes)
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode

## Key Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── blog/               # MDX blog posts (can use year subfolders for organization)
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── CodeBlock.tsx   # Server component for syntax highlighting
│   └── CodeBlockClient.tsx  # Client component for interactivity
├── lib/
│   ├── posts.ts        # Post fetching utilities
│   ├── shiki.ts        # Syntax highlighter setup
│   ├── site.ts         # Site configuration
│   ├── metadata.ts     # SEO utilities
│   └── utils.ts        # shadcn/ui cn() utility
└── mdx-components.tsx  # Custom MDX components
```

## Content

Blog posts are MDX files in `src/blog/`. You can organize posts into year subfolders (e.g., `src/blog/2024/`, `src/blog/2025/`) for convenience—the folder structure is purely organizational and doesn't affect URLs. Frontmatter schema:

```yaml
---
title: Post Title
date: YYYY-MM-DD
excerpt: Short description
categories:
  - Category
featuredImage: /path/to/image.jpg  # optional
---
```

## Styling

- Uses shadcn/ui semantic color variables (bg-muted, text-foreground, border-border, etc.)
- Dark mode configured via Tailwind v4: `@custom-variant dark (&:where(.dark, .dark *))`
- CSS variables defined in `src/app/globals.css`

## Custom Components Available in MDX

- `<CodeBlock>` - Syntax highlighted code with line numbers, copy button, collapsible
- `<YouTube id="..." />` - YouTube embeds
- `<Image>` - Next.js optimized images with captions and size variants
- `<GitHubStats repo="owner/repo" />` - GitHub repo stats

### Image Usage

The `<Image>` component uses Next.js Image optimization. **Width and height are required** for proper aspect ratio and optimization.

```mdx
<Image
  src="/images/posts/screenshot.png"
  alt="Description of the image"
  width={1024}
  height={768}
/>
```

**Available props:**
- `src` (required) - Path to the image
- `alt` (required) - Alt text for accessibility
- `width` (required) - Original image width in pixels
- `height` (required) - Original image height in pixels
- `size` - Size variant: `"default"` (full content width) or `"small"` (60% width, centered)
- `caption` - Optional caption displayed below the image (supports JSX)
- `bordered` - Add a border around the image
- `priority` - Load image with priority (for above-the-fold images)

**Size variants:**
```mdx
{/* Full width (default) */}
<Image src="..." alt="..." width={1024} height={768} />

{/* 60% width, centered */}
<Image src="..." alt="..." width={500} height={400} size="small" />
```

**With caption:**
```mdx
<Image
  src="/images/posts/example-screenshot.png"
  alt="Screenshot"
  width={1024}
  height={768}
  caption={<>This is a caption with a [link](https://example.com).</>}
/>
```

**Getting image dimensions:** Use `sips -g pixelWidth -g pixelHeight path/to/image.png` on macOS to get dimensions.

### CodeBlock Usage

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

**Important:** Do NOT use `<CodeBlock>` as a JSX component directly in MDX - the MDX compiler strips indentation from JSX expressions.

## Design Patterns

### Prefer Direct JSX Over Array Mapping

For static UI elements like navigation links, footer links, and other fixed content, render JSX directly instead of creating arrays and mapping over them.

**Don't do this:**
```tsx
const navItems = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
];

navItems.map(item => <Link href={item.href}>{item.label}</Link>)
```

**Do this instead:**
```tsx
<Link href="/about">About</Link>
<Link href="/writing">Writing</Link>
```

**Why:**
- Simpler and more readable
- Easier to customize individual items (e.g., different Tailwind classes per link)
- Better for tooling - grep, search, and AI agents can find and modify the code directly
- Avoids premature abstraction

**Exceptions:** Use arrays/mapping when data is genuinely dynamic (from a database, CMS, or user input) or when you have many items (10+) that are truly uniform.
