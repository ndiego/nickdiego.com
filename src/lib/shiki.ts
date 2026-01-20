import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

export async function getHighlighter() {
  if (highlighter) {
    return highlighter;
  }

  if (highlighterPromise) {
    return highlighterPromise;
  }

  highlighterPromise = createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: [
      "javascript",
      "typescript",
      "jsx",
      "tsx",
      "json",
      "html",
      "css",
      "scss",
      "php",
      "bash",
      "shell",
      "markdown",
      "yaml",
      "python",
      "sql",
      "graphql",
      "diff",
      "plaintext",
    ],
  });

  highlighter = await highlighterPromise;
  return highlighter;
}

export async function highlightCode(
  code: string,
  lang: string = "plaintext",
): Promise<{ light: string; dark: string }> {
  const hl = await getHighlighter();

  // Normalize language names
  const normalizedLang = normalizeLanguage(lang);

  const light = hl.codeToHtml(code, {
    lang: normalizedLang,
    theme: "github-light",
  });

  const dark = hl.codeToHtml(code, {
    lang: normalizedLang,
    theme: "github-dark",
  });

  return { light, dark };
}

function normalizeLanguage(lang: string): string {
  const aliases: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    zsh: "bash",
    yml: "yaml",
    md: "markdown",
    py: "python",
    rb: "ruby",
    rs: "rust",
    "": "plaintext",
  };

  return aliases[lang.toLowerCase()] || lang.toLowerCase();
}
