import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
  {
    n: "01",
    title: "Discover",
    body:
      "Browse curated tracks or search by topic. Every course has a clear scope, real instructor, and honest time estimate."
  },
  {
    n: "02",
    title: "Learn",
    body:
      "Short, edited lessons paired with practical exercises. Ask questions, get feedback, and finish what you start."
  },
  {
    n: "03",
    title: "Apply",
    body:
      "Build a portfolio of projects, earn verified certificates, and bring the work back to your day job."
  }
];

export function HowItWorks() {
  return (
    <Section tone="cream-light">
      <FadeUp className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-display-lg font-extrabold">
          How it works
        </h2>
        <p className="mt-4 text-lg text-ink/75">
          A simple path from curiosity to applied skill — without losing momentum.
        </p>
      </FadeUp>

      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((step, i) => (
          <FadeUp key={step.n} delay={i * 0.06} className="flex flex-col gap-4">
            <div className="font-display text-6xl font-extrabold text-indigo/90 md:text-7xl">
              {step.n}
            </div>
            <h3 className="font-display text-2xl font-bold text-indigo">
              {step.title}
            </h3>
            <p className="text-[15.5px] leading-relaxed text-ink/75">
              {step.body}
            </p>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
