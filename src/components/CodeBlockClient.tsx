'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface CodeBlockClientProps {
  code: string;
  lightHtml: string;
  darkHtml: string;
  lineCount: number;
  showLineNumbers: boolean;
  filename?: string;
  maxLines?: number;
}

export function CodeBlockClient({
  code,
  lightHtml,
  darkHtml,
  lineCount,
  showLineNumbers,
  filename,
  maxLines,
}: CodeBlockClientProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const isCollapsible = maxLines && lineCount > maxLines;
  const shouldCollapse = isCollapsible && !isExpanded;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate max height based on line count (1.5rem line height + padding)
  const collapsedHeight = maxLines ? `${maxLines * 1.5 + 2}rem` : undefined;

  return (
    <div className="code-block relative my-6 rounded-lg overflow-hidden border border-border">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
          <span className="text-sm text-muted-foreground font-mono">
            {filename}
          </span>
          <button
            onClick={handleCopy}
            className="p-2 -mr-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="relative bg-card">
        {!filename && (
          <div className="absolute top-2 right-2 z-10">
            <button
              onClick={handleCopy}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={copied ? 'Copied!' : 'Copy code'}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        )}

        <div
          className={`transition-all duration-300 ${shouldCollapse ? 'overflow-auto' : 'overflow-hidden'}`}
          style={shouldCollapse ? { maxHeight: collapsedHeight } : undefined}
        >
          <div className="overflow-x-auto flex">
            {showLineNumbers && (
              <div
                className="flex-none select-none text-right text-sm font-mono text-muted-foreground py-4 pl-4 pr-5"
                aria-hidden="true"
              >
                {Array.from({ length: lineCount }, (_, i) => (
                  <div key={i} className="leading-6">
                    {i + 1}
                  </div>
                ))}
              </div>
            )}

            <div className="flex-1 min-w-0 overflow-x-auto">
              <div
                className="shiki-light block dark:hidden"
                style={!showLineNumbers ? { paddingLeft: '1rem' } : undefined}
                dangerouslySetInnerHTML={{ __html: lightHtml }}
              />
              <div
                className="shiki-dark hidden dark:block"
                style={!showLineNumbers ? { paddingLeft: '1rem' } : undefined}
                dangerouslySetInnerHTML={{ __html: darkHtml }}
              />
            </div>
          </div>
        </div>

        {/* Expand/collapse button in bottom right corner */}
        {isCollapsible && (
          <div className="absolute bottom-2 right-2 z-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={isExpanded ? 'Collapse code' : 'Expand code'}
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
