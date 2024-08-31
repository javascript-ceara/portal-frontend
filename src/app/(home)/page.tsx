import * as EventCard from "@/components/event-card";
import { Hero } from "@/components/hero";
import * as Section from "@/components/section";

import { NextEvent } from "./next-event";

export default async function Home() {
  return (
    <main>
      <Hero />
      <NextEvent />
      <Section.Root>
        <Section.Container>
          <Section.Header>
            <Section.Title>Eventos anteriores</Section.Title>
          </Section.Header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(10).keys()).map((e) => {
              return (
                <EventCard.Root key={e}>
                  <EventCard.Title>Décimo meetup React Ceará</EventCard.Title>
                  <div className="space-y-4">
                    <EventCard.StartDate date="2024-09-20" />
                    <EventCard.Place>Digital College (Aldeota)</EventCard.Place>
                  </div>
                  <EventCard.Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt ipsa illum temporibus libero culpa ipsam.
                    Recusandae ab incidunt odio! Sunt cupiditate corrupti magnam
                    accusantium ratione!
                  </EventCard.Description>
                </EventCard.Root>
              );
            })}
          </div>
        </Section.Container>
      </Section.Root>
      <Section.Root>
        <Section.Container>
          <Section.Header>
            <Section.Title>Parceiros</Section.Title>
          </Section.Header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(4).keys()).map((e) => {
              return (
                <div
                  key={e}
                  className="flex min-h-[200px] items-center justify-center rounded-2xl border border-border text-lg"
                >
                  Logo here
                </div>
              );
            })}
          </div>
        </Section.Container>
      </Section.Root>
    </main>
  );
}
