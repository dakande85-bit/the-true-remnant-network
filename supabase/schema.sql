-- The True Remnant Network MVP schema draft
-- Run later in Supabase when moving from static seed data to database-backed content.

create table if not exists directory_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  city text,
  country text,
  summary text,
  bio text,
  verification_status text default 'Listed',
  website_url text,
  youtube_url text,
  resource_url text,
  related_podcast_url text,
  latitude numeric,
  longitude numeric,
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  creator text,
  type text not null,
  topic text,
  summary text,
  url text,
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists podcast_episodes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  guest text,
  topic text,
  summary text,
  youtube_url text,
  published_at date,
  created_at timestamptz default now()
);

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  city text,
  country text,
  website_url text,
  media_url text,
  message text,
  status text default 'Pending',
  created_at timestamptz default now()
);
