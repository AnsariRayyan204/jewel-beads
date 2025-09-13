"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 📝 Normally: send order to backend or payment gateway
    alert(`✅ Order placed!\nName: ${form.name}\nTotal: ₹${cartTotal}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 space-y-6"
        >
          {/* User Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-pink-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            {cart.map((item) => (
              <p key={item.id} className="text-gray-700">
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </p>
            ))}
            <h3 className="font-bold mt-3">Total: ₹{cartTotal}</h3>
          </div>

          {/* Place Order */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
