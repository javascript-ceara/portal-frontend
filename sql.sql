-- TABLES

    -- auth.users
        -- triggers
            
            -- after_insert_auth_user
            create function public.handle_after_insert_auth_user()
            returns trigger
            set search_path = ''
            as $$
            begin
            insert into public.profiles (
                id, 
                full_name, 
                email,
                phone,
                avatar_url
            )
            values (
                new.id,
                new.raw_user_meta_data->>'full_name',
                new.email,
                new.raw_user_meta_data->>'phone',
                new.raw_user_meta_data->>'avatar_url'
            );
            return new;
            end;
            $$ language plpgsql security definer;
            create trigger after_insert_auth_user
            after insert on auth.users
            for each row execute procedure public.handle_after_insert_auth_user();
        
        -- policies
            -- profiles_are_viewable_by_everyone
                alter table public.profiles enable row level security;
                drop policy if exists profiles_are_viewable_by_everyone on public.profiles;
                create policy profiles_are_viewable_by_everyone on public.profiles
                for select using(true);

            -- profiles_are_inserted_by_owner
                alter table public.profiles enable row level security;
                drop policy if exists profiles_are_inserted_by_owner on public.profiles;
                create policy profiles_are_inserted_by_owner on public.profiles
                for insert with check (auth.uid() = id);

            -- profiles_are_updated_by_owner
                alter table public.profiles enable row level security;
                drop policy if exists profiles_are_updated_by_owner on public.profiles;
                create policy profiles_are_updated_by_owner on public.profiles
                for update using (auth.uid() = id);
    -- public.events

        -- policies
            -- events_are_viewable_by_everyone
                alter table public.events enable row level security;
                drop policy if exists events_are_viewable_by_everyone on public.events;
                create policy events_are_viewable_by_everyone on public.events
                for select using(true);
    