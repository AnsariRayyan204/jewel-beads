"use client";
import { X, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl p-6 relative flex flex-col md:flex-row gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src={selectedImage} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

          {/* Price */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
            {product.oldPrice && (
              <span className="ml-2 text-gray-500 line-through">₹{product.oldPrice}</span>
            )}
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600">({product.reviews || 0} reviews)</span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-4">
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
          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={handleAddToCart}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
            >
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
    </div>
  );
}
