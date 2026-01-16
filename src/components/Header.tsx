import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="py-8">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-6">
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          <Image
            src="/avatar.jpg"
            alt="Nick Diego"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="font-medium">Nick Diego</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Posts
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Projects
          </Link>
          <Link
            href="/speaking"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Talks
          </Link>
        </nav>
      </div>
      <hr className="mt-8 border-border" />
    </header>
  );
}
