"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface WishlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistPopup({ isOpen, onClose }: WishlistPopupProps) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = (item: any) => {
    addToCart({ ...item, quantity: 1 });
    removeFromWishlist(item.id); // auto-remove after adding to cart
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-4 relative flex flex-col max-h-[80vh]">
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <>
            <div className="space-y-4 overflow-y-auto pr-2 flex-1">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  {/* Image */}
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Info + Actions */}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-pink-600 font-semibold">₹{item.price}</p>

                    {/* Buttons */}
                    <div className="mt-2 flex flex-col gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-1.5 rounded-lg text-sm"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-lg text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer → Go to Cart */}
            <div className="pt-4 border-t mt-4">
              <Link
                href="/cart"
                onClick={onClose}
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-2 rounded-lg font-medium"
              >
                Go to Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
