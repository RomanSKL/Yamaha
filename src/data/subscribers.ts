import { getDb } from "@/lib/mongodb";

export async function addSubscriber(email: string): Promise<boolean> {
  const db = await getDb();
  const existing = await db.collection("subscribers").findOne({ email });
  if (existing) return false;
  await db.collection("subscribers").insertOne({
    email,
    subscribedAt: new Date(),
  });
  return true;
}
