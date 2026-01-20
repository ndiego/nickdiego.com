# Getting Started

This guide covers setting up and running the project locally.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: MDX with next-mdx-remote
- **Styling**: Tailwind CSS v4 with shadcn/ui color system
- **Syntax Highlighting**: Shiki (GitHub light/dark themes)
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
cp .env.example .env.local
```

| Variable                | Required | Description                                            |
| ----------------------- | -------- | ------------------------------------------------------ |
| `CLOUDFLARE_ACCOUNT_ID` | No       | Cloudflare account ID for video aspect ratio detection |
| `CLOUDFLARE_API_TOKEN`  | No       | API token with Stream:Read permission                  |

See [components.md](./components.md#video) for details on setting up Cloudflare Stream.

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
