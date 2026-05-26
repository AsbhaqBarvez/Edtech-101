import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/StatCard";
import { AccentUnderline } from "@/components/ui/Underline";
import { FadeUp } from "@/components/ui/FadeUp";
import { team, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MantranaEdutech — an India-first learning platform built around the courses, instructors, and quiet craft that actually change careers."
};

const values = [
  {
    title: "Edit ruthlessly",
    body:
      "Most online courses are too long. We push every minute through three rounds of editing before it ships."
  },
  {
    title: "Respect the learner",
    body:
      "Clear pricing, lifetime access, and the kind of UI you don't notice. The lesson should be the main character."
  },
  {
    title: "Hire instructors slowly",
    body:
      "We turn down nine in ten instructor applications. The ones we accept stay with us for years."
  },
  {
    title: "Build for the long run",
    body:
      "We've been profitable since year three. We don't take growth-at-all-costs money, and it shows in the product."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream-light pt-14 md:pt-20">
        <Container>
          <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-xl font-extrabold">
                The quiet craft of <AccentUnderline>good</AccentUnderline>{" "}
                teaching.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
                MantranaEdutech — from the Sanskrit{" "}
                <em className="not-italic font-medium text-indigo-deep">
                  mantraṇa
                </em>
                , meaning counsel — began in 2020 with one course, three
                instructors, and a small editing room in Indiranagar,
                Bengaluru. We've grown deliberately, never much faster than we
                could keep the bar high, and today serve over two million
                learners across 150+ Indian cities and 60 countries.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-muted/15 shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="A small team collaborating around a table"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <FadeUp className="max-w-3xl">
          <h2 className="font-display text-display-lg font-extrabold">
            What we believe
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            A short set of principles we come back to when decisions are hard.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.04} className="h-full">
              <Card className="h-full p-7">
                <h3 className="font-display text-xl font-bold text-indigo">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink/75">
                  {v.body}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="cream-light">
        <FadeUp className="max-w-2xl">
          <h2 className="font-display text-display-lg font-extrabold">
            By the numbers
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            Where we are at the end of our seventh year.
          </p>
        </FadeUp>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <Section>
        <FadeUp className="max-w-2xl">
          <h2 className="font-display text-display-lg font-extrabold">
            The leadership team
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            A small group who care about teaching more than the average startup
            cares about anything.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, i) => (
            <FadeUp key={person.name} delay={i * 0.04}>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-card border border-muted/15">
                  <Image
                    src={person.avatar}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-indigo">
                    {person.name}
                  </div>
                  <div className="text-sm text-muted">{person.role}</div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">
                    {person.bio}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
