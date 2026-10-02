import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Shared date formatter for consistent date display across components
export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  // Frontmatter dates are parsed as midnight UTC. Format in UTC so the day
  // doesn't shift when the build or dev server runs in another timezone.
  timeZone: "UTC",
});
