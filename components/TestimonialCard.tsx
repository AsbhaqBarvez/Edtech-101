import Image from "next/image";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-5 border-indigo/15 p-7">
      <Quote className="h-7 w-7 text-yellow" aria-hidden />
      <p className="text-[17px] leading-relaxed text-ink/85">{t.quote}</p>
      <div className="mt-auto flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={`Portrait of ${t.name}`}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-indigo-deep">{t.name}</div>
          <div className="text-sm text-muted">{t.role}</div>
        </div>
      </div>
    </Card>
  );
}
