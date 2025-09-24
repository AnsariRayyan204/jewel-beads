// /app/checkout/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuccessPage() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    // Load the most recent order from localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (orders.length > 0) {
      setOrder(orders[0]); // latest order is saved at index 0
    }
  }, []);

  if (!order) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">No recent order found</h1>
        <Link href="/shop" className="text-pink-500 hover:underline">
          Go back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✅ Order Placed Successfully!
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order has been placed and is being
        processed.
      </p>

      {/* Order Details */}
      <div className="border rounded-lg p-4 text-left shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p className="mb-2">Order ID: <span className="font-mono">{order.id}</span></p>
        <p className="mb-2">Date: {new Date(order.date).toLocaleString()}</p>
        <p className="mb-2">Payment Method: {order.payment}</p>

        <h3 className="text-lg font-semibold mt-4">Shipping Info</h3>
        <p>{order.contact.name}</p>
        <p>{order.contact.email}</p>
        <p>{order.contact.phone}</p>
        <p>
          {order.shipping.address}, {order.shipping.city}, {order.shipping.state}{" "}
          {order.shipping.postalCode}, {order.shipping.country}
        </p>

        <h3 className="text-lg font-semibold mt-4">Items</h3>
        <ul className="list-disc list-inside">
          {order.items.map((item: any) => (
            <li key={item.id}>
              {item.name} x {item.quantity} — ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-4 font-bold">
          <span>Total</span>
          <span>₹{order.total}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-center gap-4">
        <Link
          href="/orders"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          View Orders
        </Link>
        <Link
          href="/shop"
          className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
