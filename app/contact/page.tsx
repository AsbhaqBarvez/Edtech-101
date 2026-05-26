import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AccentUnderline } from "@/components/ui/Underline";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageSquare, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumen — for support, partnerships, press, or to apply to teach."
};

const channels = [
  {
    icon: MessageSquare,
    title: "Support",
    body: "Logged in to Lumen? The fastest path is the help widget inside your dashboard.",
    email: "help@lumen.example.com"
  },
  {
    icon: Briefcase,
    title: "Partnerships & press",
    body: "Working on something we should know about? We read every email.",
    email: "hello@lumen.example.com"
  },
  {
    icon: Mail,
    title: "Instructor applications",
    body: "Reviewed by our content team. We respond to every application within two weeks.",
    email: "teach@lumen.example.com"
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-light pt-14 md:pt-20">
        <Container>
          <div className="max-w-3xl pb-14 md:pb-20">
            <h1 className="font-display text-display-xl font-extrabold">
              Let's <AccentUnderline>talk</AccentUnderline>.
            </h1>
            <p className="mt-5 text-lg text-ink/75">
              Drop us a note below. For specific inquiries, the channels on the
              right will route you faster.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-10">
              <ContactForm />
            </Card>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-yellow-soft text-indigo">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-indigo">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-ink/75">
                          {c.body}
                        </p>
                        <a
                          href={`mailto:${c.email}`}
                          className="mt-2 inline-block text-sm font-semibold text-indigo hover:text-indigo-deep"
                        >
                          {c.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
