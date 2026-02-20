"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();
  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = () => {
    if (session?.user) {
      router.push("/checkout");
    } else {
      router.push("/auth/signin?callbackUrl=/checkout");
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-yamaha-light flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="mx-auto h-16 w-16 text-gray-300 mb-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-yamaha-dark mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500 mb-8">
            Discover our premium Hi-Fi equipment and find your perfect sound.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-yamaha-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-yamaha-dark transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yamaha-light min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-yamaha-dark">
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-1">
              {items.length} item{items.length !== 1 && "s"}
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors cursor-pointer"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="relative h-28 w-28 shrink-0 rounded-xl overflow-hidden bg-gray-50"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/products/${product.id}`}
                        className="font-semibold text-yamaha-dark hover:text-yamaha-blue transition-colors"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-yamaha-accent uppercase tracking-wider mt-0.5">
                        {product.category}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors shrink-0 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        className="px-3 py-1 text-gray-500 hover:text-yamaha-dark transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                        className="px-3 py-1 text-gray-500 hover:text-yamaha-dark transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-yamaha-dark">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-yamaha-dark mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>
                    {totalPrice >= 500 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      formatPrice(49)
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-yamaha-dark text-base">
                  <span>Total</span>
                  <span>
                    {formatPrice(
                      totalPrice + (totalPrice >= 500 ? 0 : 49)
                    )}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-yamaha-blue text-white font-semibold py-3.5 rounded-full hover:bg-yamaha-dark transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block mt-4 text-center text-sm text-yamaha-accent hover:text-yamaha-blue transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
