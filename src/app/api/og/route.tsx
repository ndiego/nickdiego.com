import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title") || siteConfig.name;
  const subtitle = searchParams.get("subtitle") || siteConfig.description;

  // Fetch avatar from the current origin (works in dev and prod)
  const avatarUrl = new URL("/images/avatar.png", request.url);
  const avatarData = await fetch(avatarUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#0a0a0a",
        padding: "80px",
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(64, 64, 64, 0.3) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: title.length > 50 ? "56px" : "72px",
            fontWeight: 600,
            color: "#fafafa",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        {subtitle && title !== siteConfig.name && (
          <p
            style={{
              fontSize: "28px",
              color: "#a3a3a3",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            {subtitle.length > 120
              ? subtitle.substring(0, 120) + "..."
              : subtitle}
          </p>
        )}
      </div>

      {/* Author info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "48px",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarData as unknown as string}
          width={48}
          height={48}
          style={{
            borderRadius: "50%",
          }}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#fafafa",
            }}
          >
            {siteConfig.author.name}
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#737373",
            }}
          >
            nickdiego.com
          </span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
