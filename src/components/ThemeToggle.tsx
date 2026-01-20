"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`h-8 w-8 ${
          mounted && theme === "light"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light theme"
      >
        <Sun aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={`h-8 w-8 ${
          mounted && theme === "system"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="System theme"
      >
        <Monitor aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`h-8 w-8 ${
          mounted && theme === "dark"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark theme"
      >
        <Moon aria-hidden="true" />
      </Button>
    </div>
  );
}
