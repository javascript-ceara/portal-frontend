"use client";

import { Button } from "@/components/button";
import { EventCard } from "@/components/event-card";
import { Tables } from "@/types/supabase.database";
import Link from "next/link";

async function EventPage({
  ourEvents,
}: {
  ourEvents: Tables<"events">[] | null;
}) {
  return (
    <>
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
      <Button className="mt-4 w-full xl:w-auto" variant={"outlined"}>
        Ver mais eventos
      </Button>
    </>
  );
}

export { EventPage };
