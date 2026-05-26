import { Suspense } from "react";
import type { Metadata } from "next";
import { CoursesBrowser } from "@/components/CoursesBrowser";
import { Container } from "@/components/ui/Container";
import { AccentUnderline } from "@/components/ui/Underline";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse the full MantranaEdutech catalog — curated tracks across data science, design, business, engineering, languages, and personal growth."
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-cream-light pb-10 pt-14 md:pb-14 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display text-display-lg font-extrabold">
              The full <AccentUnderline>catalog</AccentUnderline>
            </h1>
            <p className="mt-4 text-lg text-ink/75">
              Filter by category, level, or duration. Every course is taught by a
              working practitioner and edited by our content team.
            </p>
          </div>
        </Container>
      </section>
      <Suspense fallback={null}>
        <CoursesBrowser />
      </Suspense>
    </>
  );
}
