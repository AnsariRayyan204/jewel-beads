"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\nTotal: ₹${total}`);
  };

  return (
    <main className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Checkout Form */}
        <div>
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black"
              rows={3}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black"
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-300">
                  <span>{item.name} {item.quantity ? `x${item.quantity}` : ""}</span>
                  <span>₹{item.price * (item.quantity || 1)}</span>
                </div>
              ))}
              <hr className="border-gray-700" />
              <p className="text-lg font-semibold">Total: ₹{total}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
