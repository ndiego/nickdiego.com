import { getVideoMetadata } from "@/lib/cloudflare";

interface VideoProps {
  id: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  start?: number;
}

export async function Video({
  id,
  title = "Video",
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  poster,
  start,
}: VideoProps) {
  const params = new URLSearchParams();

  if (autoplay) params.set("autoplay", "true");
  if (loop) params.set("loop", "true");
  if (muted) params.set("muted", "true");
  if (!controls) params.set("controls", "false");
  if (poster) params.set("poster", poster);
  if (start) params.set("startTime", start.toString());

  const queryString = params.toString();
  const src = `https://iframe.videodelivery.net/${id}${queryString ? `?${queryString}` : ""}`;

  // Fetch video metadata to get the correct aspect ratio
  const metadata = await getVideoMetadata(id);

  // Calculate padding-bottom percentage for aspect ratio
  // Default to 16:9 (56.25%) if metadata unavailable
  const aspectRatioPadding = metadata
    ? (metadata.height / metadata.width) * 100
    : 56.25;

  return (
    <div
      className="relative my-8 rounded-md overflow-hidden bg-muted"
      style={{ paddingBottom: `${aspectRatioPadding}%` }}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
