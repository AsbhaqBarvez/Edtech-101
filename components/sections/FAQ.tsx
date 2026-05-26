import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

export function FAQ() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <FadeUp className="lg:col-span-4">
          <h2 className="font-display text-display-lg font-extrabold">
            Common questions
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            The answers we give friends and colleagues when they ask.
          </p>
        </FadeUp>
        <FadeUp delay={0.06} className="lg:col-span-8">
          <Accordion items={faqs} />
        </FadeUp>
      </div>
    </Section>
  );
}
