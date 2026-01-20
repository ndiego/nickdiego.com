interface CloudflareVideoMetadata {
  width: number;
  height: number;
  aspectRatio: number;
}

interface CloudflareApiResponse {
  success: boolean;
  result?: {
    input?: {
      width?: number;
      height?: number;
    };
  };
}

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// Cache video metadata to avoid repeated API calls
const metadataCache = new Map<string, CloudflareVideoMetadata>();

export async function getVideoMetadata(
  videoId: string,
): Promise<CloudflareVideoMetadata | null> {
  // Return cached metadata if available
  if (metadataCache.has(videoId)) {
    return metadataCache.get(videoId)!;
  }

  // If credentials aren't configured, return null (component will use default)
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    console.warn(
      "Cloudflare credentials not configured. Using default 16:9 aspect ratio.",
    );
    return null;
  }

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },
        next: { revalidate: 86400 }, // Cache for 24 hours
      },
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch video metadata for ${videoId}: ${response.status}`,
      );
      return null;
    }

    const data: CloudflareApiResponse = await response.json();

    if (
      !data.success ||
      !data.result?.input?.width ||
      !data.result?.input?.height
    ) {
      console.error(`Invalid metadata response for video ${videoId}`);
      return null;
    }

    const { width, height } = data.result.input;
    const metadata: CloudflareVideoMetadata = {
      width,
      height,
      aspectRatio: width / height,
    };

    // Cache the result
    metadataCache.set(videoId, metadata);

    return metadata;
  } catch (error) {
    console.error(`Error fetching video metadata for ${videoId}:`, error);
    return null;
  }
}
