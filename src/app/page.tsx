"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // Uncomment when your CartContext is ready
import { products } from "@/data/products"; // adjust the path if needed


// --- MOCK DATA (Keep data separate from components) ---
const slidesData = [
  { id: 1, image: "/images/banner1.jpg", title: "Handmade Jewelry", subtitle: "Discover our unique collection", cta: "Shop Now" },
  { id: 2, image: "/images/banner1.jpg", title: "Festive Offers", subtitle: "Special discounts this season", cta: "Explore" },
  { id: 3, image: "/images/banner1.jpg", title: "Luxury & Style", subtitle: "Be elegant, be you", cta: "Browse" },
];

const genderCategories = [
  { href: "/shop", imageSrc: "/images/for-female.jpg", title: "For Her", buttonColor: "bg-pink-600 group-hover:bg-pink-700" },
  { href: "/shop", imageSrc: "/images/for-female.jpg", title: "For Him", buttonColor: "bg-blue-600 group-hover:bg-blue-700" },
];

const statusCategories = [
  { href: "/shop", imageSrc: "/images/image.jpg", title: "Single", buttonColor: "bg-pink-600 group-hover:bg-pink-700" },
  { href: "/shop", imageSrc: "/images/image.jpg", title: "Loved Ones", buttonColor: "bg-green-600 group-hover:bg-green-700" },
  { href: "/shop", imageSrc: "/images/image.jpg", title: "Couple", buttonColor: "bg-blue-600 group-hover:bg-blue-700" },
];

const shopByCategoryItems = [
  { href: "/shop", imageSrc: "/images/product1.jpg", title: "Rings" },
  { href: "/shop", imageSrc: "/images/product1.jpg", title: "Earrings" },
  { href: "/shop", imageSrc: "/images/product1.jpg", title: "Bracelets" },
  { href: "/shop", imageSrc: "/images/product1.jpg", title: "Necklaces" },
];

const bestSellerProducts = products // first 8 as example


const newArrivalCategories = [
  { name: "Mangalsutra", image: "/images/product3.jpg" },
  { name: "Pendants", image: "/images/product4.jpg" },
];

// Helper function to chunk arrays for the slider
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

// --- HELPER COMPONENTS (Defined in the same file for simplicity) ---

// A generic, reusable card component for category links
type CategoryCardProps = {
  href: string;
  imageSrc: string;
  title: string;
  buttonColor?: string; // optional
  aspectRatio?: string; // optional, default to "aspect-[4/5]"
};
const CategoryCard = ({ href, imageSrc, title, buttonColor, aspectRatio = "aspect-[4/5]" }: CategoryCardProps) => (
  <Link href={href} className="group block text-center">
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${aspectRatio}`}>
      <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className={`inline-block px-6 py-2 rounded-full text-white transition-colors duration-300 ${buttonColor}`}>Shop Now</span>
    </div>
  </Link>
);

// A card for the "Shop by Category" section (image and title only)
type SimpleCategoryCardProps = {
  href: string;
  imageSrc: string;
  title: string;
};
const SimpleCategoryCard = ({ href, imageSrc, title }: SimpleCategoryCardProps) => (
  <Link href={href} className="group block text-center">
    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
      <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
    </div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
  </Link>
);


// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  const { addToCart } = useCart(); // Mock function for now

  return (
    // Use a main tag for the primary content of the page
    <main className="flex flex-col py-15">

      {/* Section 1: Hero Carousel */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px]">
        <Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} loop autoplay={{ delay: 4000, disableOnInteraction: false }} navigation pagination={{ clickable: true }} className="h-full">
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={slide.id === 1} sizes="100vw" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-md sm:text-lg md:text-2xl max-w-2xl">{slide.subtitle}</p>
                  <button className="mt-6 bg-pink-600 px-6 py-2.5 rounded-full hover:bg-pink-700 transition text-sm sm:text-base font-semibold">{slide.cta}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 2: Define Who You Are (For Her/Him) */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Define Who You Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {genderCategories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>

      {/* Section 3: Promo Banner */}
      <section className="relative w-full h-[500px] sm:h-[450px] bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/banner1.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center md:justify-start md:text-left max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-white max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Best Offers</h2>
            <p className="mb-6 text-lg">Flat 50% off on selected jewelry</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Section 4: Status Categories (Single, Loved Ones, Couple) */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gifts for Every Occasion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statusCategories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>

      {/* Section 5: Festival Banner */}
      <section className="relative w-full h-[400px] sm:h-[500px]">
        <Image src="/images/banner1.jpg" alt="Festive Banner" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center md:justify-start md:text-left max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-white max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Festive Offers</h2>
            <p className="mb-6 text-lg md:text-xl">Special discounts this season</p>
            <button className="bg-pink-600 px-8 py-3 rounded-full hover:bg-pink-700 transition">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Section 6: Shop by Category */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Shop by Category</h2>
        <p className="text-gray-600 text-center mb-12">Find exactly what you're looking for.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shopByCategoryItems.map((item) => (
            <SimpleCategoryCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Section 7: Best Sellers */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Best Sellers</h2>
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} slidesPerView={1} spaceBetween={24} className="!py-4">
          {chunk(products.slice(0, ), 4).map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {group.map((p) => (
                  <div key={p.id} className="group relative overflow-hidden rounded-lg border border-gray-200">
                    <div className="relative w-full aspect-square">
                      <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-sm sm:text-base font-semibold line-clamp-2 h-10 sm:h-12">{p.name}</h3>
                      <p className="text-pink-600 font-bold mt-1">₹{p.price}</p>
                      <button onClick={() => addToCart({ ...p, quantity: 1 })} className="mt-3 bg-pink-600 text-white w-full px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-pink-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 8: About Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-center md:text-left flex-shrink-0">
            <h2 className="text-3xl font-bold text-pink-700">Jewel&Beads</h2>
            <p className="text-gray-600 text-lg">You desire, we provide</p>
          </div>
          <div className="flex-1 text-gray-700 text-lg text-center md:text-left border-t-2 md:border-t-0 md:border-l-2 border-pink-200 pt-8 md:pt-0 md:pl-12">
            <p>Introduce your brand, craftsmanship, and uniqueness here. We believe in creating timeless pieces that tell a story and become a cherished part of yours.</p>
          </div>
        </div>
      </section>

      {/* Section 9: New Arrivals */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-pink-50/50 p-6 sm:p-10 rounded-2xl">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-gray-700 text-sm font-medium mb-4 shadow-sm">
              <span>💎</span> 500+ New Items
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              New Arrivals Dropping Daily, Monday through Friday. <br className="hidden sm:block" />
              Explore the Latest Launches Now!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {newArrivalCategories.map((cat) => (
              <div key={cat.name} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <div className="relative w-full h-64">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-md">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}