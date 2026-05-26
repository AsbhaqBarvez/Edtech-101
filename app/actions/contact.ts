"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ContactFormState = {
  ok: boolean;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_TOPICS = ["support", "teams", "teach", "press", "other"] as const;
type Topic = (typeof ALLOWED_TOPICS)[number];

function asTopic(value: string): Topic {
  return (ALLOWED_TOPICS as readonly string[]).includes(value)
    ? (value as Topic)
    : "other";
}

export async function submitContact(
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const topic = asTopic(String(formData.get("topic") ?? "other"));
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return { ok: false, message: "Please share your full name." };
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, message: "That email address doesn't look right." };
  }
  if (!message || message.length < 10) {
    return { ok: false, message: "A few sentences please — we read every note." };
  }
  if (message.length > 5000) {
    return { ok: false, message: "Your message is a bit long. Trim it to 5,000 characters." };
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    topic,
    message
  });

  if (error) {
    console.error("[submitContact] insert failed:", error.message);
    return {
      ok: false,
      message: "We couldn't save your message just now. Please try again in a moment."
    };
  }

  return { ok: true };
}
