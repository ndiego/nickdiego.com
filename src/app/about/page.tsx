export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
      <h1 className="text-[var(--text-heading)] text-3xl font-medium mb-8">
        About
      </h1>

      <div className="space-y-6">
        <p className="text-[var(--text-copy)] leading-relaxed">
          I&apos;m Nick Diego—a Product Marketing Manager at Automattic,
          WordPress Core contributor, and hobby web developer.
        </p>

        <p className="text-[var(--text-copy)] leading-relaxed">
          This site is dedicated to my current WordPress projects and
          explorations into related technologies. Feel free to have a look
          around and reach out if you&apos;d like to connect.
        </p>

        <h2 className="text-[var(--text-heading)] text-2xl font-medium mt-10 mb-4">
          What I do
        </h2>

        <p className="text-[var(--text-copy)] leading-relaxed">
          At Automattic, I work on developer tools and help communicate the
          value of WordPress to developers around the world. I&apos;m also an
          active contributor to WordPress Core, focusing on the block editor and
          related developer experience improvements.
        </p>

        <h2 className="text-[var(--text-heading)] text-2xl font-medium mt-10 mb-4">
          Projects
        </h2>

        <p className="text-[var(--text-copy)] leading-relaxed">
          I maintain several open-source WordPress plugins, including Block
          Visibility and the Icon Block, both of which have reached 30,000+
          active users.
        </p>
      </div>
    </div>
  );
}
