import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  BarChart3,
  Award,
  Globe,
  ChevronRight,
  PlayCircle,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.summary
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const related = courses
    .filter((c) => c.categorySlug === course.categorySlug && c.slug !== course.slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-cream-light pt-12 md:pt-16">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-sm text-muted"
          >
            <Link href="/courses" className="hover:text-indigo">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <Link
              href={`/courses?category=${course.categorySlug}`}
              className="hover:text-indigo"
            >
              {course.category}
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <span className="text-ink/80">{course.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Badge variant="yellow">{course.category}</Badge>
              <h1 className="mt-4 font-display text-display-lg font-extrabold">
                {course.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
                {course.summary}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/80">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow text-yellow" aria-hidden />
                  <span className="font-semibold text-indigo-deep">
                    {course.rating}
                  </span>
                  <span className="text-muted">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-muted" aria-hidden />
                  {course.durationHours} hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4 text-muted" aria-hidden />
                  {course.level}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-muted" aria-hidden />
                  English · 12 languages
                </span>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <Image
                  src={`https://i.pravatar.cc/96?u=${course.instructor}`}
                  alt={`Portrait of ${course.instructor}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-indigo-deep">
                    Taught by {course.instructor}
                  </div>
                  <div className="text-sm text-muted">{course.instructorTitle}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="overflow-hidden">
                <div className="relative aspect-video w-full bg-muted/10">
                  <Image
                    src={course.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <button
                    type="button"
                    aria-label="Preview course"
                    className="absolute inset-0 flex items-center justify-center bg-indigo-deep/30 transition-colors hover:bg-indigo-deep/40"
                  >
                    <PlayCircle className="h-14 w-14 text-cream" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-indigo">
                      {formatPrice(course.price)}
                    </span>
                    <span className="text-sm text-muted">one-time</span>
                  </div>
                  <Button variant="primary-yellow" size="lg">
                    Enroll now
                  </Button>
                  <Button variant="outline" size="lg">
                    Add to wishlist
                  </Button>
                  <ul className="mt-2 flex flex-col gap-2 text-sm text-ink/75">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden />
                      Lifetime access
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-indigo" aria-hidden />
                      Verified certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden />
                      14-day refund window
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-display-md font-extrabold">
              What you'll learn
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {course.whatYoullLearn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow" aria-hidden />
                  <span className="text-[15.5px] leading-relaxed text-ink/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-display-md font-extrabold">
              Course content
            </h2>
            <p className="mt-2 text-muted">
              {course.modules.length} modules ·{" "}
              {course.modules.reduce((acc, m) => acc + m.lessons, 0)} lessons ·{" "}
              {course.durationHours} hours
            </p>
            <ol className="mt-6 divide-y divide-muted/15 rounded-card border border-muted/15 bg-cream-light">
              {course.modules.map((m, i) => (
                <li key={m.title} className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-extrabold text-indigo/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-lg font-bold text-indigo">
                        {m.title}
                      </div>
                      <div className="text-sm text-muted">
                        {m.lessons} lessons · {m.minutes} min
                      </div>
                    </div>
                  </div>
                  <PlayCircle className="h-6 w-6 text-muted" aria-hidden />
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-5">
            <Card className="p-7">
              <h3 className="font-display text-xl font-bold text-indigo">
                Tagged with
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>

              <h3 className="mt-8 font-display text-xl font-bold text-indigo">
                Who this is for
              </h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/80">
                <li>Practitioners moving into a more senior role</li>
                <li>Engineers, designers, and analysts cross-training</li>
                <li>Anyone who values short, well-edited lessons</li>
              </ul>
            </Card>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="cream-light">
          <h2 className="font-display text-display-md font-extrabold">
            More in {course.category}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
