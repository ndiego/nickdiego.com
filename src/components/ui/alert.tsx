import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-md border px-4 py-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border-border [&>svg]:text-foreground",
        note: "border-blue-200 bg-blue-50/70 text-foreground dark:border-blue-900 dark:bg-blue-950/40 [&>svg]:text-blue-500",
        tip: "border-green-200 bg-green-50/70 text-foreground dark:border-green-900 dark:bg-green-950/40 [&>svg]:text-green-500",
        important:
          "border-purple-200 bg-purple-50/70 text-foreground dark:border-purple-900 dark:bg-purple-950/40 [&>svg]:text-purple-500",
        warning:
          "border-amber-200 bg-amber-50/70 text-foreground dark:border-amber-900 dark:bg-amber-950/40 [&>svg]:text-amber-500",
        caution:
          "border-red-200 bg-red-50/70 text-foreground dark:border-red-900 dark:bg-red-950/40 [&>svg]:text-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm [&_p]:leading-relaxed [&_p:last-child]:mb-0",
      className,
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
