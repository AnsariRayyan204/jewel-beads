"use client";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrdersContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();

  // form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const newOrder = {
      id: "ORD-" + Date.now(),
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
      status: "Processing" as const,
      shipping: {
        fullName,
        address,
        city,
        state,
        postalCode,
        country,
      },
    };

    addOrder(newOrder);
    clearCart();
    router.push("/orders");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {/* Left side - Form */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <form onSubmit={handlePlaceOrder} className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white p-6 shadow rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 shadow rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Shipping Address</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Payment Section (still placeholder for now) */}
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
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              type="submit"
              form="checkoutForm"
              onClick={handlePlaceOrder}
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
