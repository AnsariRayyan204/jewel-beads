import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),   // 👈 make sure this line is here
  image: text("image").notNull(),
});
