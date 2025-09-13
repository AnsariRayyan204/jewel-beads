export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🎉 Thank You for Your Order!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your jewelry is being prepared with love and care. We’ll notify you once it ships.
      </p>
      <a
        href="/shop"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Continue Shopping
      </a>
    </div>
  );
}
