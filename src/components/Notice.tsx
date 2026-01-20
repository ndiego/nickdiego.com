import { ReactNode } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Info,
  Lightbulb,
  Sparkles,
  TriangleAlert,
  CircleAlert,
} from "lucide-react";

type NoticeType = "note" | "tip" | "important" | "warning" | "caution";

interface NoticeProps {
  type?: NoticeType;
  children: ReactNode;
}

const icons: Record<NoticeType, typeof Info> = {
  note: Info,
  tip: Lightbulb,
  important: Sparkles,
  warning: TriangleAlert,
  caution: CircleAlert,
};

export function Notice({ type = "note", children }: NoticeProps) {
  const Icon = icons[type];

  return (
    <Alert variant={type} className="my-6">
      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
