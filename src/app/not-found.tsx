import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-6xl font-medium mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 font-medium bg-primary text-primary-foreground rounded-md hover:opacity-80 transition-opacity"
      >
        Go home
      </Link>
    </div>
  );
}
