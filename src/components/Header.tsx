"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-6 md:py-8 mb-2 md:mb-8">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-6">
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          <Image
            src="/images/avatar.png"
            alt="Nick Diego"
            width={48}
            height={48}
            className="rounded-full sm:hidden"
          />
          <span className="font-medium hidden sm:block">Nick Diego</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center gap-5">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/writing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/speaking"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Speaking
          </Link>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="text-base font-medium">Nick Diego</SheetTitle>
            <nav className="flex flex-col gap-2 mt-8">
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/writing"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Writing
              </Link>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/speaking"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Talks
              </Link>
            </nav>

            <div className="flex flex-col gap-2 mt-8 pt-8 border-t border-border">
              <a
                href="https://x.com/nickmdiego"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                X
              </a>
              <a
                href="https://github.com/ndiego"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nickmdiego"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://bsky.app/profile/nickdiego.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Bluesky
              </a>
              <a
                href="https://profiles.wordpress.org/ndiego"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                WordPress
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
