import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-card border border-indigo/10 bg-cream-light p-6",
        className
      )}
    >
      <div className="font-display text-4xl font-extrabold text-indigo md:text-5xl">
        {value}
      </div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
