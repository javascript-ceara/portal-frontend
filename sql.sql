-- FUNCTIONS
    -- get_event_presentations
            create or replace function get_event_presentations (input_event_id int8) 
            returns table(
                id int8,
                title text,
                description text,
                profile_full_name text,
                profile_avatar_url text,
                profile_github_url text,
                profile_linkedin_url text,
                profile_site_url text,
                profile_bio text,
                profile_company text,
                profile_email text
            )  as $$
            begin
            return query
                select distinct
                public.presentations.id,
                public.presentations.title,
                public.presentations.description,
                public.profiles.full_name as profile_full_name,
                public.profiles.avatar_url as profile_avatar_url,
                public.profiles.github_url as profile_github_url,
                public.profiles.linkedin_url as profile_linkedin_url,
                public.profiles.site_url as profile_site_url,
                public.profiles.bio as profile_bio,
                public.profiles.company as profile_company,
                public.profiles.email as profile_email
                
                from public.presentations 

                join public.event_presentations on
                public.presentations.id = public.event_presentations.presentation_id

                join public.profiles on
                public.profiles.id = public.presentations.profile_id

                where public.event_presentations.event_id = input_event_id;
            
            end; 
            $$ language plpgsql security definer;
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
    -- public.presentations

        -- policies
            -- presentations_are_viewable_by_everyone
                alter table public.presentations enable row level security;
                drop policy if exists presentations_are_viewable_by_everyone on public.presentations;
                create policy presentations_are_viewable_by_everyone on public.presentations
                for select using(true);
    -- public.presentation_authors

        -- policies
            -- presentation_authors_are_viewable_by_everyone
                alter table public.presentation_authors enable row level security;
                drop policy if exists presentation_authors_are_viewable_by_everyone on public.presentation_authors;
                create policy presentation_authors_are_viewable_by_everyone on public.presentation_authors
                for select using(true);