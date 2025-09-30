
"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useOrder } from "@/context/OrdersContext";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { orders } = useOrder();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Order not found</h2>
        <Link href="/orders" className="text-pink-600 hover:underline mt-4 inline-block">
          Back to Orders
        </Link>
      </div>
    );
  }

  const steps = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold">Order #{order.id}</h2>
          <p className="text-gray-500">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
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

      {/* Tracking */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const activeIndex = steps.indexOf(order.status);
          const isCompleted = index <= activeIndex;
          return (
            <div key={step} className="flex-1 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  isCompleted ? "bg-pink-600 border-pink-600 text-white" : "border-gray-300 text-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 text-sm font-medium">{step}</p>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-full ${
                    isCompleted ? "bg-pink-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Items */}
        <div className="md:col-span-2 bg-white shadow rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold mb-2">Items in this Order</h3>
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded overflow-hidden border">
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
              <p className="font-semibold">₹{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between pt-4 font-bold">
            <p>Total</p>
            <p>₹{order.total}</p>
          </div>
        </div>

        {/* Shipping + Payment */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {order.shipping.fullName} <br />
              {order.shipping.street}, {order.shipping.city}, {order.shipping.state} <br />
              {order.shipping.postalCode}, {order.shipping.country} <br />
              Phone: {order.shipping.phone}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <p className="text-gray-600 text-sm">
              Coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

