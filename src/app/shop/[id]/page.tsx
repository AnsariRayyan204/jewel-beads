import ProductCard from "@/app/components/ProductCard";

const products = [
  { id: 1, name: "Gold Necklace", price: 120, image: "/images/necklace.jpg", description: "Elegant gold necklace perfect for special occasions." },
  { id: 2, name: "Silver Ring", price: 80, image: "/images/ring.jpg", description: "Minimalistic silver ring, great for fat finger." },
  { id: 3, name: "Diamond Earrings", price: 250, image: "/images/earrings.jpg", description: "Sparkling diamond earrings that shine in every ugly ear." },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <p className="text-center text-gray-400 mt-20">Product not found.</p>;
  }

  return (
    <main className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex items-center justify-center bg-white rounded-xl p-6">
          <img src={product.image} alt={product.name} className="h-80 object-contain" />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-300 mb-4">₹{product.price}</p>
          <p className="text-gray-400 mb-6">{product.description}</p>

          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
