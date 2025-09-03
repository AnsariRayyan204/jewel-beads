import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            shakal acchi nhi hai
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            chize to acchi pahno. 
          </p>
          <Link
            href="/shop"
            className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Necklaces", image: "/images/necklace.jpg" },
            { name: "Earrings", image: "/images/earrings.jpg" },
            { name: "Rings", image: "/images/rings.jpg" },
          ].map((cat) => (
            <div
              key={cat.name}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="/shop"
                  className="text-white text-xl font-semibold"
                >
                  {cat.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={`/images/product${id}.jpg`}
                alt={`Product ${id}`}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">Product {id}</h3>
              <p className="text-gray-600">₹{id * 1500}</p>
              <Link
                href="/shop"
                className="mt-3 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
