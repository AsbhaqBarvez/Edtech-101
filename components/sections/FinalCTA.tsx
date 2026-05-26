import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { AccentUnderline } from "@/components/ui/Underline";

export function FinalCTA() {
  return (
    <Section tone="cream" className="py-24 md:py-32">
      <FadeUp className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-display-lg font-extrabold">
          Make this the year you actually <AccentUnderline>finish</AccentUnderline>{" "}
          something.
        </h2>
        <p className="mt-5 text-lg text-ink/75">
          Start with one course this week. Free, no credit card, no upsell.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="/pricing" variant="primary-yellow" size="lg">
            Start learning free
          </Button>
          <Button href="/courses" variant="outline" size="lg">
            Browse courses
          </Button>
        </div>
      </FadeUp>
    </Section>
  );
}
