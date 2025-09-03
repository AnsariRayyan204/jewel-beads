"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black hover:opacity-70">
          Jewel&breads
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 hover:text-black transition"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-black transition"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
