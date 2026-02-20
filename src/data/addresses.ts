import { getDb } from "@/lib/mongodb";

export interface Address {
  fullName: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export async function getAddress(userId: string): Promise<Address | null> {
  const db = await getDb();
  const doc = await db.collection("addresses").findOne({ userId });
  if (!doc) return null;
  return {
    fullName: doc.fullName as string,
    street: doc.street as string,
    apartment: doc.apartment as string | undefined,
    city: doc.city as string,
    state: doc.state as string,
    zip: doc.zip as string,
    country: doc.country as string,
  };
}

export async function saveAddress(userId: string, address: Address): Promise<void> {
  const db = await getDb();
  await db.collection("addresses").updateOne(
    { userId },
    { $set: { userId, ...address } },
    { upsert: true }
  );
}
