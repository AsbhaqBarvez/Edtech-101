"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { submitContact } from "@/app/actions/contact";

const topics = [
  { value: "support", label: "Product support" },
  { value: "teams", label: "Teams or enterprise" },
  { value: "teach", label: "Apply to teach" },
  { value: "press", label: "Press or partnerships" },
  { value: "other", label: "Something else" }
];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pending, startTransition] = React.useTransition();
  const formRef = React.useRef<HTMLFormElement>(null);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <CheckCircle2 className="h-8 w-8 text-yellow" aria-hidden />
        <h2 className="font-display text-2xl font-extrabold text-indigo">
          Thank you — we'll be in touch.
        </h2>
        <p className="text-ink/75">
          A real person will read your note and reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.currentTarget);
        startTransition(async () => {
          const result = await submitContact(formData);
          if (result.ok) {
            setSubmitted(true);
            formRef.current?.reset();
          } else {
            setError(result.message ?? "Something went wrong. Please try again.");
          }
        });
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" name="name" required autoComplete="name" />
        <Input
          label="Work email"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
      </div>
      <Select label="What can we help with?" name="topic" options={topics} />
      <Textarea
        label="Tell us more"
        name="message"
        required
        placeholder="A few sentences is fine — more is welcome."
        rows={6}
      />

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-input border border-red-300 bg-red-50 px-3.5 py-2.5 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{error}</span>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted">
          By submitting, you agree to our privacy policy.
        </p>
        <Button
          type="submit"
          variant="primary-yellow"
          size="md"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
