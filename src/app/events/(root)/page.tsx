import Link from "next/link";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import {
  EventCard,
  EventCardHeader,
  EventCardBody,
  EventCardDescription,
  EventCardTitle,
  EventCardPlaceAndAddress,
  EventCardStartDate,
} from "@/components/event-card";
import { createClient } from "@/services/supabase/server";

export default async function Page() {
  const client = await createClient();

  const { data: ourEvents } = await client
    .schema("public")
    .from("events")
    .select("*")
    .order("start_date", { ascending: true });

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Nossos eventos</SectionTitle>
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ourEvents?.map(
            ({ id, title, start_date, place, address, description }) => {
              return (
                <EventCard key={id}>
                  <EventCardHeader>
                    <EventCardTitle>
                      <Link href={`/events/${id}`}>{title}</Link>
                    </EventCardTitle>
                  </EventCardHeader>
                  <EventCardBody>
                    <EventCardStartDate date={start_date} />
                    <EventCardPlaceAndAddress place={place} address={address} />
                    <EventCardDescription>{description}</EventCardDescription>
                  </EventCardBody>
                </EventCard>
              );
            },
          )}
        </div>
      </SectionContainer>
    </Section>
  );
}
