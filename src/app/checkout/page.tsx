"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {/* Left side - Form */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        {/* Billing & Shipping Form */}
        <form className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white p-6 shadow rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 shadow rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Shipping Address</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border rounded-lg px-4 py-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Payment Section (Placeholder for now) */}
          <div className="bg-white p-6 shadow rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Payment</h3>
            <p className="text-sm text-gray-500">
              Payment integration coming soon.
            </p>
          </div>
        </form>
      </div>

      {/* Right side - Order Summary */}
      <div className="bg-white p-6 shadow rounded-2xl h-fit">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative w-16 h-16 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button
              disabled={cart.length === 0}
              className="w-full mt-4 bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition disabled:opacity-50"
            >
              Place Order
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              By placing your order, you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
