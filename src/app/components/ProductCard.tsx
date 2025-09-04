"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      {/* Clickable Image */}
      <Link href={`/shop/${id}`} className="h-48 flex items-center justify-center bg-gray-100">
        <img src={image} alt={name} className="h-40 object-contain" />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        {/* Clickable Title */}
        <Link href={`/shop/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </Link>
        <p className="text-gray-700 font-medium mt-1">₹{price}</p>

        <button
          onClick={() => addToCart({ id, name, price, image,quantity: 1 })}
          className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
