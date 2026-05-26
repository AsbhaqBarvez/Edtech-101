"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

type Props = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: Props) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-muted/15 rounded-card border border-muted/15 bg-cream-light", className)}>
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-yellow-soft/30 sm:px-7 sm:py-6"
            >
              <span className="font-display text-lg font-bold text-indigo sm:text-xl">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-indigo transition-transform duration-300 ease-out-soft",
                  expanded && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 text-[15.5px] leading-relaxed text-ink/80 sm:px-7">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
