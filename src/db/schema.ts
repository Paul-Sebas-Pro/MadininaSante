import {
  boolean,
  doublePrecision,
  index,
  jsonb,
  pgEnum,
  pgTable,
  smallint,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * Schéma de la base Madinina Santé (Supabase / Postgres).
 * La colonne géographique `location geography(Point,4326)` et les politiques RLS
 * sont gérées dans les migrations SQL (`supabase/migrations/`), pas ici.
 */

export const establishmentType = pgEnum("establishment_type", [
  "medecin",
  "cabinet",
  "pharmacie",
  "hopital",
  "clinique",
  "laboratoire",
  "radiologie",
  "mmg", // maison médicale de garde
  "dentiste",
  "autre",
]);

export const dataSource = pgEnum("data_source", [
  "datagouv",
  "finess",
  "osm",
  "manual",
]);

export const shiftKind = pgEnum("shift_kind", ["pharmacie", "medecin", "mmg"]);

export const articleLocale = pgEnum("article_locale", ["fr", "en"]);

export const emergencyScope = pgEnum("emergency_scope", ["national", "local"]);

export const claimStatus = pgEnum("claim_status", [
  "pending",
  "approved",
  "rejected",
]);

export const establishments = pgTable(
  "establishments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    type: establishmentType("type").notNull(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    specialties: text("specialties").array(),
    address: text("address"),
    postalCode: text("postal_code"),
    city: text("city"),
    lat: doublePrecision("lat"),
    lng: doublePrecision("lng"),
    phone: text("phone"),
    email: text("email"),
    website: text("website"),
    /** Horaires au format OSM `opening_hours` + éventuel objet structuré. */
    openingHours: jsonb("opening_hours"),
    source: dataSource("source").notNull().default("manual"),
    externalId: text("external_id"),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    premium: boolean("premium").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    uniqueIndex("establishments_slug_key").on(t.slug),
    uniqueIndex("establishments_source_external_key").on(
      t.source,
      t.externalId,
    ),
    index("establishments_type_city_idx").on(t.type, t.city),
  ],
);

export const shifts = pgTable(
  "shifts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    kind: shiftKind("kind").notNull(),
    establishmentId: uuid("establishment_id").references(
      () => establishments.id,
      {
        onDelete: "set null",
      },
    ),
    /** Libre si l'établissement n'est pas encore dans l'annuaire. */
    label: text("label"),
    sector: text("sector"),
    startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
    endsAt: timestamp("ends_at", { withTimezone: true }).notNull(),
    note: text("note"),
    source: dataSource("source").notNull().default("manual"),
    createdBy: uuid("created_by"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("shifts_kind_window_idx").on(t.kind, t.startsAt, t.endsAt),
    index("shifts_establishment_idx").on(t.establishmentId),
  ],
);

export const emergencyContacts = pgTable("emergency_contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  label: text("label").notNull(),
  phone: text("phone").notNull(),
  category: text("category").notNull(),
  scope: emergencyScope("scope").notNull().default("national"),
  description: text("description"),
  sortOrder: smallint("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const articles = pgTable(
  "articles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull(),
    locale: articleLocale("locale").notNull().default("fr"),
    title: text("title").notNull(),
    excerpt: text("excerpt"),
    body: text("body").notNull(),
    tags: text("tags").array(),
    coverImage: text("cover_image"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [uniqueIndex("articles_slug_locale_key").on(t.slug, t.locale)],
);

export const proClaims = pgTable("pro_claims", {
  id: uuid("id").defaultRandom().primaryKey(),
  establishmentId: uuid("establishment_id").references(
    () => establishments.id,
    {
      onDelete: "set null",
    },
  ),
  claimantName: text("claimant_name").notNull(),
  claimantEmail: text("claimant_email").notNull(),
  message: text("message"),
  status: claimStatus("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/** Profils applicatifs (rôle éditeur pour le back-office `/admin`). */
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  role: text("role").notNull().default("viewer"),
  fullName: text("full_name"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Establishment = typeof establishments.$inferSelect;
export type Shift = typeof shifts.$inferSelect;
export type Article = typeof articles.$inferSelect;
export type EmergencyContact = typeof emergencyContacts.$inferSelect;
