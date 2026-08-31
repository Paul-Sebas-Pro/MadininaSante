import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  // Les migrations appliquées vivent dans supabase/migrations/ (SQL écrit à la main).
  // drizzle-kit écrit ici un schéma généré servant uniquement de garde-fou anti-dérive.
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  // Les migrations SQL (PostGIS, RLS, triggers) sont maintenues à la main.
  // `drizzle-kit generate` sert de garde-fou pour repérer les dérives de schéma.
  verbose: true,
  strict: true,
});
