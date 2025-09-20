"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
      {/* Left Section - Cart Items */}
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right Section - Order Summary */}
      {cart.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <a href="/checkout" className="block">
            <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition" >
              Proceed to Checkout
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
