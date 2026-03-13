import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

// Module-level cache (persists across warm edge invocations)
let cachedAvatarData: ArrayBuffer | null = null;
let cachedFontData: ArrayBuffer | null = null;

async function getAvatarData(baseUrl: string): Promise<ArrayBuffer> {
  if (cachedAvatarData) {
    return cachedAvatarData;
  }
  const avatarUrl = new URL("/images/avatar.png", baseUrl);
  const data = await fetch(avatarUrl).then((res) => res.arrayBuffer());
  cachedAvatarData = data;
  return data;
}

async function getFontData(): Promise<ArrayBuffer> {
  if (cachedFontData) {
    return cachedFontData;
  }
  const data = await fetch(
    "https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-sans/Geist-Medium.ttf",
  ).then((res) => res.arrayBuffer());
  cachedFontData = data;
  return data;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title") || siteConfig.name;

  // Fetch assets with caching for warm edge instances
  const [avatarData, fontData] = await Promise.all([
    getAvatarData(request.url),
    getFontData(),
  ]);

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
        padding: "100px",
        fontFamily: "Geist",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarData as unknown as string}
        width={120}
        height={120}
        style={{
          borderRadius: "50%",
          zIndex: 1,
        }}
        alt=""
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "32px",
            color: "#737373",
          }}
        >
          nickdiego.com
        </span>
        <h1
          style={{
            fontSize: title.length > 50 ? "56px" : "72px",
            fontWeight: 500,
            color: "#fafafa",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
      },
    },
  );
}
