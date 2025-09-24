"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, Eye } from "lucide-react";
import ProductModal from "./ProductModal"; // <-- import modal
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  oldPrice?: number;
  discount?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="group bg-white shadow hover:shadow-lg transition overflow-hidden relative rounded-lg">
        {/* Product Image */}
        <div className="relative w-full h-48 sm:h-56 md:h-60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleWishlist();
            }}
            className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition ${
              isWishlisted ? "bg-red-500 text-white" : "bg-white text-gray-600"
            }`}
          >
            <Heart
              size={18}
              className={`${isWishlisted ? "fill-current" : "stroke-current"}`}
            />
          </button>
          {/* Quick View Button
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="absolute bottom-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded-full"
          >
            <Eye className="w-5 h-5" />
          </button> */}
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4 text-center">
          <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
          <p className="text-pink-600 font-bold">₹{product.price.toLocaleString()}</p>

          {product.oldPrice && (
            <p className="text-xs text-gray-500 line-through">
              ₹{product.oldPrice.toLocaleString()}
            </p>
          )}
          {product.discount && (
            <p className="text-xs text-red-500">Save {product.discount}%</p>
          )}

          {/* Add to Cart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...product, quantity: 1 });
            }}
            className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
