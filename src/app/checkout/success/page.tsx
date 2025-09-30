"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useOrder, OrderItem } from "@/context/OrdersContext";

export default function SuccessPage() {
  const { orders } = useOrder();
  const latestOrder = orders[0]; // get the most recent order

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order has been confirmed.
      </p>

      {/* Show latest order summary */}
      {latestOrder && (
        <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md text-left mb-6">
          <p className="font-medium mb-2">Order ID: {latestOrder.id}</p>
          <p className="text-sm text-gray-500 mb-4">
            Placed on {latestOrder.date}
          </p>

          <div className="divide-y">
            {latestOrder.items.map((item: OrderItem) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-semibold mt-4">
            <span>Total</span>
            <span>₹{latestOrder.total}</span>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-4">
        <Link
          href="/shop"
          className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          Continue Shopping
        </Link>
        <Link
          href="/orders"
          className="px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
}
