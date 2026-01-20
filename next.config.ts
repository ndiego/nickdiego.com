import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        // Serve Markdown when .md is appended to post URLs
        source: "/:slug.md",
        destination: "/api/markdown/:slug",
      },
      {
        // Content negotiation: serve Markdown when Accept header includes text/markdown
        source: "/:slug",
        destination: "/api/markdown/:slug",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(.*text/markdown.*)",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
