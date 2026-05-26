import { Section } from "@/components/ui/Section";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { AccentUnderline } from "@/components/ui/Underline";

export function FeaturedCategories() {
  return (
    <Section>
      <FadeUp className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-display-lg font-extrabold">
          Find your <AccentUnderline>path</AccentUnderline>
        </h2>
        <p className="mt-4 text-lg text-ink/75">
          Six curated tracks covering the skills professionals come back to learn,
          relearn, and teach to their teams.
        </p>
      </FadeUp>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <FadeUp key={cat.slug} delay={i * 0.04} className="h-full">
            <CategoryCard category={cat} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
