"use client";

import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Elegant Necklace", price: 1200, quantity: 1 },
    { id: 2, name: "Silver Earrings", price: 800, quantity: 2 },
  ]);

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Total</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">{item.name}</td>
                  <td className="py-4">₹{item.price}</td>
                  <td className="py-4 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-4">₹{item.price * item.quantity}</td>
                  <td className="py-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ₹{total}</h2>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
