import Link from "next/link";
import { Section } from "@/components/section";
import { EventCard } from "@/components/event-card";
import { createClient } from "@/services/supabase/server";

async function OurEvents() {
  const client = createClient();

  const { data: events } = await client
    .from("events")
    .select("*")
    .order("start_date", { ascending: true });

  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Nossos eventos</Section.Title>
        </Section.Header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events?.map(({ id, title, start_date, place, description }) => {
            return (
              <EventCard key={id}>
                <EventCard.Title>
                  <Link href={`/events/${id}`}>{title}</Link>
                </EventCard.Title>
                <EventCard.StartDate date={start_date} />
                <EventCard.Place>{place}</EventCard.Place>
                <EventCard.Description>{description}</EventCard.Description>
              </EventCard>
            );
          })}
        </div>
      </Section.Container>
    </Section>
  );
}

export { OurEvents };
