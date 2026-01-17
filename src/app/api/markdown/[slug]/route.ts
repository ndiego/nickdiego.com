import { getPostMarkdown } from '@/lib/posts';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const markdown = getPostMarkdown(slug);

  if (!markdown) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
