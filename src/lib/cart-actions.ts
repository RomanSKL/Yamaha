"use server";

import { auth } from "@/auth";
import { getCart, saveCart, clearCartDb, type CartEntry } from "@/data/cart";

export async function loadCart(): Promise<CartEntry[]> {
  const session = await auth();
  if (!session?.user?.id) return [];
  return getCart(session.user.id);
}

export async function syncCart(items: CartEntry[]): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) return;
  if (items.length === 0) {
    await clearCartDb(session.user.id);
  } else {
    await saveCart(session.user.id, items);
  }
}
