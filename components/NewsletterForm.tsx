"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export function NewsletterForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pending, startTransition] = React.useTransition();
  const formRef = React.useRef<HTMLFormElement>(null);

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-2 rounded-input border border-cream/15 bg-cream/5 px-3.5 py-2.5 text-sm text-cream/85">
        <CheckCircle2 className="h-4 w-4 text-yellow" aria-hidden />
        Thanks — we'll be in touch soon.
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-2"
      aria-label="Subscribe to newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.currentTarget);
        startTransition(async () => {
          const result = await subscribeToNewsletter(formData);
          if (result.ok) {
            setSubmitted(true);
            formRef.current?.reset();
          } else {
            setError(result.message ?? "Something went wrong.");
          }
        });
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
          name="email"
          type="email"
          required
          placeholder="you@work.com"
          className="h-11 flex-1 bg-transparent px-3.5 text-[15px] text-cream placeholder:text-cream/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-1 bg-yellow px-4 text-sm font-semibold text-indigo-deep transition-colors hover:bg-[#FFD86A] disabled:opacity-70"
        >
          {pending ? "..." : "Subscribe"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
      {error && (
        <p
          role="alert"
          className="mt-1 inline-flex items-center gap-1.5 text-xs text-yellow"
        >
          <AlertCircle className="h-3.5 w-3.5" aria-hidden />
          {error}
        </p>
      )}
    </form>
  );
}
