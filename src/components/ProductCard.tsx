"use client";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onView?: (product: { id: number; name: string; price: number; image: string }) => void;
}

export default function ProductCard({ id, name, price, image, onView }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden relative group">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Button */}
      <button
        onClick={() => onView?.({ id, name, price, image })}
        className="absolute bottom-2 left-2 bg-black/60 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition"
      >
        <Eye size={18} />
      </button>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500">₹{price}</p>
      </div>
    </div>
  );
}
