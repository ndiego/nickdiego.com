import { Star, Users } from "lucide-react";

interface WPPluginCardProps {
  slug: string;
  title: string;
  description: string;
}

async function getPluginStats(slug: string) {
  try {
    const res = await fetch(
      `https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function formatInstalls(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(num >= 10000000 ? 0 : 1)}M+`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}k+`;
  }
  return `${num}+`;
}

export async function WPPluginCard({
  slug,
  title,
  description,
}: WPPluginCardProps) {
  const data = await getPluginStats(slug);

  return (
    <a
      href={`https://wordpress.org/plugins/${slug}/`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block not-prose my-6 p-6 border border-border rounded-md transition-colors hover:bg-muted/50"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          {data?.version && (
            <span className="px-2 py-0.5 text-xs text-muted-foreground bg-muted rounded">
              v{data.version}
            </span>
          )}
        </div>
        {data && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4" aria-hidden="true" />
              {data.num_ratings?.toLocaleString() ?? 0}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" aria-hidden="true" />
              {formatInstalls(data.active_installs ?? 0)}
            </span>
          </div>
        )}
      </div>
      <p className="text-foreground leading-relaxed">{description}</p>
    </a>
  );
}
