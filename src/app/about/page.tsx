import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

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

import { TypographyP } from "@/components/typography";

import { createClient } from "@/services/supabase/server";

export default async function Page() {
  const client = await createClient();

  const { data: organizers } = await client
    .schema("public")
    .from("profiles")
    .select("*")
    .eq("is_an_organizer", true)
    .order("full_name", { ascending: true });

  return (
    <>
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>A comunidade</SectionTitle>
            <TypographyP>
              Welcome to our vibrant JavaScript community! We're a passionate
              group of developers, from beginners to experts, united by our love
              for JavaScript and modern web development. Our community focuses
              on sharing knowledge about the latest frameworks, best practices,
              and emerging technologies in the JavaScript ecosystem. Through
              regular meetups, code reviews, and collaborative projects, we help
              each other grow and stay updated with the rapidly evolving world
              of JavaScript development.
            </TypographyP>
          </SectionHeader>
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
    </>
  );
}
