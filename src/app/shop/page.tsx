"use client";

import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, name: "Necklace", price: 1500, image: "images/product1.jpg" },
  { id: 2, name: "Earrings", price: 800, image: "images/product2.jpg" },
  { id: 3, name: "Bracelet", price: 1200, image: "images/product3.jpg" },
  { id: 4, name: "Ring", price: 600, image: "images/product4.jpg" },
];

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-pink-700 mb-8 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500">₹{product.price}</p>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
