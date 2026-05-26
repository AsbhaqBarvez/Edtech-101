"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AccentUnderline } from "@/components/ui/Underline";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-light to-cream pt-14 md:pt-20">
      <Container>
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo/15 bg-cream-light px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo"
            >
              <Sparkles className="h-3.5 w-3.5 text-yellow" aria-hidden />
              New: Spring 2026 cohort courses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-display-xl font-extrabold text-indigo"
            >
              Learn the <AccentUnderline>skills</AccentUnderline> that move
              careers forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75"
            >
              Hands-on courses from instructors who teach the way working
              practitioners actually think. No filler, no fluff, no week-three
              dropout cliff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="/pricing" variant="primary-yellow" size="lg">
                Start learning free
              </Button>
              <Button href="/courses" variant="outline" size="lg">
                Browse courses
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-10 flex items-center gap-3 text-sm text-muted"
            >
              <div className="flex -space-x-2">
                {[47, 12, 32, 23].map((id) => (
                  <Image
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <span>
                Joined by{" "}
                <span className="font-semibold text-indigo-deep">2M+ learners</span>{" "}
                worldwide
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <HeroComposition />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-card border border-muted/15 bg-cream-light p-4 shadow-card"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-muted/10">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Course preview: Applied Machine Learning"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            priority
          />
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-yellow-soft px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-indigo-deep">
            Data Science
          </div>
        </div>
        <div className="mt-4 px-1">
          <h3 className="font-display text-lg font-bold text-indigo">
            Applied Machine Learning with Python
          </h3>
          <p className="mt-1 text-sm text-muted">
            Dr. Hannah Okafor · 42 hours
          </p>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow text-yellow" aria-hidden />
              <span className="font-semibold text-indigo-deep">4.9</span>
              <span className="text-muted">(3.1k)</span>
            </span>
            <span className="text-indigo">·</span>
            <span className="font-semibold text-indigo">$89</span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted/15">
            <div className="h-full w-2/3 rounded-full bg-yellow" />
          </div>
          <div className="mt-2 text-xs text-muted">Module 4 of 5 · 64% complete</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 -top-4 hidden items-center gap-2 rounded-full bg-indigo px-3.5 py-2 text-sm text-cream shadow-card sm:inline-flex"
      >
        <CheckCircle2 className="h-4 w-4 text-yellow" aria-hidden />
        Lesson complete
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-6 -left-4 hidden rounded-card border border-muted/15 bg-cream-light p-4 shadow-card sm:block"
      >
        <div className="font-display text-3xl font-extrabold text-indigo">
          94%
        </div>
        <div className="text-xs text-muted">Completion rate</div>
      </motion.div>
    </div>
  );
}
