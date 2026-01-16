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
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── CodeBlock.tsx   # Server component for syntax highlighting
│   └── CodeBlockClient.tsx  # Client component for interactivity
├── content/
│   └── posts/          # MDX blog posts
├── lib/
│   ├── posts.ts        # Post fetching utilities
│   ├── shiki.ts        # Syntax highlighter setup
│   ├── site.ts         # Site configuration
│   ├── metadata.ts     # SEO utilities
│   └── utils.ts        # shadcn/ui cn() utility
└── mdx-components.tsx  # Custom MDX components
```

## Content

Blog posts are MDX files in `src/content/posts/`. Frontmatter schema:

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
- `<Image src="..." alt="..." />` - Optimized images with captions
- `<GitHubStats repo="owner/repo" />` - GitHub repo stats

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
  { href: '/posts', label: 'Posts' },
];

navItems.map(item => <Link href={item.href}>{item.label}</Link>)
```

**Do this instead:**
```tsx
<Link href="/about">About</Link>
<Link href="/posts">Posts</Link>
```

**Why:**
- Simpler and more readable
- Easier to customize individual items (e.g., different Tailwind classes per link)
- Better for tooling - grep, search, and AI agents can find and modify the code directly
- Avoids premature abstraction

**Exceptions:** Use arrays/mapping when data is genuinely dynamic (from a database, CMS, or user input) or when you have many items (10+) that are truly uniform.
