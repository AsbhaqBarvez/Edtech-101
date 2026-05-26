import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { AccentUnderline } from "@/components/ui/Underline";

export function EducatorsCTA() {
  return (
    <Section tone="indigo" className="py-24 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <FadeUp className="md:col-span-8">
          <h2 className="font-display text-display-lg font-extrabold text-cream">
            Teach what you've spent years <AccentUnderline>learning</AccentUnderline>.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">
            We work closely with a small number of instructors each year — editing,
            producing, and promoting their courses with real care. If you have
            something worth teaching, we'd like to hear from you.
          </p>
        </FadeUp>
        <FadeUp delay={0.08} className="md:col-span-4 md:text-right">
          <Button href="/for-educators" variant="primary-yellow" size="lg">
            Become an instructor
          </Button>
        </FadeUp>
      </div>
    </Section>
  );
}
