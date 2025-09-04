export default function HomePage() {
  return (
    <section className="bg-pink-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Discover Handmade Jewelry
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Elegant & affordable jewelry, crafted with love.
      </p>
      <a
        href="/shop"
        className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700"
      >
        Shop Now
      </a>
    </section>
  );
}
