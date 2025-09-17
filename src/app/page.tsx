"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Elegant Pearl Necklace",
    price: 1499,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Classic Gold Earrings",
    price: 799,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Silver Charm Bracelet",
    price: 999,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Rose Quartz Ring",
    price: 699,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    name: "Layered Chain Necklace",
    price: 1299,
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    name: "Studded Hoop Earrings",
    price: 899,
    image: "/images/product6.jpg",
  },
  {
    id: 7,
    name: "Minimalist Silver Ring",
    price: 599,
    image: "/images/product7.jpg",
  },
  {
    id: 8,
    name: "Charm Pendant Necklace",
    price: 1099,
    image: "/images/product7.jpg",
  },
  {
    id: 9,
    name: "Pearl Drop Earrings",
    price: 749,
    image: "/images/product7.jpg",
  },
  {
    id: 10,
    name: "Gold-Plated Bracelet",
    price: 1199,
    image: "/images/product7.jpg",
  },
  {
    id: 11,
    name: "Elegant Pearl Necklace",
    price: 1499,
    image: "/images/product1.jpg",
  },
  {
    id: 12,
    name: "Classic Gold Earrings",
    price: 799,
    image: "/images/product2.jpg",
  },
  {
    id: 13,
    name: "Silver Charm Bracelet",
    price: 999,
    image: "/images/product3.jpg",
  },
  {
    id: 14,
    name: "Rose Quartz Ring",
    price: 699,
    image: "/images/product4.jpg",
  },
  {
    id: 15,
    name: "Layered Chain Necklace",
    price: 1299,
    image: "/images/product5.jpg",
  },
  {
    id: 16,
    name: "Studded Hoop Earrings",
    price: 899,
    image: "/images/product6.jpg",
  },
  {
    id: 17,
    name: "Minimalist Silver Ring",
    price: 599,
    image: "/images/product7.jpg",
  },
  {
    id: 18,
    name: "Charm Pendant Necklace",
    price: 1099,
    image: "/images/product7.jpg",
  },
  {
    id: 19,
    name: "Pearl Drop Earrings",
    price: 749,
    image: "/images/product7.jpg",
  },
  {
    id: 20,
    name: "Gold-Plated Bracelet",
    price: 1199,
    image: "/images/product7.jpg",
  },
  // …add as many as you want
];
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
export default  function HomePage() {// chunk into groups of 8 for slides
  const slides =   [
    {
      id: 1,
      image: "/images/banner1.jpg",
      title: "Handmade Jewelry",
      subtitle: "Discover our unique collection",
      cta: "Shop Now",
    },
    {
      id: 2,
      image: "/images/banner1.jpg",
      title: "Festive Offers",
      subtitle: "Special discounts this season",
      cta: "Explore",
    },
    {
      id: 3,
      image: "/images/banner1.jpg",
      title: "Luxury & Style",
      subtitle: "Be elegant, be you",
      cta: "Browse",
    },
  ];
  
  return (
    <div className="flex flex-col space-y-16 py-16">

      {/* Hero Carousel */}
      <div className="relative w-full h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                  <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-lg md:text-2xl">{slide.subtitle}</p>
                  <button className="mt-4 bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-700 transition">{slide.cta}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Define Who You Are */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-15">Define Who You Are</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Female Card */}
          <div>
            <div className="relative group w-[500px] h-[550px] overflow-hidden  shadow-lg">
              <Image src="/images/for-female.jpg" alt="For Her" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">For Her</h3>
              <button className="bg-pink-600 px-6 py-2 rounded-full text-white hover:bg-pink-700 transition">Shop Now</button>
            </div>
          </div>
          {/* Male Card */}
          <div>
            <div className="relative group w-[500px] h-[550px] overflow-hidden  shadow-lg">
              <Image src="/images/for-female.jpg" alt="For Him" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">For Him</h3>
              <button className="bg-blue-600 px-6 py-2 rounded-full text-white hover:bg-blue-700 transition">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner1.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-start px-12">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Best Offers</h2>
            <p className="mb-6 text-lg">Flat 50% off on selected jewelry</p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Status Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-15">Status Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          {/* Single Card */}
          <div>
            <div className="relative group w-[350px] h-[450px] overflow-hidden shadow-lg">
              <Image src="/images/for-female.jpg" alt="Single" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Single</h3>
              <button className="bg-pink-600 px-6 py-2 rounded-full text-white hover:bg-pink-700 transition">Shop Now</button>
            </div>
          </div>
          {/* Loved Ones Card */}
          <div>
            <div className="relative group w-[350px] h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="Loved Ones"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Loved Ones</h3>
              <button className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-700 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Couple Card */}
          <div>
            <div className="relative group w-[350px] h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="Couple"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Couple</h3>
              <button className="bg-blue-600 px-6 py-2 rounded-full text-white hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Banner */}
      <section className="relative w-full h-[600px]">
        <Image
          src="/images/banner1.jpg" 
          alt="Festive Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-start px-12">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Festive Offers</h2>
            <p className="mb-6 text-lg md:text-2xl">
              Special discounts this season
            </p>
            <button className="bg-pink-600 px-6 py-3 rounded-full hover:bg-pink-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">Define Who You Are</h2>
        <p className="text-gray-600 text-center py-7">Shop by category</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* ringCard */}
          <div>
            <div className="relative group w-[250px] h-[250px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="For Her"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-150"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">ring</h3>

            </div>
          </div>
          {/*earringCard */}
          <div>
            <div className="relative group w-[250px] h-[250px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="For Him"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-150"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">earring</h3>

            </div>
          </div>
          {/*braceletCard */}
          <div>
            <div className="relative group w-[250px] h-[250px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="For Him"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-150"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">bracelet</h3>

            </div>
          </div>
          {/*necklaceCard */}
          <div>
            <div className="relative group w-[250px] h-[250px] overflow-hidden shadow-lg">
              <Image
                src="/images/for-female.jpg"
                alt="For Him"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-150"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">necklace</h3>

            </div>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
       <section className="max-w-7xl mx-auto px-12 py-9">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Best Sellers
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={24}
        className="!py-4"
      >
        {chunk(products, 4).map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.map((p) => (
                <div
                  key={p.id}
                  className="group relative overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="relative w-full h-50 md:h-56">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-2 text-center">
                    <h3 className="text-sm md:text-md font-semibold line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-pink-600 font-bold mt-1">₹{p.price}</p>
                    <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition">
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
      {/* About Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-pink-700">Jewel&Beads</h2>
          <p className="text-gray-600">You desire, we provide</p>
        </div>
        <div className="flex-1 text-gray-700">
          <p>
            Some text like About Us – introduce your brand, craftsmanship, and
            uniqueness here.
          </p>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="w-full bg-black text-white py-12">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">New Arrivals</h2>
          <p className="text-gray-300">Some text here</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-400 h-[250px] flex items-center justify-center">
              New Photo 1
            </div>
            <div className="bg-gray-400 h-[250px] flex items-center justify-center">
              New Photo 2
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
