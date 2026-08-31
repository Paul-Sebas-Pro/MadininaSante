import { z } from "zod";

/**
 * Validation centralisée des variables d'environnement.
 * Les variables `NEXT_PUBLIC_*` sont exposées au navigateur ; les autres
 * ne doivent être importées que depuis du code serveur.
 */

const serverSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("https://madinina-sante.pages.dev"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
});

const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export const env = {
  ...clientEnv,
  get server() {
    if (typeof window !== "undefined") {
      throw new Error("env.server ne doit pas être lu côté client");
    }
    return serverSchema.parse({
      DATABASE_URL: process.env.DATABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    });
  },
};

/** Indique si la connexion Supabase est configurée (utile tant que le backend n'existe pas). */
export const isSupabaseConfigured =
  Boolean(clientEnv.NEXT_PUBLIC_SUPABASE_URL) &&
  Boolean(clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);
