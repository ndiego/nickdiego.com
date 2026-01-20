import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

interface Options {
  imageBasePath: string | null;
}

/**
 * Rehype plugin to transform relative image paths to API routes.
 * Transforms: src="./image.png" -> src="/api/blog-images/2024/my-post/image.png"
 */
export function rehypeRelativeImages(options: Options) {
  const { imageBasePath } = options;

  return (tree: Root) => {
    if (!imageBasePath) return;

    visit(tree, "element", (node: Element) => {
      // Handle <img> elements
      if (node.tagName === "img" && node.properties?.src) {
        const src = String(node.properties.src);
        if (src.startsWith("./")) {
          node.properties.src = `/api/blog-images/${imageBasePath}/${src.slice(2)}`;
        }
      }

      // Handle MDX Image components (they appear as JSX elements)
      // The src prop is passed through properties
      if (node.properties?.src) {
        const src = String(node.properties.src);
        if (src.startsWith("./")) {
          node.properties.src = `/api/blog-images/${imageBasePath}/${src.slice(2)}`;
        }
      }
    });
  };
}
