"use client";

import ProductCard from "@/app/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 120,
    image: "image/necklace.jpg",
  },
  {
    id: 2,
    name: "Silver Ring",
    price: 80,
    image: "image/ring.jpg",
  },
  {
    id: 3,
    name: "Diamond Earrings",
    price: 250,
    image: "image/earrings.jpg",
  },
];

export default function ShopPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
