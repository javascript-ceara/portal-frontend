-- ENUMS
    create type presentation_status as enum ('awaiting_review', 'under_review', 'accepted', 'declined');
    
-- FUNCTIONS
    -- get_presentations
            create or replace function get_presentations () 
            returns table(
                id int8,
                title text,
                description text,
                event_id int8,
                profile_id uuid,
                status presentation_status,
                created_at timestamptz,
                profile_full_name text,
                profile_avatar_url text,
                profile_github_url text,
                profile_linkedin_url text,
                profile_bio text,
                profile_email text,
                profile_phone text,
                event_title text,
                event_is_accepting_submissions boolean
            )  as $$
            begin
            return query
                select 
                public.presentations.id,
                public.presentations.title,
                public.presentations.description,
                public.presentations.event_id,
                public.presentations.profile_id,
                public.presentations.status,
                public.presentations.created_at,
                public.profiles.full_name as profile_full_name,
                public.profiles.avatar_url as profile_avatar_url,
                public.profiles.github_url as profile_github_url,
                public.profiles.linkedin_url as profile_linkedin_url,
                public.profiles.bio as profile_bio,
                public.profiles.email as profile_email,
                public.profiles.phone as profile_phone,
                public.events.title as event_title,
                public.events.is_accepting_submissions as event_is_accepting_submissions
                from public.presentations
                join public.events on public.events.id = public.presentations.event_id
                join public.profiles on public.profiles.id = public.presentations.profile_id
                where 1=1;   
            end; 
            $$ language plpgsql security invoker;

-- TABLES
    
    -- auth.users
        -- triggers
            
            -- after_insert_auth_user
                create function public.handle_after_insert_auth_user()
                returns trigger
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
    -- public.profiles
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
        --- triggers
            -- after_insert_event
                create function public.handle_after_insert_event()
                returns trigger
                as $$
                begin
                    if new.is_highlighted = true then
                        update public.events
                        set is_highlighted = false
                        where id != new.id
                        and is_highlighted = true;
                    end if;
                    return new;
                end;
                $$ language plpgsql security definer;
                create trigger after_insert_event
                after insert on public.events
                for each row execute procedure public.handle_after_insert_event();
            -- after_update_event
                create function public.handle_after_update_event()
                returns trigger
                as $$
                begin
                    if old.is_accepting_submissions != new.is_accepting_submissions then
                        update public.presentations
                        set status = case 
                        when status = 'awaiting_review' then 'declined'::presentation_status
                        when status = 'under_review' then 'declined'::presentation_status
                        else status
                        end
                        where event_id = new.id;
                    end if;

                    if new.is_highlighted = true then
                        update public.events
                        set is_highlighted = false
                        where id != new.id
                        and is_highlighted = true;
                    end if;

                    return new;
                end;
                $$ language plpgsql security definer;
                create trigger after_update_event
                after update on public.events
                for each row execute procedure public.handle_after_update_event();
        -- policies
            -- events_are_viewable_by_everyone
                alter table public.events enable row level security;
                drop policy if exists events_are_viewable_by_everyone on public.events;
                create policy events_are_viewable_by_everyone on public.events
                for select using(true);
    -- public.presentations
        -- triggers
            -- before_insert_presentation
                create function public.handle_before_insert_presentation()
                returns trigger
                as $$
                begin
                    new.status = 'awaiting_review';
                    return new;
                return new;
                end;
                $$ language plpgsql security definer;
                create trigger before_insert_presentation
                before insert on public.presentations
                for each row execute procedure public.handle_before_insert_presentation();
            -- before_update_presentation
                create function public.handle_before_update_presentation()
                returns trigger
                as $$
                begin
                    new.event_id = old.event_id;
                    return new;
                end;
                $$ language plpgsql security definer;
                create trigger before_update_presentation
                before update on public.presentations
                for each row execute procedure public.handle_before_update_presentation();
        -- policies
            -- presentations_are_viewable_by_everyone
                alter table public.presentations enable row level security;
                drop policy if exists presentations_are_viewable_by_everyone on public.presentations;
                create policy presentations_are_viewable_by_everyone on public.presentations
                for select using(true);

            -- presentations_are_inserted_by_authenticated_users_only
                -- alter table public.presentations enable row level security;
                -- drop policy if exists presentations_are_inserted_by_authenticated_users_only on public.presentations;
                -- create policy presentations_are_inserted_by_authenticated_users_only on public.presentations
                -- for insert to authenticated with check (true);

            -- presentations_are_inserted_only_if_is_accepting_submissions
                alter table public.presentations enable row level security;
                drop policy if exists presentations_are_inserted_only_if_is_accepting_submissions on public.presentations;
                create policy presentations_are_inserted_only_if_is_accepting_submissions on public.presentations
                for insert to authenticated with check (
                    exists (
                        select 1 from public.events e
                        where e.id = presentations.event_id
                        and e.is_accepting_submissions = true
                    )
                );

            -- presentation_is_updated_only_if_its_on_awaiting_review
                alter table public.presentations enable row level security;
                drop policy if exists presentation_is_updated_only_if_its_on_awaiting_review on public.presentations;
                create policy presentation_is_updated_only_if_its_on_awaiting_review on public.presentations
                for update using (
                    auth.uid() = profile_id 
                    AND status = 'awaiting_review'
                    AND exists (
                        select 1 from public.events e
                        where e.id = event_id
                        and e.is_accepting_submissions = true
                    )
                );
                