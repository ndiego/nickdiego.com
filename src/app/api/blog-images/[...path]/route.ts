import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: pathSegments } = await params;
  const imagePath = pathSegments.join("/");
  const blogRoot = path.join(process.cwd(), "src/blog");
  const fullPath = path.resolve(blogRoot, imagePath);

  // Prevent path traversal: the resolved path must stay within the blog dir
  if (fullPath !== blogRoot && !fullPath.startsWith(blogRoot + path.sep)) {
    return new NextResponse("Not found", { status: 404 });
  }

  if (!fs.existsSync(fullPath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const ext = path.extname(fullPath).toLowerCase();
  const contentType = CONTENT_TYPES[ext];

  if (!contentType) {
    return new NextResponse("Unsupported file type", { status: 400 });
  }

  const fileBuffer = fs.readFileSync(fullPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
