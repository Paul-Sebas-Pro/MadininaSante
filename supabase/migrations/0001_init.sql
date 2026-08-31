-- Madinina Santé — schéma initial
-- Migration maintenue à la main (PostGIS + RLS non gérés par drizzle-kit).

create extension if not exists "postgis";
create extension if not exists "pgcrypto";
create extension if not exists "pg_trgm";

-- ── Enums ────────────────────────────────────────────────────────────────────
create type establishment_type as enum (
  'medecin', 'cabinet', 'pharmacie', 'hopital', 'clinique',
  'laboratoire', 'radiologie', 'mmg', 'dentiste', 'autre'
);
create type data_source     as enum ('datagouv', 'finess', 'osm', 'manual');
create type shift_kind       as enum ('pharmacie', 'medecin', 'mmg');
create type article_locale   as enum ('fr', 'en');
create type emergency_scope  as enum ('national', 'local');
create type claim_status     as enum ('pending', 'approved', 'rejected');

-- ── updated_at helper ────────────────────────────────────────────────────────
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ── Profils / rôles ──────────────────────────────────────────────────────────
create table profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  role       text not null default 'viewer',
  full_name  text,
  created_at timestamptz not null default now()
);

create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

create or replace function is_editor() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('editor', 'admin')
  );
$$;

-- ── Établissements ───────────────────────────────────────────────────────────
create table establishments (
  id            uuid primary key default gen_random_uuid(),
  type          establishment_type not null,
  name          text not null,
  slug          text not null unique,
  specialties   text[],
  address       text,
  postal_code   text,
  city          text,
  lat           double precision,
  lng           double precision,
  location      geography(Point, 4326)
                generated always as (
                  case when lat is not null and lng is not null
                       then st_setsrid(st_makepoint(lng, lat), 4326)::geography
                  end
                ) stored,
  phone         text,
  email         text,
  website       text,
  opening_hours jsonb,
  source        data_source not null default 'manual',
  external_id   text,
  verified_at   timestamptz,
  premium       boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create unique index establishments_source_external_key
  on establishments (source, external_id) where external_id is not null;
create index establishments_type_city_idx on establishments (type, city);
create index establishments_location_idx  on establishments using gist (location);
create index establishments_name_trgm_idx on establishments using gin (name gin_trgm_ops);
create trigger establishments_set_updated_at
  before update on establishments
  for each row execute function set_updated_at();

-- ── Gardes (pharmacies / médecins / MMG) ─────────────────────────────────────
create table shifts (
  id               uuid primary key default gen_random_uuid(),
  kind             shift_kind not null,
  establishment_id uuid references establishments (id) on delete set null,
  label            text,
  sector           text,
  starts_at        timestamptz not null,
  ends_at          timestamptz not null,
  note             text,
  source           data_source not null default 'manual',
  created_by       uuid references auth.users (id) on delete set null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  constraint shifts_window_chk check (ends_at > starts_at)
);
create index shifts_kind_window_idx   on shifts (kind, starts_at, ends_at);
create index shifts_establishment_idx on shifts (establishment_id);
create trigger shifts_set_updated_at
  before update on shifts
  for each row execute function set_updated_at();

-- ── Numéros d'urgence ────────────────────────────────────────────────────────
create table emergency_contacts (
  id          uuid primary key default gen_random_uuid(),
  label       text not null,
  phone       text not null,
  category    text not null,
  scope       emergency_scope not null default 'national',
  description text,
  sort_order  smallint not null default 0,
  created_at  timestamptz not null default now()
);

-- ── Articles conseils santé ──────────────────────────────────────────────────
create table articles (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null,
  locale       article_locale not null default 'fr',
  title        text not null,
  excerpt      text,
  body         text not null,
  tags         text[],
  cover_image  text,
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (slug, locale)
);
create trigger articles_set_updated_at
  before update on articles
  for each row execute function set_updated_at();

-- ── Revendications de fiche par les professionnels ───────────────────────────
create table pro_claims (
  id               uuid primary key default gen_random_uuid(),
  establishment_id uuid references establishments (id) on delete set null,
  claimant_name    text not null,
  claimant_email   text not null,
  message          text,
  status           claim_status not null default 'pending',
  created_at       timestamptz not null default now()
);

-- ── RLS ─────────────────────────────────────────────────────────────────────
alter table profiles           enable row level security;
alter table establishments     enable row level security;
alter table shifts             enable row level security;
alter table emergency_contacts enable row level security;
alter table articles           enable row level security;
alter table pro_claims         enable row level security;

-- Lecture publique du contenu
create policy "public read establishments"   on establishments     for select using (true);
create policy "public read shifts"           on shifts             for select using (true);
create policy "public read emergency"        on emergency_contacts for select using (true);
create policy "public read published articles"
  on articles for select using (published_at is not null and published_at <= now());

-- Profil : chacun lit/modifie le sien
create policy "read own profile"   on profiles for select using (id = auth.uid());
create policy "update own profile" on profiles for update using (id = auth.uid());

-- Écriture réservée aux éditeurs
create policy "editors write establishments" on establishments     for all using (is_editor()) with check (is_editor());
create policy "editors write shifts"         on shifts             for all using (is_editor()) with check (is_editor());
create policy "editors write emergency"      on emergency_contacts for all using (is_editor()) with check (is_editor());
create policy "editors write articles"       on articles           for all using (is_editor()) with check (is_editor());
create policy "editors read claims"          on pro_claims         for select using (is_editor());
create policy "editors update claims"        on pro_claims         for update using (is_editor()) with check (is_editor());

-- Un visiteur peut soumettre une revendication
create policy "anyone can submit a claim" on pro_claims for insert with check (status = 'pending');
