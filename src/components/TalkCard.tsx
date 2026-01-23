"use client";

import { Mic2, Video, Headphones, Users } from "lucide-react";
import type { Talk, TalkCategory } from "@/data/talks";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const categoryIcons: Record<TalkCategory, React.ReactNode> = {
  conference: <Mic2 className="size-4" />,
  "live stream": <Video className="size-4" />,
  video: <Video className="size-4" />,
  podcast: <Headphones className="size-4" />,
  workshop: <Users className="size-4" />,
};

export function TalkCard({ talk }: { talk: Talk }) {
  const date = dateFormatter.format(new Date(talk.date));
  const talkUrl = talk.recordingUrl || talk.url;

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on a link
    if ((e.target as HTMLElement).closest("a")) return;

    if (talkUrl) {
      window.open(talkUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && talkUrl) {
      e.preventDefault();
      window.open(talkUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role={talkUrl ? "button" : undefined}
      tabIndex={talkUrl ? 0 : undefined}
      className={`rounded-md border border-border p-6 transition-colors ${
        talkUrl
          ? "hover:bg-muted/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground mb-2">
        <div className="flex items-center gap-2">
          <span aria-hidden="true">{categoryIcons[talk.category]}</span>
          <span>{talk.event}</span>
        </div>
        <time dateTime={talk.date} className="shrink-0">
          {date}
        </time>
      </div>

      <h3 className="text-lg font-medium text-balance max-w-[90%] leading-tight">
        {talkUrl ? (
          <a href={talkUrl} target="_blank" rel="noopener noreferrer">
            {talk.title}
          </a>
        ) : (
          talk.title
        )}
      </h3>
    </article>
  );
}
