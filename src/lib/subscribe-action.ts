"use server";

import { addSubscriber } from "@/data/subscribers";
import { sendSubscriptionEmail } from "@/lib/ses";

export async function subscribe(
  _prevState: { success?: boolean; error?: string; alreadySubscribed?: boolean } | null,
  formData: FormData
) {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  const isNew = await addSubscriber(email);

  if (!isNew) {
    return { alreadySubscribed: true };
  }

  try {
    await sendSubscriptionEmail(email);
  } catch {
    // Email saved to DB even if SES fails (e.g. sandbox mode)
  }

  return { success: true };
}
