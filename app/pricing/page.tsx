import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AccentUnderline } from "@/components/ui/Underline";
import { FadeUp } from "@/components/ui/FadeUp";
import { Accordion } from "@/components/ui/Accordion";
import { pricingPlans, faqs } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, fair pricing for individuals and teams. Free forever, or Pro for unlimited access. Teams plans available."
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream-light pt-14 md:pt-20">
        <Container>
          <FadeUp className="mx-auto max-w-3xl pb-14 text-center md:pb-20">
            <h1 className="font-display text-display-xl font-extrabold">
              <AccentUnderline>Pricing</AccentUnderline> that doesn't try to
              trick you.
            </h1>
            <p className="mt-5 text-lg text-ink/75">
              No bait-and-switch. No surprise renewals. Start free, upgrade when
              you're ready, cancel from your dashboard in a click.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream pb-24 md:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative flex h-full flex-col gap-6 p-8",
                  plan.highlight && "border-indigo bg-indigo text-cream"
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-deep">
                    Most popular
                  </span>
                )}
                <div>
                  <h3
                    className={cn(
                      "font-display text-2xl font-extrabold",
                      plan.highlight ? "text-cream" : "text-indigo"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[15px] leading-relaxed",
                      plan.highlight ? "text-cream/80" : "text-ink/70"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  {typeof plan.price === "number" ? (
                    <>
                      <span
                        className={cn(
                          "font-display text-5xl font-extrabold",
                          plan.highlight ? "text-cream" : "text-indigo"
                        )}
                      >
                        {plan.price === 0 ? "$0" : formatPrice(plan.price)}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          plan.highlight ? "text-cream/70" : "text-muted"
                        )}
                      >
                        {plan.cadence}
                      </span>
                    </>
                  ) : (
                    <span
                      className={cn(
                        "font-display text-5xl font-extrabold",
                        plan.highlight ? "text-cream" : "text-indigo"
                      )}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <Button
                  variant={plan.highlight ? "primary-yellow" : "secondary-indigo"}
                  size="lg"
                  href={plan.name === "Teams" ? "/contact" : "/contact"}
                >
                  {plan.cta}
                </Button>

                <ul
                  className={cn(
                    "mt-2 flex flex-col gap-3 text-[15px]",
                    plan.highlight ? "text-cream/90" : "text-ink/85"
                  )}
                >
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlight ? "text-yellow" : "text-indigo"
                        )}
                        strokeWidth={3}
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            All plans include lifetime access to courses you start while
            subscribed. Cancel anytime.
          </p>
        </Container>
      </section>

      <Section tone="cream-light">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-display-lg font-extrabold">
              Pricing FAQ
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              The questions we hear most often.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </Section>
    </>
  );
}
