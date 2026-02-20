"use server";

import { auth } from "@/auth";
import { saveAddress } from "@/data/addresses";
import { revalidatePath } from "next/cache";

export async function updateAddress(
  _prevState: { success?: boolean; error?: string } | null,
  formData: FormData
) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Not authenticated" };
  }

  const fullName = formData.get("fullName") as string;
  const street = formData.get("street") as string;
  const apartment = formData.get("apartment") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const country = formData.get("country") as string;

  if (!fullName || !street || !city || !state || !zip || !country) {
    return { error: "Please fill in all required fields" };
  }

  saveAddress(session.user.id, {
    fullName,
    street,
    apartment: apartment || undefined,
    city,
    state,
    zip,
    country,
  });

  revalidatePath("/profile");
  return { success: true };
}
