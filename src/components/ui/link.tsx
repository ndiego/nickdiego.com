import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { MoveUpRightIcon } from "lucide-react";

interface LinkProps extends ComponentProps<typeof NextLink> {
  className?: string;
  variant?: "default" | "unstyled" | "external";
}

/**
 * Custom Link component with default styling
 *
 * By default, applies blue color and hover underline styling.
 * Use variant="unstyled" to remove default styling.
 * Use variant="external" to add external link icon and flex layout.
 *
 * @example
 * // Default blue link
 * <Link href="/cards">View Cards</Link>
 *
 * @example
 * // Override with custom styling
 * <Link href="/cards" className="text-red-600 font-bold">Custom Link</Link>
 *
 * @example
 * // Unstyled link (just Next.js Link behavior)
 * <Link href="/cards" variant="unstyled">Plain Link</Link>
 *
 * @example
 * // External link with icon
 * <Link href="https://example.com" variant="external">External Site</Link>
 */
export function Link({
  className,
  variant = "default",
  children,
  ...props
}: LinkProps) {
  const defaultStyles =
    variant === "default" || variant === "external"
      ? "text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 font-normal no-underline transition-colors"
      : "";

  const externalStyles =
    variant === "external" ? "inline-flex items-center gap-0.5" : "";

  return (
    <NextLink
      className={cn(defaultStyles, externalStyles, className)}
      {...props}
    >
      {children}
      {variant === "external" && <MoveUpRightIcon className="size-3" />}
    </NextLink>
  );
}
