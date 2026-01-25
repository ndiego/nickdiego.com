# Components

Custom components available for use in MDX content.

## Notice

Display callout boxes for notes, tips, warnings, and other important information.

```mdx
<Notice type="note">This is a note with helpful information.</Notice>
```

### Props

| Prop       | Required | Default  | Description                                                      |
| ---------- | -------- | -------- | ---------------------------------------------------------------- |
| `type`     | No       | `"note"` | Type of notice: `note`, `tip`, `important`, `warning`, `caution` |
| `children` | Yes      | —        | Content to display                                               |

### Types

- **note** (ℹ️) — General information
- **tip** (💡) — Helpful suggestions
- **important** (✨) — Key information to highlight
- **warning** (⚠️) — Potential issues to be aware of
- **caution** (🚨) — Critical warnings

### Examples

```mdx
<Notice type="tip">
  Use the `size="small"` prop on images to display them at 60% width.
</Notice>

<Notice type="warning">
  This API is deprecated and will be removed in the next major version.
</Notice>

<Notice type="caution">
  Deleting this file will permanently remove all user data.
</Notice>
```

---

## Image

The `<Image>` component uses Next.js Image optimization. **Width and height are required** for proper aspect ratio and optimization.

Images are colocated with blog posts in a folder structure:

```
src/blog/2024/my-post/
├── index.mdx
├── screenshot.png
└── another-image.jpg
```

Reference images using relative paths:

```mdx
<Image
  src="./screenshot.png"
  alt="Description of the image"
  width={1024}
  height={768}
/>
```

The `./` prefix is automatically resolved to the correct API route at build time.

### Props

| Prop         | Required | Description                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------- |
| `src`        | Yes      | Path to the image                                                                 |
| `alt`        | Yes      | Alt text for accessibility                                                        |
| `width`      | Yes      | Original image width in pixels                                                    |
| `height`     | Yes      | Original image height in pixels                                                   |
| `size`       | No       | Size variant: `"default"` (full content width) or `"small"` (60% width, centered) |
| `caption`    | No       | Caption displayed below the image (supports JSX)                                  |
| `bordered`   | No       | Add a border around the image                                                     |
| `priority`   | No       | Load image with priority (for above-the-fold images)                              |
| `expandable` | No       | Enable click-to-expand lightbox preview                                           |

### Size Variants

```mdx
{/* Full width (default) */}

<Image src="..." alt="..." width={1024} height={768} />

{/* 60% width, centered */}

<Image src="..." alt="..." width={500} height={400} size="small" />
```

### With Caption

```mdx
<Image
  src="./example-screenshot.png"
  alt="Screenshot"
  width={1024}
  height={768}
  caption={
    <>
      This is a caption with a <a href="https://example.com">link</a>.
    </>
  }
/>
```

### Expandable Lightbox

Add `expandable` to enable a click-to-expand lightbox. An expand icon appears on hover, and clicking opens the image in a fullscreen modal.

```mdx
<Image
  src="./detailed-diagram.png"
  alt="Architecture diagram"
  width={1200}
  height={800}
  expandable
/>
```

### Getting Image Dimensions

Use `sips` on macOS to get dimensions:

```bash
sips -g pixelWidth -g pixelHeight path/to/image.png
```

---

## Video

The `<Video>` component embeds videos hosted on Cloudflare Stream. It automatically fetches video metadata to display the correct aspect ratio.

```mdx
<Video id="your-cloudflare-stream-video-id" />
```

### Props

| Prop       | Required | Default   | Description                 |
| ---------- | -------- | --------- | --------------------------- |
| `id`       | Yes      | —         | Cloudflare Stream video ID  |
| `title`    | No       | `"Video"` | Accessible title            |
| `autoplay` | No       | `false`   | Auto-play video             |
| `loop`     | No       | `false`   | Loop video                  |
| `muted`    | No       | `false`   | Mute audio                  |
| `controls` | No       | `true`    | Show player controls        |
| `poster`   | No       | —         | Custom poster/thumbnail URL |
| `start`    | No       | —         | Start time in seconds       |

### Example with Options

```mdx
<Video id="abc123def456" title="Product demo" muted loop />
```

### Environment Variables

To enable automatic aspect ratio detection, add these environment variables:

```bash
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
```

- **Account ID**: Found in the Cloudflare dashboard URL or under Account Home
- **API Token**: Create a token with `Stream:Read` permission in the Cloudflare dashboard under My Profile → API Tokens

If these variables aren't set, the component falls back to a 16:9 aspect ratio.

### Uploading Videos

Upload videos to Cloudflare Stream via the Cloudflare dashboard. The video ID is shown in the video details after upload.

---

## YouTube

Embed YouTube videos using the privacy-enhanced embed (youtube-nocookie.com).

```mdx
<YouTube id="dQw4w9WgXcQ" />
```

### Props

| Prop    | Required | Default           | Description           |
| ------- | -------- | ----------------- | --------------------- |
| `id`    | Yes      | —                 | YouTube video ID      |
| `title` | No       | `"YouTube video"` | Accessible title      |
| `start` | No       | —                 | Start time in seconds |

### Example with Start Time

```mdx
<YouTube id="dQw4w9WgXcQ" title="Introduction to React" start={120} />
```

---

## Tweet

Embed Twitter/X posts by ID. The embed automatically adapts to dark/light mode.

```mdx
<Tweet id="1234567890123456789" />
```

### Props

| Prop | Required | Description   |
| ---- | -------- | ------------- |
| `id` | Yes      | Tweet/post ID |

### Finding the Tweet ID

The tweet ID is the numeric string at the end of a tweet URL:
`https://twitter.com/username/status/1234567890123456789` → ID is `1234567890123456789`

---

## CodeBlock

Syntax highlighted code with line numbers, copy button, and collapsible option. See [content-authoring.md](./content-authoring.md#code-blocks) for usage.

---

## GHRepoCard

Display a GitHub repository card with live star and fork counts fetched from the GitHub API.

```mdx
<GHRepoCard
  repo="owner/repo"
  title="Project Name"
  description="A brief description of the project"
/>
```

### Props

| Prop          | Required | Description                              |
| ------------- | -------- | ---------------------------------------- |
| `repo`        | Yes      | GitHub repository in `owner/repo` format |
| `title`       | Yes      | Display title for the card               |
| `description` | Yes      | Brief description of the project         |

### Features

- Fetches live star and fork counts from GitHub API
- Stats are cached and revalidated daily
- Links to the repository on GitHub
- Gracefully handles API errors (shows card without stats)
- Optionally uses `GITHUB_TOKEN` env var for higher rate limits

---

## WPPluginCard

Display a WordPress plugin card with live ratings and active install counts fetched from the WordPress.org API.

```mdx
<WPPluginCard
  slug="plugin-slug"
  title="Plugin Name"
  description="A brief description of the plugin"
/>
```

### Props

| Prop          | Required | Description                     |
| ------------- | -------- | ------------------------------- |
| `slug`        | Yes      | WordPress.org plugin slug       |
| `title`       | Yes      | Display title for the card      |
| `description` | Yes      | Brief description of the plugin |

### Features

- Fetches live rating count and active installs from WordPress.org API
- Displays current plugin version
- Stats are cached and revalidated hourly
- Links to the plugin page on WordPress.org
- Gracefully handles API errors (shows card without stats)

---

## LinkButton

Display a call-to-action button that links to internal or external URLs.

```mdx
<LinkButton href="https://example.com" label="View the demo" />
```

### Props

| Prop    | Required | Default  | Description                             |
| ------- | -------- | -------- | --------------------------------------- |
| `href`  | Yes      | —        | URL to link to                          |
| `label` | Yes      | —        | Button text                             |
| `align` | No       | `"left"` | Alignment: `left`, `center`, or `right` |

### Features

- External links (starting with `http`) open in new tab with `noopener noreferrer`
- Internal links navigate normally
- Includes an arrow icon indicating external navigation

### Examples

```mdx
{/* Left-aligned (default) */}
<LinkButton href="/blog" label="Read more posts" />

{/* Centered */}
<LinkButton href="https://github.com/owner/repo" align="center" label="View on GitHub" />

{/* Right-aligned */}
<LinkButton href="/contact" align="right" label="Get in touch" />
```
