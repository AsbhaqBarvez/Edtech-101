import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

export function FeaturedCourses() {
  const featured = courses.slice(0, 4);
  return (
    <Section>
      <FadeUp className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h2 className="font-display text-display-lg font-extrabold">
            Featured courses
          </h2>
          <p className="mt-3 text-lg text-ink/75">
            Hand-picked this quarter by our content team.
          </p>
        </div>
        <Link
          href="/courses"
          className="group inline-flex items-center gap-1 text-[15px] font-semibold text-indigo hover:text-indigo-deep"
        >
          See all courses
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </FadeUp>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((c, i) => (
          <FadeUp key={c.slug} delay={i * 0.04} className="h-full">
            <CourseCard course={c} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
