"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 2, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 3, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 4, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 5, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 6, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 7, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 8, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 9, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 10, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 11, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 12, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 13, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 14, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 15, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 16, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 17, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 18, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 19, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 20, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 21, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  { id: 22, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 23, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product1.jpg", },
  { id: 24, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product1.jpg", },
  // ...rest of products
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [sort, setSort] = useState("new");
  const [showFilters, setShowFilters] = useState(false);

  const filters = ["Category", "Color", "Material", "Styles", "Size", "Shape", "Gender", "Price"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Filters (Desktop) */}
        <aside className="space-y-6 hidden lg:block">
          {filters.map((f) => (
            <details key={f} className="border-b pb-2">
              <summary className="cursor-pointer font-semibold">{f}</summary>
              <div className="mt-2 space-y-1">
                <label className="block text-sm">
                  <input type="checkbox" className="mr-2" /> Option 1
                </label>
                <label className="block text-sm">
                  <input type="checkbox" className="mr-2" /> Option 2
                </label>
              </div>
            </details>
          ))}
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            {/* Left: Filter Button (only mobile/tablet) */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100"
            >
              Filters
            </button>

            {/* Right: Sort Dropdown */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-2 rounded-lg text-sm"
            >
              <option value="new">Date, new to old</option>
              <option value="old">Date, old to new</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="group bg-white shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-60">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="text-sm font-medium line-clamp-2">{p.name}</h3>
                  <div className="mt-2">
                    <p className="text-pink-600 font-bold">₹{p.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 line-through">₹{p.oldPrice.toLocaleString()}</p>
                    <p className="text-xs text-red-500">Save {p.discount}%</p>
                  </div>

                  <button
                    onClick={() => addToCart({ ...p, quantity: 1 })}
                    className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition w-full sm:w-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex">
          <div className="w-72 bg-white h-full shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-600 hover:text-black">
                ✕
              </button>
            </div>

            {filters.map((f) => (
              <details key={f} className="border-b pb-2 mb-3">
                <summary className="cursor-pointer font-semibold">{f}</summary>
                <div className="mt-2 space-y-1">
                  <label className="block text-sm">
                    <input type="checkbox" className="mr-2" /> Option 1
                  </label>
                  <label className="block text-sm">
                    <input type="checkbox" className="mr-2" /> Option 2
                  </label>
                </div>
              </details>
            ))}
          </div>

          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setShowFilters(false)}
          />
        </div>
      )}
    </div>
  );
}
