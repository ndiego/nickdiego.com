interface YouTubeProps {
  id: string;
  title?: string;
  start?: number;
}

export function YouTube({ id, title = "YouTube video", start }: YouTubeProps) {
  const startParam = start ? `?start=${start}` : "";

  return (
    <div className="relative aspect-video my-8 rounded-md overflow-hidden bg-muted">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}${startParam}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
