"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cart, total, removeFromCart, clearCart } = useCart();
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    clearCart();
    setMessage("Checkout successful! Thank you for your order.");
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart </h1>

      {message && (
        <p className="mb-4 text-green-500 font-semibold">{message}</p>
      )}

      {cart.length === 0 && !message ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        cart.length > 0 && (
          <div className="w-full max-w-2xl space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-400">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-4 font-bold text-lg">
              Total: ₹{total}
            </div>

            <button
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )
      )}
    </main>
  );
}
