"use server";

import { db } from "@/server/db";
import { products } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function getProductsByCategory(category: string) {
  try {
    const result = await db
      .select()
      .from(products)
      .where(eq(products.category, category));
    return result;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
