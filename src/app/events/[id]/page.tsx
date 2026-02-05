import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

import {
  HighlightedEvent,
  HighlightedEventHeader,
  HighlightedEventBody,
  HighlightedEventFooter,
  HighlightedEventTitle,
  HighlightedEventDescription,
  HighlightedEventLabel,
  HighlightedEventPlaceAndDate,
  HighlightedEventSubscribe,
  HighlightedEventSubmit,
  HighlightedEventAgenda,
  HighlightedEventAgendaTitle,
  HighlightedEventPresentations,
  HighlightedEventPresentation,
  HighlightedEventPresentationAuthor,
  HighlightedEventPresentationTitle,
  HighlightedEventPresentationDescription,
} from "@/components/highlighted-event";

import {
  EventCard,
  EventCardDescription,
  EventCardTitle,
  EventCardPlaceAndAddress,
  EventCardStartDate,
} from "@/components/event-card";

import { createClient } from "@/services/supabase/server";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const client = await createClient();
  const { id } = await params;

  const { data: event } = await client
    .schema("public")
    .from("events")
    .select("*")
    .filter("id", "eq", id)
    .limit(1)
    .single();

  const { data: presentations } = await client
    .schema("public")
    .rpc("get_presentations")
    .eq("status", "accepted")
    .eq("event_id", event?.id || 0);

  return (
    <HighlightedEvent>
      <HighlightedEventHeader>
        <HighlightedEventLabel />
        <HighlightedEventPlaceAndDate
          place={event?.place || ""}
          address={event?.address || ""}
          startDate={event?.start_date || ""}
        />
        <HighlightedEventTitle>{event?.title}</HighlightedEventTitle>
        <HighlightedEventDescription>
          {event?.description}
        </HighlightedEventDescription>
      </HighlightedEventHeader>
      <HighlightedEventBody>
        <HighlightedEventAgenda>
          <HighlightedEventAgendaTitle>Agenda</HighlightedEventAgendaTitle>
          <HighlightedEventPresentations>
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
                <HighlightedEventPresentation key={id}>
                  <HighlightedEventPresentationAuthor
                    avatarUrl={profile_avatar_url}
                    fullName={profile_full_name}
                    githubUrl={profile_github_url}
                    linkedinUrl={profile_linkedin_url}
                    bio={profile_bio}
                  />
                  <HighlightedEventPresentationTitle>
                    {title}
                  </HighlightedEventPresentationTitle>
                  <HighlightedEventPresentationDescription>
                    {description}
                  </HighlightedEventPresentationDescription>
                </HighlightedEventPresentation>
              ),
            )}
          </HighlightedEventPresentations>
        </HighlightedEventAgenda>
      </HighlightedEventBody>
      <HighlightedEventFooter>
        <HighlightedEventSubscribe href={event?.subscribe_url} />
        <HighlightedEventSubmit
          href={"/presentations/new"}
          disabled={!event?.is_accepting_submissions}
        />
      </HighlightedEventFooter>
    </HighlightedEvent>
  );
}
