import React, { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';
import { Link } from '@/components/ui/link';
import { Notice } from '@/components/Notice';
import { GHRepoCard } from '@/components/GHRepoCard';
import { WPPluginCard } from '@/components/WPPluginCard';
import { YouTube } from '@/components/YouTube';
import { Video } from '@/components/Video';
import { Tweet } from '@/components/Tweet';
import { Image } from '@/components/Image';
import { CodeBlock } from '@/components/CodeBlock';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic text elements
    p: ({ children }) => (
      <p className="text-[var(--text-copy)] leading-relaxed mb-6">{children}</p>
    ),
    h1: ({ children, id }) => (
      <h1 id={id} className="text-[var(--text-heading)] text-3xl font-medium mt-10 mb-4 scroll-mt-20 text-balance">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="text-[var(--text-heading)] text-2xl font-medium mt-10 mb-4 scroll-mt-20 text-balance">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="text-[var(--text-heading)] text-xl font-medium mt-8 mb-3 scroll-mt-20 text-balance">
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4 id={id} className="text-[var(--text-heading)] text-lg font-medium mt-6 mb-2 scroll-mt-20">
        {children}
      </h4>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--text-copy)]">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[var(--text-copy)]">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-border pl-4 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="text-foreground text-sm font-mono font-normal px-1.5 py-0.5 rounded bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.25_0_0)]">
        {children}
      </code>
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
      const className =
        'text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 font-normal no-underline transition-colors';
      if (href?.startsWith('/')) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith('#')) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    // Override default code blocks with syntax highlighting
    // rehype-mdx-code-props passes meta string props directly to pre element
    pre: ({
      children,
      filename,
      maxLines,
      showLineNumbers: showLineNumbersProp,
    }: {
      children: React.ReactNode;
      filename?: string;
      maxLines?: number;
      showLineNumbers?: boolean;
    }) => {
      // Extract code element props
      const codeElement = children as React.ReactElement<{
        className?: string;
        children?: string;
      }>;

      if (!codeElement?.props) {
        return <pre>{children}</pre>;
      }

      const { className, children: code } = codeElement.props;

      const language = className?.replace('language-', '') || 'plaintext';
      const showLineNumbers = showLineNumbersProp !== false;

      if (typeof code !== 'string') {
        return <pre>{children}</pre>;
      }

      return (
        <CodeBlock
          language={language}
          showLineNumbers={showLineNumbers}
          filename={filename}
          maxLines={maxLines}
        >
          {code}
        </CodeBlock>
      );
    },
    // Custom MDX components
    Notice,
    GHRepoCard,
    WPPluginCard,
    YouTube,
    Video,
    Tweet,
    Image,
    CodeBlock,
    ...components,
  };
}
