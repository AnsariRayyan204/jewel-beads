"use client";

interface ProductModalProps {
  product: { id: number; name: string; price: number; image: string };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Product Details */}
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">₹{product.price}</p>

        {/* Add to Cart (placeholder) */}
        <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
