import { Container } from "@/components/ui/Container";
import { trustedBy } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

export function TrustBar() {
  return (
    <section className="border-y border-muted/15 bg-cream-light py-10">
      <Container>
        <FadeUp className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            Trusted by learners at
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-70">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="font-display text-lg font-bold text-indigo-deep/70 sm:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
}
