import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { StatCard } from "@/components/StatCard";
import { AccentUnderline } from "@/components/ui/Underline";
import { stats } from "@/lib/data";

const benefits = [
  {
    title: "Instructors who teach for a living",
    body: "Every instructor is vetted across three rounds. We turn down nine in ten."
  },
  {
    title: "Lessons that respect your time",
    body: "Short, edited videos paired with exercises. No filler, no padding."
  },
  {
    title: "Honest signals of progress",
    body: "Verified certificates, real projects, and feedback you can use."
  },
  {
    title: "A library that doesn't expire",
    body: "Lifetime access to every course you start — including future updates."
  }
];

export function WhyChooseUs() {
  return (
    <Section tone="cream-light">
      <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeUp className="lg:col-span-6">
          <h2 className="font-display text-display-lg font-extrabold">
            Why learners <AccentUnderline>choose</AccentUnderline> us
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            We've spent years quietly making this platform the one learners
            actually finish.
          </p>

          <ul className="mt-10 flex flex-col gap-7">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow"
                >
                  <Check className="h-4 w-4 text-indigo-deep" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-indigo">
                    {b.title}
                  </div>
                  <p className="mt-1 text-[15.5px] leading-relaxed text-ink/75">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.08} className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <div className="mt-4 rounded-card border border-indigo/10 bg-indigo p-7 text-cream">
            <p className="font-display text-2xl font-bold leading-snug text-cream">
              "Six months in and I've shipped two ML models into production."
            </p>
            <p className="mt-3 text-sm text-cream/70">
              Jonas Weber · Software Engineer, Brightline
            </p>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
