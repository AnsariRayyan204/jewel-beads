"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useOrder } from "@/context/OrdersContext";
import ProtectedRoute from "@/components/ProtectedRoute";


export default function OrdersPage() {
  const { orders } = useOrder();
  const [expanded, setExpanded] = useState<string | null>(null);


  return (
    // <ProtectedRoute>
    //   <div className="max-w-5xl mx-auto px-6 py-26">
    //     <h2 className="text-2xl font-bold mb-6">My Orders</h2>

    //     {orders.length === 0 ? (
    //       <p className="text-gray-500">You have no orders yet.</p>
    //     ) : (
          <div className="space-y-6 py-20">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow rounded-2xl p-6 border"
              >
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <div>
                    <Link href={`/orders/${order.id}`}>
                      <p className="font-semibold">Order #{order.id}</p>
                    </Link>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
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

                {/* Preview */}
                <div className="flex items-center gap-3 mb-4">
                  {order.items.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="relative w-14 h-14 rounded overflow-hidden border"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {order.items.length > 3 && (
                    <span className="text-sm text-gray-500">
                      +{order.items.length - 3} more
                    </span>
                  )}
                </div>

                {/* Summary */}
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Total: ₹{order.total}</p>
                  <button
                    onClick={() =>
                      setExpanded(expanded === order.id ? null : order.id)
                    }
                    className="text-pink-600 font-medium hover:underline"
                  >
                    {expanded === order.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {/* Expandable Items + Shipping */}
                {expanded === order.id && (
                  <div className="mt-4 space-y-4">
                    {/* Items */}
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center border-b pb-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded overflow-hidden border">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm font-semibold">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="font-semibold mb-2">Shipping Address</p>
                      <p>{order.shipping.fullName}</p>
                      <p>{order.shipping.street}</p>
                      <p>
                        {order.shipping.city}, {order.shipping.state}{" "}
                        {order.shipping.postalCode}
                      </p>
                      <p>{order.shipping.country}</p>
                      <p className="text-gray-600">Phone: {order.shipping.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      // </div>
    // </ProtectedRoute>
  
