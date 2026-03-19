"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

const DEALER_URL = "https://usa.yamaha.com/support/dealer_locator/index.html";

export default function ProductCard({ product }: { product: Product }) {
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

        <div className="mt-4 flex items-center justify-end">
          <a
            href={DEALER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-yamaha-blue text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-yamaha-dark transition-colors"
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Find a Dealer
          </a>
        </div>
      </div>
    </div>
  );
}
