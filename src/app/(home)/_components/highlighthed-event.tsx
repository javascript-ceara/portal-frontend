import { HighlightedEvent as Highlighted } from "@/components/highlighted-event";
import { createClient } from "@/services/supabase/server";

async function HighlightedEvent() {
  const client = createClient();

  const { data: event } = await client
    .from("events")
    .select("*")
    .filter("is_highlighted", "eq", true)
    .order("start_date", { ascending: true })
    .limit(1)
    .single();

  const { data: presentations } = await client.rpc("get_event_presentations", {
    input_event_id: event?.id || 0,
  });

  return (
    <Highlighted>
      <Highlighted.Header>
        <Highlighted.Label />
        <Highlighted.PlaceAndDate
          place={event?.place || ""}
          address={event?.address || ""}
          startDate={event?.start_date || ""}
        />
        <Highlighted.Title>{event?.title}</Highlighted.Title>
        <Highlighted.Description>{event?.description}</Highlighted.Description>
      </Highlighted.Header>
      <Highlighted.Body>
        <Highlighted.Agenda>
          <Highlighted.Agenda.Title />
          <Highlighted.Presentations>
            {presentations?.map(
              ({
                id,
                profile_avatar_url,
                profile_full_name,
                profile_github_url,
                profile_linkedin_url,
                profile_bio,
                title,
                description,
              }) => (
                <Highlighted.Presentation key={id}>
                  <Highlighted.Presentation.Author
                    avatarUrl={profile_avatar_url}
                    fullName={profile_full_name}
                    githubUrl={profile_github_url}
                    linkedinUrl={profile_linkedin_url}
                    bio={profile_bio}
                  />
                  <Highlighted.Presentation.Title>
                    {title}
                  </Highlighted.Presentation.Title>
                  <Highlighted.Presentation.Description>
                    {description}
                  </Highlighted.Presentation.Description>
                </Highlighted.Presentation>
              ),
            )}
          </Highlighted.Presentations>
        </Highlighted.Agenda>
      </Highlighted.Body>
      <Highlighted.Footer>
        <Highlighted.Subscribe href={event?.subscribe_url} />
        <Highlighted.Submit />
      </Highlighted.Footer>
    </Highlighted>
  );
}

export { HighlightedEvent };
