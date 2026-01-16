export const metadata = {
  title: 'Talks',
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
});

const talks = [
  {
    title: 'WordPress Speed Build Challenge',
    event: 'WordCamp Asia 2025',
    date: '2025-02-22',
    description:
      'Competed against Jessica Lyschik in a live speed build challenge, experimenting with AI to build a carousel block.',
    url: 'https://asia.wordcamp.org/2025/session/wordpress-speed-build-challenge/',
  },
  {
    title: 'Extending the WordPress Editor',
    event: 'WordCamp US 2024',
    date: '2024-09-18',
    description:
      'Talked about the Block Visibility plugin and the power of extending the WordPress Editor.',
    url: null,
  },
  {
    title: 'Curating the WordPress Editing Experience',
    event: 'WordCamp Europe 2024',
    date: '2024-07-12',
    description:
      'Shared tools, articles, and videos for curating the editing experience in WordPress.',
    url: null,
  },
];

export default function SpeakingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-medium mb-8">Talks</h1>

      <p className="text-muted-foreground mb-12 max-w-2xl">
        Conference talks and presentations about WordPress development,
        the block editor, and related topics.
      </p>

      <div className="space-y-8">
        {talks.map((talk) => {
          const date = dateFormatter.format(new Date(talk.date));

          return (
            <div
              key={talk.title}
              className="border-b border-border pb-8 last:border-0"
            >
              <div className="text-sm text-muted-foreground mb-2">
                {talk.event} · {date}
              </div>
              <h2 className="text-xl font-medium mb-2">
                {talk.url ? (
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    {talk.title}
                  </a>
                ) : (
                  talk.title
                )}
              </h2>
              <p className="text-muted-foreground">
                {talk.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
