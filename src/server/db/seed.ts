import { db } from "@/server/db";
import { categories, products } from "@/server/db/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // Insert categories
  await db.insert(categories).values([
    { name: "Necklaces" },
    { name: "Rings" },
    { name: "Earrings" },
    { name: "Bracelets" },
  ]);

  // Insert products
  await db.insert(products).values([
    {
      name: "Gold Necklace",
      price: 1500,
      image: "/images/product1.jpg",
      categoryId: 1,
    },
    {
      name: "Silver Ring",
      price: 800,
      image: "/images/product2.jpg",
      categoryId: 2,
    },
    {
      name: "Diamond Earrings",
      price: 2500,
      image: "/images/product3.jpg",
      categoryId: 3,
    },
    {
      name: "Pearl Bracelet",
      price: 1200,
      image: "/images/product4.jpg",
      categoryId: 4,
    },
  ]);

  console.log("✅ Database seeded!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
