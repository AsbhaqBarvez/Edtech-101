import Image from "next/image";
import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Course } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card interactive accent className="group overflow-hidden">
      <Link
        href={`/courses/${course.slug}`}
        className="block focus:outline-none"
        aria-label={course.title}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/10">
          <Image
            src={course.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-center justify-between">
            <Badge variant="yellow">{course.category}</Badge>
            <span className="text-sm font-semibold text-indigo">
              {formatPrice(course.price)}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-indigo">
            {course.title}
          </h3>
          <p className="text-sm text-muted">By {course.instructor}</p>
          <div className="mt-1 flex items-center gap-4 text-sm text-ink/70">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow text-yellow" aria-hidden />
              <span className="font-semibold text-indigo-deep">
                {course.rating}
              </span>
              <span className="text-muted">({course.reviews.toLocaleString()})</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted" aria-hidden />
              {course.durationHours}h
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
