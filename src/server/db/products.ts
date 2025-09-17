import { db } from "./index";
import { products } from "./schema";
import { desc } from "drizzle-orm"; // if using drizzle

export async function getBestSellers() {
  // For now: just fetch first 8 products (later we can add "bestseller" field)
  return await db.select().from(products).orderBy(desc(products.id)).limit(8);
}
