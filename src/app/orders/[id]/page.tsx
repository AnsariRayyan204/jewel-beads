// app/orders/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { useOrder } from "@/context/OrdersContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
import Link from "next/link";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { orders } = useOrder();

  // Find the order by id
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <ProtectedRoute>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-xl font-semibold text-red-600">Order not found</h2>
          <Link href="/orders" className="text-pink-600 underline">
            Back to Orders
          </Link>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        {/* Order Info */}
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h2 className="text-2xl font-bold mb-2">Order #{order.id}</h2>
          <p className="text-gray-500">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
          <span
            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-600"
                : order.status === "Processing"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Shipping Info */}
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
          <p className="text-gray-700">{order.shipping?.fullName}</p>
          <p className="text-gray-700">{order.shipping?.street}</p>
          <p className="text-gray-700">
            {order.shipping?.city}, {order.shipping?.state} -{" "}
            {order.shipping?.postalCode}
          </p>
          <p className="text-gray-700">{order.shipping?.phone}</p>
          <p className="text-gray-700">{order.shipping?.country}</p>
        </div>

        {/* Payment Info */}
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
          <p className="text-gray-700">{order.paymentMethod || "Cash on Delivery"}</p>
        </div>

        {/* Items */}
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold mb-4">Items</h3>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded overflow-hidden border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white shadow rounded-2xl p-6 border text-right">
          <p className="text-lg font-semibold">Total: ₹{order.total}</p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
