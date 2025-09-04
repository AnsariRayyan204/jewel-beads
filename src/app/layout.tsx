import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewel&Beads",
  description: "Handmade Jewelry Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">Jewel&Beads</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:text-pink-600">Home</a>
              <a href="/shop" className="hover:text-pink-600">Shop</a>
              <a href="/cart" className="hover:text-pink-600">Cart</a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 mt-8">
          <div className="container mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Jewel&Beads</h2>
              <p>Unique handmade jewelry at fair prices.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/shop" className="hover:underline">Shop</a></li>
                <li><a href="/cart" className="hover:underline">Cart</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <p>Email: ansarirayaan204@gmail.com</p>
              <p>Phone: +91 9867443122</p>
            </div>
          </div>
          <div className="text-center py-4 border-t border-gray-700">
            <p className="text-sm">© 2025 Jewel&Beads. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
