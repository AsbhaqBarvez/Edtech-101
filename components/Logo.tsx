import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "indigo"
}: {
  className?: string;
  tone?: "indigo" | "cream";
}) {
  const color = tone === "indigo" ? "text-indigo" : "text-cream";
  const dot = tone === "indigo" ? "bg-yellow" : "bg-yellow";
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", color, className)}
      aria-label="MantranaEdutech, home"
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-indigo">
        <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
        MantranaEdutech
      </span>
    </Link>
  );
}
