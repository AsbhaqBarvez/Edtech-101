import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Category } from "@/lib/data";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <Card interactive accent>
      <Link
        href={`/courses?category=${category.slug}`}
        className="flex h-full flex-col gap-4 p-6"
      >
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-yellow-soft text-indigo">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-muted transition-colors group-hover:text-indigo"
            aria-hidden
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-xl font-bold text-indigo">
            {category.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-ink/70">
            {category.description}
          </p>
        </div>
        <div className="mt-auto pt-3 text-sm font-medium text-muted">
          {category.courseCount} courses
        </div>
      </Link>
    </Card>
  );
}
