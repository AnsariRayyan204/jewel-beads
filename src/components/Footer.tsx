// app/components/Footer.tsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 mt-12 border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Left: Logo + About */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-pink-700 mb-3">Jewel&Beads</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
            At Jewel&Beads, we craft tarnish-free handmade jewelry 
            that blends traditional Indian artistry with modern elegance.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-800 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-800 transition-colors">About</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-pink-800 transition-colors">Shop</a>
            </li>
            <li>
              <a href="/cart" className="hover:text-pink-800 transition-colors">Cart</a>
            </li>
            <li>
              <a href="/auth/login" className="hover:text-pink-800 transition-colors">Login</a>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Contact Us</h3>
          <p className="text-gray-600 text-sm">📧 ansarirayyan204@gmail.com</p>
          <p className="text-gray-600 text-sm">📞 +91 9867443122</p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-5 mt-4">
            <a href="#" className="hover:text-pink-800 transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-pink-800 transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-pink-800 transition-colors">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-xs sm:text-sm py-4 border-t border-pink-200">
        © {new Date().getFullYear()} Jewel&Beads. All rights reserved.
      </div>
    </footer>
  );
}
