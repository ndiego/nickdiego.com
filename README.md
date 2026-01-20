# nickdiego.com

A personal blog built with Next.js 14, MDX, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── posts/
│   │   └── [slug]/         # Dynamic post pages
│   ├── projects/
│   ├── speaking/
│   ├── feed.xml/           # RSS feed
│   ├── sitemap.ts          # Sitemap
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── Footer.tsx
│   ├── GitHubStats.tsx     # Server component for GitHub repo stats
│   ├── Header.tsx
│   ├── Notice.tsx          # MDX component for callouts
│   ├── PostCard.tsx
│   └── ThemeToggle.tsx     # Dark mode toggle
├── content/
│   └── posts/              # MDX blog posts
│       └── *.mdx
└── lib/
    └── posts.ts            # Post utilities
```

## Adding Blog Posts

Create a new `.mdx` file in `src/content/posts/`:

```mdx
---
title: My Post Title
date: 2025-01-15
excerpt: A brief description of the post.
categories:
  - Category1
  - Category2
---

Your post content here...

<Notice type="info">
  Use custom components like Notice and GitHubStats in your MDX.
</Notice>

<GitHubStats repo="username/repo" />
```

## Setup Checklist

- [ ] Add your avatar image to `public/avatar.jpg`
- [ ] Update social links in `src/components/Footer.tsx`
- [ ] Update nav items in `src/components/Header.tsx` if needed
- [ ] Configure newsletter form (Formspree, Buttondown, etc.)
- [ ] Configure contact form (Formspree, server action, etc.)
- [ ] Migrate posts from WordPress to MDX files
- [ ] Deploy to Vercel

## Custom MDX Components

### Notice

```mdx
<Notice type="info">Info message</Notice>
<Notice type="warning">Warning message</Notice>
<Notice type="success">Success message</Notice>
<Notice type="error">Error message</Notice>
```

### GitHubStats

```mdx
<GitHubStats repo="ndiego/block-visibility" />
```

Displays star and fork counts for any public GitHub repository.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Geist (by Vercel)
- **Content**: MDX with gray-matter
- **Dark Mode**: next-themes
- **Deployment**: Vercel (recommended)

## License

MIT
