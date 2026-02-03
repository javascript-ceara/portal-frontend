import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { Button } from "@/components/button";

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
  ProfileCard,
  ProfileCardHeader,
  ProfileCardFooter,
  ProfileCardAvatar,
  ProfileCardName,
  ProfileCardBio,
  ProfileCardGithubLink,
  ProfileCardLinkedinLink,
} from "@/components/profile-card";

import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

import {
  EventCard,
  EventCardBody,
  EventCardDescription,
  EventCardHeader,
  EventCardPlaceAndAddress,
  EventCardStartDate,
  EventCardTitle,
} from "@/components/event-card";

import { createClient } from "@/services/supabase/server";

export default async function Home() {
  const client = await createClient();

  const { data: highlightedEvent } = await client
    .schema("public")
    .from("events")
    .select("*")
    .filter("is_highlighted", "eq", true)
    .order("start_date", { ascending: true })
    .limit(1)
    .single();

  const { data: presentations } = highlightedEvent
    ? await client
        .schema("public")
        .rpc("get_presentations")
        .eq("status", "accepted")
        .eq("event_id", highlightedEvent.id)
    : { data: [] };

  const { data: ourEvents } = await client
    .schema("public")
    .from("events")
    .select("*")
    .order("start_date", { ascending: true });

  const { data: organizers } = await client
    .schema("public")
    .from("profiles")
    .select("*")
    .eq("is_an_organizer", true)
    .order("full_name", { ascending: true });

  return (
    <main>
      <Hero />
      {highlightedEvent && (
        <HighlightedEvent>
          <HighlightedEventHeader>
            <HighlightedEventLabel />
            <HighlightedEventPlaceAndDate
              place={highlightedEvent?.place || ""}
              address={highlightedEvent?.address || ""}
              startDate={highlightedEvent?.start_date || ""}
            />
            <HighlightedEventTitle>
              {highlightedEvent?.title}
            </HighlightedEventTitle>
            <HighlightedEventDescription>
              {highlightedEvent?.description}
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
            <HighlightedEventSubscribe href={highlightedEvent?.subscribe_url} />
            <HighlightedEventSubmit
              href={"/presentations/new"}
              disabled={!highlightedEvent?.is_accepting_submissions}
            />
          </HighlightedEventFooter>
        </HighlightedEvent>
      )}

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
                      <EventCardPlaceAndAddress
                        place={place}
                        address={address}
                      />
                      <EventCardDescription>{description}</EventCardDescription>
                    </EventCardBody>
                  </EventCard>
                );
              },
            )}
          </div>
          <Button
            className="mt-4 w-full xl:w-auto"
            size="md"
            variant="outlined"
            asChild
          >
            <Link href="/events">Ver mais eventos</Link>
          </Button>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Organizadores</SectionTitle>
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {organizers?.map((organizer) => {
              return (
                <ProfileCard key={organizer.id}>
                  <ProfileCardHeader>
                    <ProfileCardAvatar src={organizer.avatar_url || ""} />
                  </ProfileCardHeader>
                  <ProfileCardName>{organizer.full_name}</ProfileCardName>
                  <ProfileCardBio>{organizer.bio}</ProfileCardBio>
                  <ProfileCardFooter>
                    <ProfileCardGithubLink
                      href={organizer.github_url || ""}
                      title={`Perfil do Github de ${organizer.full_name}`}
                    />
                    <ProfileCardLinkedinLink
                      href={organizer.github_url || ""}
                      title={`Perfil do Linkedin de ${organizer.full_name}`}
                    />
                  </ProfileCardFooter>
                </ProfileCard>
              );
            })}
          </div>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Parceiros</SectionTitle>
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="border-border flex h-[200px] items-center justify-center rounded-2xl border p-8 text-lg">
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="object-contain"
                  alt=""
                  src="/partther-digital-college.png"
                />
              </div>
            </div>
            <div className="border-border flex h-[200px] items-center justify-center rounded-2xl border p-8 text-lg">
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="object-contain"
                  alt=""
                  src="/partther-estacio.png"
                />
              </div>
            </div>
            <div className="border-border flex h-[200px] items-center justify-center rounded-2xl border p-8 text-lg">
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="object-contain"
                  alt=""
                  src="/partther-adote-um-bigode.jpg"
                />
              </div>
            </div>
            <div className="border-border flex h-[200px] items-center justify-center rounded-2xl border p-8 text-lg">
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="object-contain"
                  alt=""
                  src="/partther-mundo-sem-fio.svg"
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </main>
  );
}
