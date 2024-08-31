import { User2Icon } from "lucide-react";
import * as Avatar from "@/components/avatar";
import { Button } from "@/components/button";
import * as EventCard from "@/components/event-card";
import { Hero } from "@/components/hero";
import * as NextEvent from "@/components/next-event";
import { convertEventToText } from "@/helps/events";
import * as Popover from "@/components/popover";
import * as Section from "@/components/section";
import * as Typography from "@/components/typography";
import { createClient } from "@/services/supabase/server";
import { CalendarDays } from "lucide-react";

export default async function Home() {
  const client = createClient();

  const { data } = await client
    .from("events")
    .select("*")
    .order("start_date", { ascending: true })
    .limit(1)
    .single();

  const { data: presentations } = await client.rpc("get_event_presentations", {
    input_event_id: data.id,
  });
  //TODO:: slatejs do site atual
  const text = convertEventToText(presentations);

  return (
    <main>
      <Hero />
      <Section.Root className="border-b border-border pb-12">
        <Section.Container>
          <Section.Header>
            <Section.Title>Próximo evento</Section.Title>
          </Section.Header>
          {/* TODO:: Add component */}
          <div className="space-y-16">
            <div className="mb-4 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
              {/* TODO:: add  */}
              <NextEvent.EventPlace
                placeName={data.place}
                placeAddress={data.address}
                isAnOnlineEvent={data.is_online}
              />

              <p className="inline-flex items-center space-x-1 text-sm  text-white">
                <CalendarDays className="h-5 w-5" />
                {/* TODO:: add  */}
                <NextEvent.EventStartDate
                  startDate={data.start_date}
                  showTime
                />
              </p>
            </div>
            <div>
              <Typography.TypographyH1 className="mb-4 text-center font-extrabold sm:text-5xl xl:text-7xl">
                {data.title}
              </Typography.TypographyH1>

              <Typography.TypographyLead>{text}</Typography.TypographyLead>
            </div>
            <div className="space-y-8">
              <Typography.TypographyH4>Agenda</Typography.TypographyH4>
              <ul className="divide-y divide-border">
                {presentations?.map((presentation) => (
                  <li
                    key={presentation.id}
                    className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4"
                  >
                    <Popover.Root>
                      <div>
                        <p className="flex items-center space-x-2 font-medium">
                          <Popover.Trigger>
                            <Avatar.Root className="flex h-8 w-8">
                              <Avatar.Image
                                src={
                                  presentation.profile_avatar_url ||
                                  "https://avatars.githubusercontent.com/u/124599?v=4"
                                }
                              />
                              <Avatar.Fallback>
                                <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
                              </Avatar.Fallback>
                            </Avatar.Root>
                          </Popover.Trigger>
                          <span>{presentation.profile_full_name}</span>
                        </p>
                        <Popover.Content className="flex flex-col items-center">
                          <Avatar.Root className="mb-4 flex h-24 w-24">
                            <Avatar.Image
                              src={
                                presentation.profile_avatar_url ||
                                "default-avatar-url"
                              }
                            />
                            <Avatar.Fallback>
                              <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
                            </Avatar.Fallback>
                          </Avatar.Root>
                          <Typography.TypographyH4>
                            {presentation.profile_full_name}
                          </Typography.TypographyH4>
                        </Popover.Content>
                      </div>
                    </Popover.Root>
                    <Typography.TypographyH3>
                      {presentation.title}
                    </Typography.TypographyH3>
                    <Typography.TypographyP className="max-w-3xl">
                      {presentation.description}
                    </Typography.TypographyP>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Inscreva-se</Button>
              <Button variant="outlined" size="lg">
                Envie sua palestra
              </Button>
            </div>
          </div>
        </Section.Container>
      </Section.Root>
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
