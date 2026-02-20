export interface Address {
  fullName: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

// In-memory address store (resets on server restart)
const addresses = new Map<string, Address>();

export function getAddress(userId: string): Address | null {
  return addresses.get(userId) ?? null;
}

export function saveAddress(userId: string, address: Address): void {
  addresses.set(userId, address);
}
