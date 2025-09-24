"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard"; // Import the new component

import { products } from "@/data/products";
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
              <ProductCard key={p.id} product={p} />
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