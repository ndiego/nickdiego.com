import { Star, GitFork } from "lucide-react";

interface GHRepoCardProps {
  repo: string;
  title: string;
  description: string;
}

async function getRepoStats(repo: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function GHRepoCard({
  repo,
  title,
  description,
}: GHRepoCardProps) {
  const data = await getRepoStats(repo);

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block not-prose my-6 p-6 border border-border rounded-md transition-colors hover:bg-muted/50"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        {data && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4" aria-hidden="true" />
              {data.stargazers_count?.toLocaleString() ?? 0}
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork className="w-4 h-4" aria-hidden="true" />
              {data.forks_count?.toLocaleString() ?? 0}
            </span>
          </div>
        )}
      </div>
      <p className="text-foreground leading-relaxed">{description}</p>
    </a>
  );
}
