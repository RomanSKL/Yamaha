import { getDb } from "@/lib/mongodb";

export interface PaymentMethod {
  cardholderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
}

export async function getPaymentMethod(userId: string): Promise<PaymentMethod | null> {
  const db = await getDb();
  const doc = await db.collection("paymentMethods").findOne({ userId });
  if (!doc) return null;
  return {
    cardholderName: doc.cardholderName as string,
    cardNumber: doc.cardNumber as string,
    expiryMonth: doc.expiryMonth as string,
    expiryYear: doc.expiryYear as string,
  };
}

export async function deletePaymentMethod(userId: string): Promise<void> {
  const db = await getDb();
  await db.collection("paymentMethods").deleteOne({ userId });
}

export async function savePaymentMethod(userId: string, method: PaymentMethod): Promise<void> {
  const db = await getDb();
  await db.collection("paymentMethods").updateOne(
    { userId },
    { $set: { userId, ...method } },
    { upsert: true }
  );
}
