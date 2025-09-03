"use client";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, total } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="bg-gray-900 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-gray-700 py-2"
              >
                <span>
                  {item.name} (x{item.quantity || 1})
                </span>
                <span>₹{(item.price || 0) * (item.quantity || 1)}</span>
              </div>
            ))}
            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </>
        )}
      </div>

      {/* Checkout Form */}
      <form className="bg-gray-900 p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <textarea
            placeholder="Enter your shipping address"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Cash on Delivery</option>
            <option>Credit/Debit Card</option>
            <option>UPI</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
