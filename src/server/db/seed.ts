// src/db/seed.ts
import { db } from "./index";
import { products } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  await db.insert(products).values([
    {
      name: "Gold Necklace",
      price: 1500,
      category: "Necklaces",
      image: "/images/product1.jpg",
    },
    {
      name: "Silver Ring",
      price: 800,
      category: "Rings",
      image: "/images/product2.jpg",
    },
    {
      name: "Diamond Earrings",
      price: 2500,
      category: "Earrings",
      image: "/images/product3.jpg",
    },
    {
      name: "Pearl Bracelet",
      price: 1200,
      category: "Bracelets",
      image: "/images/product4.jpg",
    },
    {
      name: "Traditional Necklace",
      price: 1800,
      category: "Necklaces",
      image: "/images/product5.jpg",
    },
    {
      name: "Modern Necklace",
      price: 1600,
      category: "Necklaces",
      image: "/images/product6.jpg",
    },
    {
      name: "Party Necklace",
      price: 2000,
      category: "Necklaces",
      image: "/images/product7.jpg",
    },
    {
      name: "Casual Necklace",
      price: 1400,
      category: "Necklaces",
      image: "/images/product8.jpg",
    },
    {
      name: "Gold Ring",
      price: 1000,
      category: "Rings",
      image: "/images/product9.jpg",
    },
    {
      name: "Diamond Ring",
      price: 3000,
      category: "Rings",
      image: "/images/product10.jpg",
    },
    {
      name: "Couple Ring",
      price: 1500,
      category: "Rings",
      image: "/images/product11.jpg",
    },
    {
      name: "Luxury Bracelet",
      price: 2000,
      category: "Bracelets",
      image: "/images/product12.jpg",
    },
  ]);

  console.log("✅ Seeding complete!");
}

seed()
  .catch((err) => {
    console.error("❌ Error seeding DB:", err);
  })
  .finally(() => {
    process.exit(0);
  });
