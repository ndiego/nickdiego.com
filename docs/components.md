# Components

Custom components available for use in MDX content.

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

| Prop       | Required | Description                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| `src`      | Yes      | Path to the image                                                                 |
| `alt`      | Yes      | Alt text for accessibility                                                        |
| `width`    | Yes      | Original image width in pixels                                                    |
| `height`   | Yes      | Original image height in pixels                                                   |
| `size`     | No       | Size variant: `"default"` (full content width) or `"small"` (60% width, centered) |
| `caption`  | No       | Caption displayed below the image (supports JSX)                                  |
| `bordered` | No       | Add a border around the image                                                     |
| `priority` | No       | Load image with priority (for above-the-fold images)                              |

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

Embed YouTube videos by ID.

```mdx
<YouTube id="dQw4w9WgXcQ" />
```

---

## CodeBlock

Syntax highlighted code with line numbers, copy button, and collapsible option. See [content-authoring.md](./content-authoring.md#code-blocks) for usage.

---

## GitHubRepoCard

Display a GitHub repository card with live star and fork counts fetched from the GitHub API.

```mdx
<GitHubRepoCard
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
- Stats are cached and revalidated hourly
- Links to the repository on GitHub
- Gracefully handles API errors (shows card without stats)
