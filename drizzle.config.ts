import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",            // 👈 use dialect instead of driver
  dbCredentials: {
    url: "./sqlite.db",         // SQLite database file
  },
});
