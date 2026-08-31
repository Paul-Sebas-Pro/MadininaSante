import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

/**
 * Connexion Drizzle (pooler Supabase). `null` tant que `DATABASE_URL` n'est pas défini
 * — permet de builder/tester le site vitrine avant que le backend n'existe.
 */
const client = connectionString
  ? postgres(connectionString, { prepare: false })
  : null;

export const db = client ? drizzle(client, { schema }) : null;

export function requireDb() {
  if (!db)
    throw new Error("DATABASE_URL non défini : base de données indisponible");
  return db;
}

export { schema };
