"use client";

import { Section } from "@/components/section";
import { ProfileCard } from "@/components/profile-card";

import { Tables } from "@/types/supabase.database";

async function Organizers({
  organizers,
}: {
  organizers: Tables<"profiles">[] | null;
}) {
  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Organizadores</Section.Title>
        </Section.Header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {organizers?.map((organizer) => {
            return (
              <ProfileCard>
                <ProfileCard.Header>
                  <ProfileCard.Avatar src={organizer.avatar_url || ""} />
                </ProfileCard.Header>
                <ProfileCard.Name>{organizer.full_name}</ProfileCard.Name>
                <ProfileCard.Bio>{organizer.bio}</ProfileCard.Bio>
                <ProfileCard.Footer>
                  <ProfileCard.GithubLink
                    href={organizer.github_url || ""}
                    title={`Perfil do Github de ${organizer.full_name}`}
                  />
                  <ProfileCard.LinkedinLink
                    href={organizer.github_url || ""}
                    title={`Perfil do Linkedin de ${organizer.full_name}`}
                  />
                </ProfileCard.Footer>
              </ProfileCard>
            );
          })}
        </div>
      </Section.Container>
    </Section>
  );
}

export { Organizers };
