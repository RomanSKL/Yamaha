"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import type { Product } from "@/data/products";
import { getProductById } from "@/data/products";
import { loadCart, syncCart } from "@/lib/cart-actions";
import type { CartEntry } from "@/data/cart";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

function toEntries(items: CartItem[]): CartEntry[] {
  return items.map((i) => ({ productId: i.product.id, quantity: i.quantity }));
}

function fromEntries(entries: CartEntry[]): CartItem[] {
  const result: CartItem[] = [];
  for (const e of entries) {
    const product = getProductById(e.productId);
    if (product) {
      result.push({ product, quantity: e.quantity });
    }
  }
  return result;
}

function mergeCartItems(local: CartItem[], remote: CartItem[]): CartItem[] {
  const map = new Map<string, CartItem>();
  for (const item of remote) {
    map.set(item.product.id, { ...item });
  }
  for (const item of local) {
    const existing = map.get(item.product.id);
    if (existing) {
      existing.quantity = Math.max(existing.quantity, item.quantity);
    } else {
      map.set(item.product.id, { ...item });
    }
  }
  return Array.from(map.values());
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<CartItem[]>([]);
  const skipSyncRef = useRef(false);
  const loadedForUserRef = useRef<string | null>(null);

  // Load cart from DB when user authenticates
  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id) return;
    if (loadedForUserRef.current === session.user.id) return;

    loadedForUserRef.current = session.user.id;

    loadCart().then((remoteEntries) => {
      const remoteItems = fromEntries(remoteEntries);
      setItems((localItems) => {
        const merged = mergeCartItems(localItems, remoteItems);
        // If local had items that remote didn't, sync the merged result
        if (localItems.length > 0 && remoteEntries.length !== merged.length) {
          syncCart(toEntries(merged));
        }
        return merged;
      });
    });
  }, [status, session?.user?.id]);

  // Sync cart to DB on every change (skip the initial load)
  useEffect(() => {
    if (skipSyncRef.current) {
      skipSyncRef.current = false;
      return;
    }
    if (status !== "authenticated" || !session?.user?.id) return;
    if (!loadedForUserRef.current) return; // haven't loaded yet

    syncCart(toEntries(items));
  }, [items, status, session?.user?.id]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
