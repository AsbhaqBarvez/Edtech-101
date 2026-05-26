"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-2 rounded-input border border-cream/15 bg-cream/5 px-3.5 py-2.5 text-sm text-cream/85">
        <CheckCircle2 className="h-4 w-4 text-yellow" aria-hidden />
        Thanks — please confirm in your inbox.
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      aria-label="Subscribe to newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label
        htmlFor="newsletter-email"
        className="text-sm font-medium text-cream"
      >
        Get our monthly letter
      </label>
      <div className="flex w-full max-w-sm overflow-hidden rounded-input border border-cream/15 bg-cream/5">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@work.com"
          className="h-11 flex-1 bg-transparent px-3.5 text-[15px] text-cream placeholder:text-cream/50 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 bg-yellow px-4 text-sm font-semibold text-indigo-deep transition-colors hover:bg-[#FFD86A]"
        >
          Subscribe
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
