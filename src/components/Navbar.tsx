"use client";
import { ShoppingCart, User, Search, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import WishlistDrawer from "@/components/WishlistDrawer";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [openWishlist, setOpenWishlist] = useState(false);
  const { wishlist } = useWishlist();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fdf6f0] text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-700">
          Jewel&Beads
        </Link>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 relative">
          {/* Search */}
          <button aria-label="Search">
            <Search className="w-5 sm:w-6 h-5 sm:h-6 hover:text-pink-600 transition" />
          </button>

          {/* Account */}
          <Link href="/auth/login" aria-label="Account">
            <User className="w-5 sm:w-6 h-5 sm:h-6 hover:text-pink-600 transition" />
          </Link>

          {/* Wishlist - hidden on mobile */}
          <button
            onClick={() => setOpenWishlist(true)}
            className="relative p-2 hidden sm:inline-block"
          >
            <Heart className="w-5 sm:w-6 h-5 sm:h-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Drawer
          <WishlistDrawer
            isOpen={openWishlist}
            onClose={() => setOpenWishlist(false)}
          /> */}

          {/* Cart */}
          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 hover:text-pink-600 transition" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
