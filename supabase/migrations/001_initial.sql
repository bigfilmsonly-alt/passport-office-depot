-- Passport Office Depot — Initial Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Leads table
create table leads (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  name text,
  email text,
  phone text,
  nationality text,
  service text,
  speed text,
  travel_date date,
  quoted_fee int,
  source text
);

-- Orders table
create table orders (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  lead_id uuid references leads(id),
  stripe_session_id text,
  amount int,
  status text default 'pending'
);

-- Reviews table
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  author text,
  location text,
  rating int check (rating >= 1 and rating <= 5),
  body text,
  approved bool default false
);

-- Referrals table
create table referrals (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  referrer_email text,
  referred_email text,
  status text default 'pending'
);

-- Assistant logs table
create table assistant_logs (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  session_id text,
  role text,
  content text
);

-- RLS policies
alter table leads enable row level security;
alter table orders enable row level security;
alter table reviews enable row level security;
alter table referrals enable row level security;
alter table assistant_logs enable row level security;

-- Allow anonymous inserts to leads
create policy "Allow anonymous inserts to leads"
  on leads for insert
  to anon
  with check (true);

-- Allow anonymous inserts to referrals
create policy "Allow anonymous inserts to referrals"
  on referrals for insert
  to anon
  with check (true);

-- Allow reading approved reviews only
create policy "Allow reading approved reviews"
  on reviews for select
  to anon
  using (approved = true);
