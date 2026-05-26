import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "yellow" | "indigo" | "muted" | "outline";

type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant };

const variants: Record<Variant, string> = {
  yellow: "bg-yellow-soft text-indigo-deep",
  indigo: "bg-indigo text-cream",
  muted: "bg-muted/10 text-muted",
  outline: "border border-indigo/20 text-indigo"
};

export function Badge({ className, variant = "yellow", ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
