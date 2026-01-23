import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center space-y-6">
      <h1 className="text-6xl font-medium mono">404</h1>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Link
        href="/"
        className="inline-block text-sm px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full hover:opacity-80 transition-opacity"
      >
        Return home
      </Link>
    </div>
  );
}
