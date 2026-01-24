export const siteConfig = {
  name: "Nick Diego",
  title: "Nick Diego",
  description:
    "Founder, developer, and WordPress Core Contributor sharing insights on building for the web.",
  url: "https://nickdiego.com",
  author: {
    name: "Nick Diego",
    twitter: "@nickmdiego",
    github: "ndiego",
  },
  links: {
    twitter: "https://x.com/nickmdiego",
    github: "https://github.com/ndiego",
    bluesky: "https://bsky.app/profile/nickdiego.com",
    linkedin: "https://linkedin.com/in/nickmdiego",
    wordpress: "https://profiles.wordpress.org/ndiego",
  },
} as const;

export type SiteConfig = typeof siteConfig;
