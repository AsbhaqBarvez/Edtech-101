import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

export function Testimonials() {
  return (
    <Section>
      <FadeUp className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-display-lg font-extrabold">
          What learners say
        </h2>
        <p className="mt-4 text-lg text-ink/75">
          Unedited words from people using the platform every week.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.05} className="h-full">
            <TestimonialCard t={t} />
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
