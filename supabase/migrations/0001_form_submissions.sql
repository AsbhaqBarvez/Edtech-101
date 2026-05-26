-- 0001_form_submissions.sql
-- Tables that store public form submissions from the marketing site.
-- No auth is required to insert; reads/updates/deletes are denied to
-- anon and authenticated roles (handled by Supabase Studio / service role).

-- Contact form submissions
create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  topic       text not null default 'other',
  message     text not null,
  created_at  timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- Newsletter subscriptions
create table if not exists public.newsletter_subscriptions (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  created_at  timestamptz not null default now()
);

create index if not exists newsletter_subscriptions_created_at_idx
  on public.newsletter_subscriptions (created_at desc);

-- Row Level Security
alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscriptions enable row level security;

-- Allow anyone (anon + authenticated) to insert form submissions.
-- We intentionally do NOT add SELECT / UPDATE / DELETE policies, so the
-- only way to read or modify rows is via the service role (Studio, admin).

drop policy if exists "anyone can submit contact form"
  on public.contact_submissions;
create policy "anyone can submit contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "anyone can subscribe to newsletter"
  on public.newsletter_subscriptions;
create policy "anyone can subscribe to newsletter"
  on public.newsletter_subscriptions
  for insert
  to anon, authenticated
  with check (true);
