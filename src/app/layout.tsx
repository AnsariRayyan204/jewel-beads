import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext"; // ✅ import
import { OrderProvider } from "@/context/OrdersContext"; // ✅ import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jewel&Beads",
  description: "Handmade jewelry store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>   {/* ✅ wrap WishlistProvider */}
              <OrderProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
