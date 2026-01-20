"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CopyButton({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCopy}
          className="h-8 w-8 text-muted-foreground bg-card opacity-90 hover:opacity-100"
          aria-label={copied ? "Copied to clipboard" : "Copy code"}
        >
          <span className="relative h-4 w-4">
            <Copy
              className={`absolute inset-0 h-4 w-4 transition-all duration-200 ease-out ${
                copied ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <Check
              className={`absolute inset-0 h-4 w-4 transition-all duration-200 ease-out ${
                copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            />
          </span>
          <span className="sr-only" aria-live="polite">
            {copied ? "Copied to clipboard" : ""}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied" : "Copy"}</TooltipContent>
    </Tooltip>
  );
}

function ExpandButton({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 text-muted-foreground bg-card opacity-90 hover:opacity-100"
          aria-label={isExpanded ? "Collapse code" : "Expand code"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isExpanded ? "Collapse" : "Expand"}</TooltipContent>
    </Tooltip>
  );
}

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

  const handleToggleExpand = () => setIsExpanded(!isExpanded);

  // Calculate max height based on line count (1.5rem line height + padding)
  const collapsedHeight = maxLines ? `${maxLines * 1.5 + 2}rem` : undefined;

  return (
    <div className="code-block relative my-6 rounded-md overflow-hidden border border-border">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
          <span className="text-sm text-muted-foreground font-mono">
            {filename}
          </span>
          <div className="-mr-2">
            <CopyButton copied={copied} onCopy={handleCopy} />
          </div>
        </div>
      )}

      <div className="relative bg-card">
        {!filename && (
          <div className="absolute top-2 right-2 z-10">
            <CopyButton copied={copied} onCopy={handleCopy} />
          </div>
        )}

        <div
          className={shouldCollapse ? "overflow-auto" : "overflow-hidden"}
          style={shouldCollapse ? { maxHeight: collapsedHeight } : undefined}
        >
          <div className="overflow-x-auto flex">
            {showLineNumbers && (
              <div
                className="line-numbers flex-none select-none text-right font-mono text-muted-foreground py-4 pl-4 pr-5"
                aria-hidden="true"
              >
                {Array.from({ length: lineCount }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
            )}

            <div className="flex-1 min-w-0 overflow-x-auto">
              <div
                className="shiki-light block dark:hidden"
                style={!showLineNumbers ? { paddingLeft: "1rem" } : undefined}
                dangerouslySetInnerHTML={{ __html: lightHtml }}
              />
              <div
                className="shiki-dark hidden dark:block"
                style={!showLineNumbers ? { paddingLeft: "1rem" } : undefined}
                dangerouslySetInnerHTML={{ __html: darkHtml }}
              />
            </div>
          </div>
        </div>

        {isCollapsible && (
          <div className="absolute bottom-2 right-2 z-10">
            <ExpandButton
              isExpanded={isExpanded}
              onToggle={handleToggleExpand}
            />
          </div>
        )}
      </div>
    </div>
  );
}
