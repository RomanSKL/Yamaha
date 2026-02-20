"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.badge);

  return (
    <section className="py-20 bg-yamaha-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.2em] mb-2">
            Curated Selection
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-yamaha-dark">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Hand-picked by our audio experts for exceptional performance and
            value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
