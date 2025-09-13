// src/app/page.tsx
import { db } from "@/server/db";          // your DB connection
import { products } from "@/server/db/schema";  // your schema
import { eq } from "drizzle-orm";

export default async function HomePage() {
  // ✅ fetch all products
  const allProducts = await db.select().from(products);

  return (
    <main className="bg-[#fdf6f0] min-h-screen text-gray-800 py-16">
      {/* Hero Section */}
      <section className="w-full h-[400px] relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner1.jpg')" }}
        >
          <div className="bg-black/40 w-full h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              Discover Timeless Elegance
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">
          Our Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl p-4 text-center"
            >
              <img
                src={`/images/product${p.id}.jpg`}
                alt={p.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-500">₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
