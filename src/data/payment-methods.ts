export interface PaymentMethod {
  cardholderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
}

// In-memory payment method store (resets on server restart)
const paymentMethods = new Map<string, PaymentMethod>();

export function getPaymentMethod(userId: string): PaymentMethod | null {
  return paymentMethods.get(userId) ?? null;
}

export function savePaymentMethod(userId: string, method: PaymentMethod): void {
  paymentMethods.set(userId, method);
}
