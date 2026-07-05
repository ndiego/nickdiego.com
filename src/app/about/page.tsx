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
        Hi, I&apos;m Nick.
      </h1>

      <div className="space-y-6">
        <p className="text-copy text-pretty leading-relaxed">
          I&apos;m a developer and WordPress core contributor with experience
          building and maintaining a range of tools and products. After many
          years working professionally on WordPress across developer relations
          and product marketing, I&apos;m now focused on{" "}
          <Link href="https://spellbinder.gg">Spellbinder.gg</Link>.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          Spellbinder is a platform for Magic: The Gathering discovery,
          analysis, deck building, and collection management. Built with
          Next.js and powered by AI-driven workflows, it&apos;s where
          I&apos;m channeling most of my energy right now.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          This site is where I share ongoing work, AI workflows, code snippets,
          WordPress tutorials, and personal updates along the way.
        </p>

        <p className="text-copy text-pretty leading-relaxed">
          For more on what I&apos;m working on, check out the{" "}
          <Link href="/projects">projects</Link> page. If you&apos;d like to
          reach out, you can find me at{" "}
          <Link href="https://x.com/nickmdiego">@nickmdiego</Link> or through
          the social links below.
        </p>
      </div>
    </div>
  );
}
