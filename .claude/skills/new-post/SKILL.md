---
name: new-post
description: Scaffold a new blog post with the correct folder structure and frontmatter
argument-hint: "[branch]"
disable-model-invocation: true
allowed-tools: Write, Bash(mkdir:*), Bash(date:*), Bash(git checkout:*), Bash(git branch:*)
---

# Scaffold a New Blog Post

Create a new blog post with the correct folder structure based on the project conventions.

## Options

Arguments: $ARGUMENTS

- **Default (no argument)**: Create post with `draft: true` on current branch
- **`branch`**: Create a new git branch `post/slug` for the post (no draft flag)

## Process

Ask the user the following questions one at a time:

1. **Post title**: What is the title of the blog post?
2. **URL slug**: What should the URL slug be? (e.g., `my-awesome-post`)
3. **Will this post include images?**
   - Yes: Creates folder structure `src/blog/YYYY/slug/index.mdx`
   - No: Creates single file `src/blog/YYYY/slug.mdx`

## Folder Structure

Based on the answers, create the appropriate structure:

**With images:**
```
src/blog/YYYY/slug/
└── index.mdx
```

**Without images:**
```
src/blog/YYYY/slug.mdx
```

Use the current year for YYYY. Get it with: `date +%Y`

## Branch Setup (if `branch` argument provided)

Before creating files, create and switch to a new branch:

```bash
git checkout -b post/slug
```

## Frontmatter Template

Use today's date for the `date` field. Get it with: `date +%Y-%m-%d`

**Default mode (with draft flag):**

```mdx
---
title: "Post Title"
date: YYYY-MM-DD
excerpt: ""
categories:
  - Category
draft: true
---

Start writing here...
```

**Branch mode (no draft flag):**

```mdx
---
title: "Post Title"
date: YYYY-MM-DD
excerpt: ""
categories:
  - Category
---

Start writing here...
```

## After Creation

Once the file is created:

1. Tell the user the file path

**For default mode:**
2. Remind them about the `draft: true` flag — remove it when ready to publish

**For branch mode:**
2. Tell them the branch name (`post/slug`)
3. Remind them to merge the branch to main when ready to publish

**If they chose "with images":**
- Place images in the same folder as `index.mdx`
- Use relative paths like `src="./image.png"`
- Always include `width` and `height` props on `<Image>` components
- Use `sips -g pixelWidth -g pixelHeight <image>` to get dimensions
