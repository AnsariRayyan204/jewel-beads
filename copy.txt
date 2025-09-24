"use client";

import { Dialog } from "@headlessui/react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <Dialog.Title className="text-xl font-bold mb-2">
            {product.name}
          </Dialog.Title>
          <p className="text-gray-600 mb-2">₹{product.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            {product.description ?? "No description available."}
          </p>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={() => {
              addToCart({ ...product, quantity: 1 });
              onClose();
            }}
            className="w-full py-2 mb-3 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
