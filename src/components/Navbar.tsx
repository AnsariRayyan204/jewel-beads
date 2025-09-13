"use client";
import { ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fdf6f0] text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-700">
          Jewel&Beads
        </Link>

        {/* Right side icons */}
        <div className="flex items-center space-x-6">
          <button aria-label="Search">
            <Search className="w-6 h-6 hover:text-pink-600 transition" />
          </button>
          <Link href="/auth/login" aria-label="Account">
            <User className="w-6 h-6 hover:text-pink-600 transition" />
          </Link>
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="w-6 h-6 hover:text-pink-600 transition" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
