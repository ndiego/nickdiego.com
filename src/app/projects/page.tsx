import type { Metadata } from "next";
import Image from "next/image";
import { WPPluginStat } from "@/components/wp-plugin-stat";
import { WPPluginCard } from "@/components/wp-plugin-card";
import { GHRepoCard } from "@/components/gh-repo-card";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";

const description =
  "Projects including Spellbinder.gg, WordPress plugins, tools, and more.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  openGraph: {
    title: "Projects",
    description,
    url: "/projects",
    images: [
      {
        url: "/api/og?title=Projects&subtitle=Projects and tools",
        width: 1200,
        height: 630,
        alt: "Projects by Nick Diego",
      },
    ],
  },
  twitter: {
    title: "Projects",
    description,
    images: ["/api/og?title=Projects&subtitle=Projects and tools"],
  },
  alternates: {
    canonical: "/projects",
  },
};

const pluginSlugs = [
  "block-visibility",
  "icon-block",
  "social-sharing-block",
  "genesis-featured-page-advanced",
  "genesis-columns-advanced",
];

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
      <h1 className="text-3xl font-medium mb-4">Projects</h1>

      <p className="text-copy mb-12">
        A collection of projects I&apos;ve built and maintain.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Spellbinder.gg</h2>
        <p className="text-copy mb-6">
          A platform for Magic: The Gathering discovery, analysis, deck
          building, and collection management. The project is in active
          development, so if you&apos;re a Magic fan, check it out at{" "}
          <Link href="https://spellbinder.gg">Spellbinder.gg</Link>.
        </p>
        <Link href="https://spellbinder.gg">
          <Image
            src="/images/spellbinder-screenshot.png"
            alt="Spellbinder.gg screenshot"
            width={3000}
            height={1000}
            className="rounded-lg border border-border"
          />
        </Link>
      </section>

      <h2 className="text-2xl font-medium mb-4">WordPress</h2>
      <p className="text-copy mb-12">
        Much of my early development work focused on WordPress. These projects
        include custom blocks, and Editor extensions. Some are available in the{" "}
        <Link href="https://profiles.wordpress.org/ndiego/#content-plugins">
          Plugin Directory
        </Link>{" "}
        on WordPress.org, and others are experimental or built for my personal
        use. You&apos;ll find more on{" "}
        <Link href="https://github.com/ndiego">GitHub</Link>.
      </p>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">WordPress.org stats</h3>
          <a
            href="https://profiles.wordpress.org/ndiego/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 pl-1 pr-3 py-1 text-sm border border-border rounded-full text-foreground hover:bg-neutral-50 dark:hover:bg-muted/50 transition-colors"
          >
            <Image
              src="/images/avatar.png"
              alt=""
              width={20}
              height={20}
              className="rounded-full"
            />
            @ndiego
          </a>
        </div>
        <div className="space-y-2.5">
          <WPPluginStat slugs={pluginSlugs} stat="plugins" />
          <Separator />
          <WPPluginStat slugs={pluginSlugs} stat="active_installs" />
          <Separator />
          <WPPluginStat slugs={pluginSlugs} stat="downloads" />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Featured</h3>
        <WPPluginCard
          slug="block-visibility"
          title="Block Visibility"
          description="This utility plugin lets you control block visibility dynamically, enabling you to schedule content, display exclusive promotions, and restrict blocks based on user roles, screen sizes, query strings, and more."
        />
        <WPPluginCard
          slug="icon-block"
          title="Icon Block"
          description="A simple block plugin that allows you to add a custom SVG icon or graphic to WordPress. The plugin also includes the WordPress icon library with over 270 SVG icons to choose from."
        />
        <WPPluginCard
          slug="social-sharing-block"
          title="Social Sharing Block"
          description="Heavily inspired by the Social Icons block in WordPress core, this block plugin allows you to add social share icons to the Block Editor. Choose from 15+ social channels."
        />
        <GHRepoCard
          repo="ndiego/enable-button-icons"
          title="Enable Button Icons"
          description="Add icons to Button blocks in WordPress."
        />
        <GHRepoCard
          repo="ndiego/enable-linked-groups"
          title="Enable Linked Groups"
          description="Make Group blocks clickable while maintaining internal link functionality."
        />
        <GHRepoCard
          repo="ndiego/mega-menu-block"
          title="Mega Menu Block"
          description="An experimental Mega Menu block for creating customizable mega menu navigation in WordPress using the Interactivity API."
        />
      </section>
    </div>
  );
}
