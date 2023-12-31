create table todos (
  id bigint generated by default as identity primary key,
  name text not null,
  is_complete boolean default false,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
