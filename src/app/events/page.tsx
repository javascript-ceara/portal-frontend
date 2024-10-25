import { Section } from "@/components/section";
import { createClient } from "@/services/supabase/server";
import { EventPage } from "./event-page";

export default async function Page() {
  const client = createClient();

  const { data: ourEvents } = await client
    .from("events")
    .select("*")
    .order("start_date", { ascending: true });

  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Nossos eventos</Section.Title>
        </Section.Header>
        <EventPage ourEvents={ourEvents} />
      </Section.Container>
    </Section>
  );
}
