// src/server/db/index.ts

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database("sqlite.db"); // local SQLite file
export const db = drizzle(sqlite);
