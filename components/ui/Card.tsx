import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  accent?: boolean;
};

export function Card({
  className,
  interactive = false,
  accent = false,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "rounded-card border border-muted/15 bg-cream-light shadow-card transition-all duration-300 ease-out-soft",
        interactive &&
          "hover:-translate-y-1 hover:shadow-cardHover hover:border-muted/25",
        accent && "card-accent",
        className
      )}
      {...props}
    />
  );
}
