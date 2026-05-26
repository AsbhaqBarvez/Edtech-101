"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const topics = [
  { value: "support", label: "Product support" },
  { value: "teams", label: "Teams or enterprise" },
  { value: "teach", label: "Apply to teach" },
  { value: "press", label: "Press or partnerships" },
  { value: "other", label: "Something else" }
];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

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
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
      <div className="flex items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted">
          By submitting, you agree to our privacy policy.
        </p>
        <Button type="submit" variant="primary-yellow" size="md">
          Send message
        </Button>
      </div>
    </form>
  );
}
