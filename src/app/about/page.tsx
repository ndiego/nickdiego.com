import type { Metadata } from "next";
import { Link } from "@/components/ui/link";

const description =
  "Product Marketing Manager at Automattic, WordPress Core contributor, plugin developer, and retired hospitality marketer.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About",
    description,
    url: "/about",
    images: [
      {
        url: "/api/og?title=About&subtitle=Nick Diego",
        width: 1200,
        height: 630,
        alt: "About Nick Diego",
      },
    ],
  },
  twitter: {
    title: "About",
    description,
    images: ["/api/og?title=About&subtitle=Nick Diego"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
      <h1 className="text-[var(--text-heading)] text-3xl font-medium mb-8">
        About
      </h1>

      <div className="space-y-6">
        <p className="text-copy text-pretty leading-relaxed">
          Hi there, my name is Nick.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          I&apos;m a Product Marketing Manager at Automattic, a WordPress Core
          contributor, a developer, and a “retired” hospitality marketer. I
          currently live in Minneapolis, Minnesota, with my wife, our dog
          Willie, and a growing number of rescued cats.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          Here, I share my web development projects, AI workflows, code
          snippets, WordPress tutorials, and whatever else I&apos;m currently
          working on.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          For more on my WordPress plugins, check out the{" "}
          <Link href="/projects">projects</Link> page. You can also find me at{" "}
          <Link href="https://x.com/nickmdiego">@nickmdiego</Link> or through
          the social channels below.
        </p>
      </div>
    </div>
  );
}
