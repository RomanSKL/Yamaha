"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-yamaha-blue text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.id}`}>
          <p className="text-xs font-medium text-yamaha-accent uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold text-yamaha-dark group-hover:text-yamaha-blue transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-yamaha-dark">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 bg-yamaha-blue text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-yamaha-dark transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
