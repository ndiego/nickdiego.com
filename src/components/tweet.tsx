"use client";

import { useEffect, useRef } from "react";

interface TweetProps {
  id: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
        createTweet: (
          id: string,
          container: HTMLElement,
          options?: Record<string, unknown>,
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export function Tweet({ id }: TweetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const loadTwitterWidget = () => {
      if (window.twttr && containerRef.current) {
        window.twttr.widgets.createTweet(id, containerRef.current, {
          theme: document.documentElement.classList.contains("dark")
            ? "dark"
            : "light",
          dnt: true,
          align: "center",
        });
      }
    };

    if (window.twttr) {
      loadTwitterWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadTwitterWidget;
      document.body.appendChild(script);
    }
  }, [id]);

  return (
    <div
      ref={containerRef}
      className="my-8 flex justify-center rounded-md border border-border overflow-hidden bg-card [&>*]:!my-0"
    />
  );
}
