"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/CourseCard";
import { categories, courses } from "@/lib/data";
import { cn } from "@/lib/utils";

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const durations = [
  { id: "any", label: "Any duration", min: 0, max: Infinity },
  { id: "short", label: "Under 10h", min: 0, max: 10 },
  { id: "medium", label: "10–25h", min: 10, max: 25 },
  { id: "long", label: "25h+", min: 25, max: Infinity }
];

export function CoursesBrowser() {
  const params = useSearchParams();
  const initialCat = params?.get("category") ?? "all";

  const [category, setCategory] = React.useState<string>(initialCat);
  const [level, setLevel] = React.useState<(typeof levels)[number]>("All");
  const [duration, setDuration] = React.useState<string>("any");
  const [query, setQuery] = React.useState<string>("");

  React.useEffect(() => {
    if (initialCat) setCategory(initialCat);
  }, [initialCat]);

  const filtered = React.useMemo(() => {
    const durRange = durations.find((d) => d.id === duration)!;
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      if (category !== "all" && c.categorySlug !== category) return false;
      if (level !== "All" && c.level !== level) return false;
      if (c.durationHours < durRange.min || c.durationHours >= durRange.max)
        return false;
      if (
        q &&
        !(
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
        )
      )
        return false;
      return true;
    });
  }, [category, level, duration, query]);

  return (
    <section className="border-t border-muted/15 bg-cream py-12 md:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 flex flex-col gap-8">
              <div>
                <label className="text-sm font-medium text-indigo-deep" htmlFor="course-search">
                  Search
                </label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                    aria-hidden
                  />
                  <input
                    id="course-search"
                    type="search"
                    placeholder="Topics, instructors..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-11 w-full rounded-input border border-muted/40 bg-cream-light pl-9 pr-3 text-[15px] text-ink placeholder:text-muted focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/30"
                  />
                </div>
              </div>

              <FilterGroup title="Category">
                <FilterChip
                  active={category === "all"}
                  onClick={() => setCategory("all")}
                  label="All categories"
                />
                {categories.map((c) => (
                  <FilterChip
                    key={c.slug}
                    active={category === c.slug}
                    onClick={() => setCategory(c.slug)}
                    label={c.title}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Level">
                {levels.map((l) => (
                  <FilterChip
                    key={l}
                    active={level === l}
                    onClick={() => setLevel(l)}
                    label={l}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Duration">
                {durations.map((d) => (
                  <FilterChip
                    key={d.id}
                    active={duration === d.id}
                    onClick={() => setDuration(d.id)}
                    label={d.label}
                  />
                ))}
              </FilterGroup>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted">
                Showing{" "}
                <span className="font-semibold text-indigo-deep">
                  {filtered.length}
                </span>{" "}
                course{filtered.length === 1 ? "" : "s"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-card border border-muted/20 bg-cream-light p-10 text-center">
                <p className="font-display text-xl font-bold text-indigo">
                  No matches yet
                </p>
                <p className="mt-2 text-ink/70">
                  Try widening your filters or clearing the search.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FilterGroup({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-indigo bg-indigo text-cream"
          : "border-muted/30 bg-cream-light text-ink/75 hover:border-indigo/40 hover:text-indigo"
      )}
    >
      {label}
    </button>
  );
}
