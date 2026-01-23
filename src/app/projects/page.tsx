import type { Metadata } from "next";
import { WPPluginStat } from "@/components/WPPluginStat";
import { WPPluginCard } from "@/components/WPPluginCard";
import { GHRepoCard } from "@/components/GHRepoCard";
import { Separator } from "@/components/ui/separator";

const description =
  "Open-source WordPress plugins and tools including Block Visibility, Icon Block, and more.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  openGraph: {
    title: "Projects",
    description,
    url: "/projects",
    images: [
      {
        url: "/api/og?title=Projects&subtitle=Open-source WordPress plugins and tools",
        width: 1200,
        height: 630,
        alt: "Projects by Nick Diego",
      },
    ],
  },
  twitter: {
    title: "Projects",
    description,
    images: [
      "/api/og?title=Projects&subtitle=Open-source WordPress plugins and tools",
    ],
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
      <h1 className="text-3xl font-medium mb-8">Projects</h1>

      <p className="text-copy mb-12">
        A collection of open-source WordPress plugins and tools I&apos;ve built
        and maintain.
      </p>

      <section className="mb-12">
        <h3 className="text-lg font-medium mb-6">WordPress.org stats</h3>
        <div className="space-y-2">
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
      </section>
    </div>
  );
}
