import { Button } from "@/components/button";
import * as Section from "@/components/next-event-section";
import * as Agenda from "@/components/next-event-agenda";
import * as Presentations from "@/components/next-event-presentations";

import { createClient } from "@/services/supabase/server";

export async function NextEvent() {
  const client = createClient();

  const { data: event } = await client
    .from("events")
    .select("*")
    .order("start_date", { ascending: true })
    .limit(1)
    .single();

  const { data: presentations } = await client.rpc("get_event_presentations", {
    input_event_id: event?.id || 0,
  });

  return (
    <Section.Root>
      <Section.Header>
        <Section.Label />
        <Section.Title>{event?.title}</Section.Title>
        <Section.Description>{event?.description}</Section.Description>
      </Section.Header>
      <Agenda.Root>
        <Agenda.Title />
        <Presentations.Root>
          {presentations?.map((presentation) => (
            <Presentations.Presentation key={presentation.id}>
              <Presentations.PresentationAuthor
                avatarUrl={presentation.profile_avatar_url}
                fullName={presentation.profile_full_name}
              />
              <Presentations.PresentationTitle>
                {presentation.title}
              </Presentations.PresentationTitle>
              <Presentations.PresentationDescription>
                {presentation.description}
              </Presentations.PresentationDescription>
            </Presentations.Presentation>
          ))}
        </Presentations.Root>
      </Agenda.Root>
      <Section.Footer>
        <Button size="lg" asChild>
          <a href={event?.subscribe_url}>Inscreva-se</a>
        </Button>
        <Button variant="outlined" size="lg">
          Envie sua palestra
        </Button>
      </Section.Footer>
    </Section.Root>
  );
}
