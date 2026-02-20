"use server";

import { auth } from "@/auth";
import { savePaymentMethod } from "@/data/payment-methods";
import { revalidatePath } from "next/cache";

export async function updatePaymentMethod(
  _prevState: { success?: boolean; error?: string } | null,
  formData: FormData
) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Not authenticated" };
  }

  const cardholderName = formData.get("cardholderName") as string;
  const cardNumber = (formData.get("cardNumber") as string).replace(/\s/g, "");
  const expiryMonth = formData.get("expiryMonth") as string;
  const expiryYear = formData.get("expiryYear") as string;

  if (!cardholderName || !cardNumber || !expiryMonth || !expiryYear) {
    return { error: "Please fill in all required fields" };
  }

  if (!/^\d{13,19}$/.test(cardNumber)) {
    return { error: "Invalid card number" };
  }

  savePaymentMethod(session.user.id, {
    cardholderName,
    cardNumber,
    expiryMonth,
    expiryYear,
  });

  revalidatePath("/profile");
  return { success: true };
}
