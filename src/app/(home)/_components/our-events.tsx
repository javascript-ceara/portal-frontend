"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { EventCard } from "@/components/event-card";
import { Tables } from "@/types/supabase.database";
import { Button } from "@/components/button";

async function OurEvents({
  ourEvents,
}: {
  ourEvents: Tables<"events">[] | null;
}) {
  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Nossos eventos</Section.Title>
        </Section.Header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ourEvents?.map(({ id, title, start_date, place, description }) => {
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
        <Button className="mt-4 xl:w-auto w-full" variant={'outlined'}>Ver mais eventos</Button>
      </Section.Container>
    </Section>
  );
}

export { OurEvents };
