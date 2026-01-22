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
        <p className="text-copy leading-relaxed">Hi there, my name is Nick.</p>

        <p className="text-copy leading-relaxed">
          I&apos;m a Product Marketing Manager at Automattic as well as a
          WordPress Core contributor, plugin developer, and retired hospitality
          marketer. I currently live in Minneapolis, Minnesota, with my wife,
          our dog Willie, and many rescued cats.
        </p>

        <p className="text-copy leading-relaxed">
          This website is primarily dedicated to my personal web development
          endeavors. It serves as a place to share my current projects, code
          snippets, tutorials on WordPress plugin development, and anything else
          that might be relevant.
        </p>

        <p className="text-copy leading-relaxed">
          If you are looking for more information on my WordPress plugins, head
          over to the{" "}
          <Link href="/projects">projects</Link>{" "}
          page. I am currently working on {" "}
          <Link href="https://wordpress.org/plugins/block-visibility/">Block Visibility</Link>, a plugin that allows
          you to dynamically control the visibility of any block in the
          WordPress editor.
        </p>

        <p className="text-copy leading-relaxed">Thanks for stopping by!</p>
      </div>
    </div>
  );
}
