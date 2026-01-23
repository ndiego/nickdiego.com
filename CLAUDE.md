# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/claude-code) when working with this codebase.

## Project Overview

Personal website for Nick Diego built with Next.js 16, MDX for content, and Tailwind CSS v4.

## Documentation

Detailed documentation is available in the `docs/` folder:

- [Getting Started](docs/getting-started.md) - Tech stack, commands, project structure
- [Content Authoring](docs/content-authoring.md) - Writing blog posts with MDX
- [Components](docs/components.md) - Custom MDX components (Image, Video, CodeBlock, GitHubRepoCard)
- [Styling](docs/styling.md) - Tailwind CSS v4 and shadcn/ui color system
- [Design Patterns](docs/design-patterns.md) - Code conventions and best practices

## Quick Reference

### Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

### Project Structure

```
src/
├── app/           # Next.js App Router pages
├── blog/          # MDX blog posts
├── components/    # React components (ui/ for shadcn)
├── lib/           # Utilities (posts.ts, shiki.ts, site.ts)
└── mdx-components.tsx
```

### Key Conventions

- **Images in MDX**: Colocate images with posts in folder structure (`src/blog/2024/my-post/index.mdx` with images alongside). Use relative paths (`src="./image.png"`). Always provide `width` and `height` props. Use `sips -g pixelWidth -g pixelHeight` to get dimensions.
- **Code blocks**: Use fenced code blocks with info string options, not `<CodeBlock>` JSX directly.
- **Static UI**: Prefer direct JSX over array mapping for navigation, links, etc.
- **Styling**: Use shadcn/ui semantic colors (bg-muted, text-foreground, border-border).
- **UI Primitives**: This project uses Base UI (`@base-ui/react`) instead of Radix UI. When adding new shadcn/ui components, use Base UI primitives. Key API patterns:
  - Use `Backdrop` instead of `Overlay`
  - Use `Popup` instead of `Content`
  - Use `Positioner` for positioning (separate from Popup)
  - Use `data-[open]`/`data-[closed]` for animations instead of `data-[state=...]`
  - Use `render` prop for polymorphism: `<Trigger render={<Button />} />`
