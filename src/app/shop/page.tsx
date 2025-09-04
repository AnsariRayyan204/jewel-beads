const products = [
  { id: 1, name: "Elegant Necklace", price: 1200, image: "/necklace.jpg" },
  { id: 2, name: "Silver Earrings", price: 800, image: "/earrings.jpg" },
  { id: 3, name: "Golden Bracelet", price: 1500, image: "/bracelet.jpg" },
  { id: 4, name: "Diamond Ring", price: 2500, image: "/ring.jpg" },
];

export default function ShopPage() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
              <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
