"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString());

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  if (!product) return notFound();

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 py-26 gap-10">
      {/* Left Section: Image */}
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      {/* Right Section: Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
          {product.oldPrice && (
            <span className="ml-2 text-gray-500 line-through">₹{product.oldPrice}</span>
          )}
        </div>



        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 border rounded-lg"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 border rounded-lg"
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
          >
            Add to Cart
          </button>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
            Buy It Now
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
