"use client";

import { HighlightedEvent as Highlighted } from "@/components/highlighted-event";
import { Tables, Database } from "@/types/supabase.database";

async function HighlightedEvent({
  highlightedEvent,
  presentations,
}: {
  highlightedEvent: Tables<"events"> | null;
  presentations:
    | Database["public"]["Functions"]["get_event_presentations"]["Returns"]
    | null;
}) {
  return (
    <Highlighted>
      <Highlighted.Header>
        <Highlighted.Label />
        <Highlighted.PlaceAndDate
          place={highlightedEvent?.place || ""}
          address={highlightedEvent?.address || ""}
          startDate={highlightedEvent?.start_date || ""}
        />
        <Highlighted.Title>{highlightedEvent?.title}</Highlighted.Title>
        <Highlighted.Description>
          {highlightedEvent?.description}
        </Highlighted.Description>
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
        <Highlighted.Subscribe href={highlightedEvent?.subscribe_url} />
        <Highlighted.Submit />
      </Highlighted.Footer>
    </Highlighted>
  );
}

export { HighlightedEvent };
