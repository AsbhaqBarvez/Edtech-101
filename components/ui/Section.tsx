import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Props = React.HTMLAttributes<HTMLElement> & {
  bare?: boolean;
  tone?: "cream" | "cream-light" | "indigo" | "transparent";
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  cream: "bg-cream",
  "cream-light": "bg-cream-light",
  indigo: "bg-indigo text-cream",
  transparent: ""
};

export function Section({
  className,
  tone = "transparent",
  bare = false,
  children,
  ...props
}: Props) {
  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32", toneClass[tone], className)}
      {...props}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
