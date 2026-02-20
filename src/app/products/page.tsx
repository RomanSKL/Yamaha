"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  );

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    let list =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sortBy]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === "all"
                ? "bg-yamaha-blue text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-yamaha-blue text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "default" | "price-asc" | "price-desc")
          }
          className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-yamaha-accent"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-gray-500 mb-6">
        {filtered.length} product{filtered.length !== 1 && "s"}
      </p>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-yamaha-light min-h-screen">
      {/* Header */}
      <div className="bg-yamaha-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.2em] mb-2">
            Collection
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            All Products
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Suspense
          fallback={
            <div className="text-center py-20 text-gray-400">Loading...</div>
          }
        >
          <ProductsContent />
        </Suspense>
      </div>
    </div>
  );
}
