"use client";

import { User2Icon } from "lucide-react";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import * as Section from "@/components/section";
import * as Typography from "@/components/typography";
import * as Avatar from "@/components/avatar";
import * as Popover from "@/components/popover";
import * as EventCard from "@/components/event-card";
import * as Dialog from "@/components/dialog";
export default function Home() {
  return (
    <main>
      <Hero />
      <Section.Root className="border-b border-border pb-12">
        <Section.Container>
          <Section.Header>
            <Section.Title>Próximo evento</Section.Title>
          </Section.Header>
          <div className="space-y-16">
            <div>
              <Typography.TypographyH1 className="mb-4 font-extrabold sm:text-5xl xl:text-7xl">
                9 Meetup React Ceará
              </Typography.TypographyH1>
              <Typography.TypographyLead>
                Dia 11 de maio, às 13h , estaremos na Digital College sede
                Aldeota com nosso segundo meetup de 2024.
              </Typography.TypographyLead>
            </div>
            <div className="space-y-8">
              <Typography.TypographyH4>Agenda</Typography.TypographyH4>
              <ul className="divide-y divide-border">
                {Array.from(Array(5).keys()).map((e) => {
                  return (
                    <li
                      key={e}
                      className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4"
                    >
                      <Popover.Root>
                        <p className="flex items-center space-x-2 font-medium">
                          <Popover.Trigger>
                            <Avatar.Root className="flex h-8 w-8">
                              <Avatar.Image src="https://avatars.githubusercontent.com/u/124599?v=4" />
                              <Avatar.Fallback>
                                <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
                              </Avatar.Fallback>
                            </Avatar.Root>
                          </Popover.Trigger>
                          <span>Cicero Viana</span>
                        </p>
                        <Popover.Content className="flex flex-col items-center">
                          <Avatar.Root className="mb-4 flex h-24 w-24">
                            <Avatar.Image src="https://avatars.githubusercontent.com/u/124599?v=4" />
                            <Avatar.Fallback>
                              <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
                            </Avatar.Fallback>
                          </Avatar.Root>
                          <Typography.TypographyH4>
                            Cicero Viana
                          </Typography.TypographyH4>
                          <Typography.TypographySmall>
                            Front-end developer
                          </Typography.TypographySmall>
                        </Popover.Content>
                      </Popover.Root>

                      <Typography.TypographyH3>
                        Aplicando para vagas Internacionais
                      </Typography.TypographyH3>
                      <Typography.TypographyP className="max-w-3xl">
                        Nessa apresentação irei compartilhar dicas e sugestões
                        de dois recrutadores americanos, além de compartilhar o
                        que aprendi ao aplicar a vagas internacionais.
                      </Typography.TypographyP>
                    </li>
                  );
                })}
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
