"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type Tab = { id: string; label: string; content: React.ReactNode };

type Props = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
};

export function Tabs({ tabs, defaultTab, className }: Props) {
  const [active, setActive] = React.useState(defaultTab ?? tabs[0]?.id);

  return (
    <div className={className}>
      <div
        role="tablist"
        className="flex flex-wrap items-center gap-1 rounded-card border border-muted/15 bg-cream-light p-1"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "bg-indigo text-cream"
                  : "text-ink/70 hover:bg-indigo/5"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            active === tab.id && (
              <div key={tab.id} role="tabpanel">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
