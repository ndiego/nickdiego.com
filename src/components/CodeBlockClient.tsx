'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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

  const CopyButton = () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-8 w-8 text-muted-foreground"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{copied ? 'Copied' : 'Copy'}</TooltipContent>
    </Tooltip>
  );

  const ExpandButton = () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-8 w-8 text-muted-foreground"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isExpanded ? 'Collapse' : 'Expand'}</TooltipContent>
    </Tooltip>
  );

  return (
    <div className="code-block relative my-6 rounded-lg overflow-hidden border border-border">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
          <span className="text-sm text-muted-foreground font-mono">
            {filename}
          </span>
          <div className="-mr-2">
            <CopyButton />
          </div>
        </div>
      )}

      <div className="relative bg-card">
        {!filename && (
          <div className="absolute top-2 right-2 z-10">
            <CopyButton />
          </div>
        )}

        <div
          className={shouldCollapse ? 'overflow-auto' : 'overflow-hidden'}
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

        {isCollapsible && (
          <div className="absolute bottom-2 right-2 z-10">
            <ExpandButton />
          </div>
        )}
      </div>
    </div>
  );
}
