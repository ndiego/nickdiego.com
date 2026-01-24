import { Link } from "@/components/ui/link";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="mt-8 md:mt-16">
      <div className="max-w-2xl mx-auto px-6 py-6 md:py-12">
        <div className="flex justify-between items-start gap-8 mb-12">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="font-medium mb-4">Explore</h3>
              <ul className="text-sm">
                <li>
                  <Link href="/about" variant="muted" className="block py-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/writing" variant="muted" className="block py-1">
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/projects" variant="muted" className="block py-1">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/speaking" variant="muted" className="block py-1">
                    Speaking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="text-sm">
                <li>
                  <Link
                    href="https://x.com/nickmdiego"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="muted"
                    className="block py-1"
                  >
                    X
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/ndiego"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="muted"
                    className="block py-1"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/in/nickmdiego"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="muted"
                    className="block py-1"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://bsky.app/profile/nickdiego.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="muted"
                    className="block py-1"
                  >
                    Bluesky
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://profiles.wordpress.org/ndiego"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="muted"
                    className="block py-1"
                  >
                    WordPress
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <div className="pt-8 border-t border-border text-xs text-muted-foreground">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Nick Diego. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
