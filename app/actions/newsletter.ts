"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type NewsletterFormState = {
  ok: boolean;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  formData: FormData
): Promise<NewsletterFormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("newsletter_subscriptions")
    .insert({ email });

  if (error) {
    // 23505 = unique violation — treat as already-subscribed success.
    if (error.code === "23505") {
      return { ok: true };
    }
    console.error("[subscribeToNewsletter] insert failed:", error.message);
    return {
      ok: false,
      message: "We couldn't subscribe you just now. Please try again."
    };
  }

  return { ok: true };
}
