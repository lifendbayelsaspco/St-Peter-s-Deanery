-- Supabase/PostgreSQL schema for St. Peter's Deanery Anglican Church

create table users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  role text default 'member',
  phone text,
  created_at timestamp with time zone default now()
);

create table sermons (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  preacher text not null,
  topic text,
  date date not null,
  description text,
  media_url text,
  resource_url text,
  category text,
  created_at timestamp with time zone default now()
);

create table ministries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  leader text,
  active boolean default true,
  created_at timestamp with time zone default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_date date not null,
  location text,
  featured boolean default false,
  created_at timestamp with time zone default now()
);

create table gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null,
  url text not null,
  caption text,
  created_at timestamp with time zone default now()
);

create table prayer_requests (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  request text not null,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

create table donations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  amount numeric not null,
  category text,
  payment_method text,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

create table livestreams (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  provider text not null,
  url text not null,
  scheduled_at timestamp with time zone,
  is_live boolean default false,
  created_at timestamp with time zone default now()
);

create table newsletters (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed boolean default true,
  created_at timestamp with time zone default now()
);

create table testimonies (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  author text,
  approved boolean default true,
  created_at timestamp with time zone default now()
);

create table announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null,
  published boolean default false,
  created_at timestamp with time zone default now()
);
