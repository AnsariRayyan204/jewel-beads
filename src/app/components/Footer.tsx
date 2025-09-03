export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">Jewel&beads</h2>
          <p className="text-gray-400">
            150 rupiya lega.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/shop" className="hover:text-gray-300">Shop</a></li>
            <li><a href="/cart" className="hover:text-gray-300">Cart</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">ansarirayyan204@gmail.com</p>
          <p className="text-gray-400">+91 9867443122</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 py-4 border-t border-gray-700">
         mai chota hu hame koi rights nhi hai.
      </div>
    </footer>
  );
}
