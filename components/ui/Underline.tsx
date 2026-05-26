import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export function AccentUnderline({ className, children, ...rest }: Props) {
  return (
    <span className={cn("accent-underline", className)} {...rest}>
      {children}
    </span>
  );
}
