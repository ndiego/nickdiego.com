import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Alignment = "left" | "center" | "right";

export interface LinkButtonProps {
  href: string;
  children: ReactNode;
  align?: Alignment;
}

const alignmentClasses: Record<Alignment, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export function LinkButton({
  href,
  children,
  align = "left",
}: LinkButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <div className={`flex ${alignmentClasses[align]}`}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
      >
        {children}
        <ArrowUpRight className="size-4" />
      </a>
    </div>
  );
}
