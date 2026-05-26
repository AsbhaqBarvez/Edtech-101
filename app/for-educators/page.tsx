import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Users, DollarSign, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AccentUnderline } from "@/components/ui/Underline";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "For Educators",
  description:
    "Teach with Lumen. We work closely with a small number of instructors each year — editing, producing, and promoting their courses with real care."
};

const supportPoints = [
  {
    icon: MessageSquare,
    title: "A real editorial partner",
    body: "Our content team works with you through outlining, scripting, and review. Think of us as a film editor with a soft spot for teaching."
  },
  {
    icon: Users,
    title: "Production we cover",
    body: "We handle filming, sound, and post-production at our studios in NYC and Lisbon — or remotely with our kit."
  },
  {
    icon: DollarSign,
    title: "Revenue share that respects you",
    body: "Industry-leading royalty rates, transparent dashboards, and prompt monthly payouts."
  }
];

const requirements = [
  "5+ years of practitioner experience in your field",
  "A clear point of view that you've earned the right to teach",
  "Comfortable on camera, or willing to learn quickly",
  "Excited to answer learner questions through the run of your course"
];

export default function ForEducatorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-light to-cream pt-14 md:pt-20">
        <Container>
          <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-xl font-extrabold">
                Teach what you've spent years{" "}
                <AccentUnderline>learning</AccentUnderline>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                We work with around 40 instructors a year. The bar is high, but
                so is the support — and the courses we ship together tend to
                stay near the top of their categories for a long time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary-yellow" size="lg">
                  Apply to teach
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  Read our editorial standards
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-muted/15 shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                  alt="An instructor recording a lesson in a studio"
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="cream-light">
        <FadeUp className="max-w-2xl">
          <h2 className="font-display text-display-lg font-extrabold">
            How we support our instructors
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            We treat teaching like the craft it is. Here's what working with
            Lumen looks like in practice.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {supportPoints.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.title} delay={i * 0.05} className="h-full">
                <Card className="flex h-full flex-col gap-4 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-yellow-soft text-indigo">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold text-indigo">
                    {s.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-ink/75">
                    {s.body}
                  </p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-6">
            <h2 className="font-display text-display-lg font-extrabold">
              What we look for
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Most instructor applications don't make it. The ones that do tend
              to share a few things.
            </p>
            <ul className="mt-8 flex flex-col gap-5">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow" aria-hidden />
                  <span className="text-[16px] leading-relaxed text-ink/85">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.06} className="lg:col-span-6">
            <Card className="p-8">
              <h3 className="font-display text-xl font-bold text-indigo">
                A note from our content team
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/80">
                "We've turned down brilliant practitioners because the timing
                wasn't right, and we've green-lit first-time teachers because
                their point of view was sharp. We read every application closely
                — please tell us what you'd actually teach, not just what you
                can."
              </p>
              <p className="mt-5 text-sm text-muted">
                — Naomi Park, Head of Content
              </p>
            </Card>
          </FadeUp>
        </div>
      </Section>

      <Section tone="indigo">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-display-lg font-extrabold text-cream">
              Ready to share what you know?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-cream/80">
              Applications take about 20 minutes. We respond to every one
              within two weeks.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button href="/contact" variant="primary-yellow" size="lg">
              Apply to teach
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
