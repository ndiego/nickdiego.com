import { visit } from 'unist-util-visit';
import type { Root, Blockquote, Paragraph, Text } from 'mdast';

// Map GitHub alert types to our Notice types (1:1 mapping)
const alertTypeMap: Record<string, string> = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'important',
  WARNING: 'warning',
  CAUTION: 'caution',
};

const alertPattern = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/;

export function remarkGitHubAlerts() {
  return (tree: Root) => {
    visit(tree, 'blockquote', (node: Blockquote, index, parent) => {
      if (!parent || index === undefined) return;

      // Get the first paragraph in the blockquote
      const firstChild = node.children[0];
      if (firstChild?.type !== 'paragraph') return;

      const paragraph = firstChild as Paragraph;
      const firstTextNode = paragraph.children[0];
      if (firstTextNode?.type !== 'text') return;

      const text = (firstTextNode as Text).value;
      const match = text.match(alertPattern);
      if (!match) return;

      const alertType = match[1];
      const noticeType = alertTypeMap[alertType];

      // Remove the alert marker from the text
      (firstTextNode as Text).value = text.replace(alertPattern, '');

      // If the first text node is now empty, remove it
      if ((firstTextNode as Text).value === '') {
        paragraph.children.shift();
      }

      // If the paragraph is now empty, remove it
      if (paragraph.children.length === 0) {
        node.children.shift();
      }

      // Transform the blockquote into an MDX JSX element (Notice component)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const noticeNode: any = {
        type: 'mdxJsxFlowElement',
        name: 'Notice',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'type',
            value: noticeType,
          },
        ],
        children: node.children,
      };

      parent.children[index] = noticeNode;
    });
  };
}
