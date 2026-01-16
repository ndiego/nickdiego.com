import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start gap-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/speaking"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Talks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href="https://x.com/nickmdiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/nickdiego.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bluesky
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nickmdiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://profiles.wordpress.org/ndiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ndiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          </div>
          <ThemeToggle />
        </div>

        <div className="pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© {currentYear} Nick Diego. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
