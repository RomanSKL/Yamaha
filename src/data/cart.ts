import { getDb } from "@/lib/mongodb";

export interface CartEntry {
  productId: string;
  quantity: number;
}

export async function getCart(userId: string): Promise<CartEntry[]> {
  const db = await getDb();
  const doc = await db.collection("carts").findOne({ userId });
  if (!doc) return [];
  return (doc.items as CartEntry[]) ?? [];
}

export async function saveCart(userId: string, items: CartEntry[]): Promise<void> {
  const db = await getDb();
  await db.collection("carts").updateOne(
    { userId },
    { $set: { userId, items, updatedAt: new Date() } },
    { upsert: true }
  );
}

export async function clearCartDb(userId: string): Promise<void> {
  const db = await getDb();
  await db.collection("carts").deleteOne({ userId });
}
