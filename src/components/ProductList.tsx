"use client";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Explore Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
