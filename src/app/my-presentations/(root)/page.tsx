import Link from "next/link";
import { redirect } from "next/navigation";

import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

import {
  PresentationCard,
  PresentationCardHeader,
  PresentationCardContent,
  PresentatonCardFooter,
  PresentationCardTitle,
  PresentationCardDescription,
  PresentationCardStatus,
  PresentationCardSubmissionDetails,
} from "@/components/presentation-card";

import { TruncatedText } from "@/components/truncated-text";

import { createClient } from "@/services/supabase/server";

export default async function Page() {
  const client = await createClient();

  const { data } = await client.auth.getUser();

  if (!data.user?.id) {
    redirect("/");
  }

  const { data: presentations } = await client
    .schema("public")
    .rpc("get_presentations")
    .eq("profile_id", data.user.id);

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Minhas palestras</SectionTitle>
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {presentations?.map((presentation) => {
            return (
              <PresentationCard
                key={presentation.id}
                className="w-full max-w-sm"
              >
                <PresentationCardHeader className="relative">
                  <PresentationCardStatus status={presentation.status} />
                  <PresentationCardTitle>
                    <Link href={`/my-presentations/${presentation.id}/edit`}>
                      {presentation.title}
                    </Link>
                  </PresentationCardTitle>
                </PresentationCardHeader>
                <PresentationCardContent>
                  <PresentationCardDescription>
                    {presentation.description}
                  </PresentationCardDescription>
                </PresentationCardContent>
                <PresentatonCardFooter>
                  <PresentationCardSubmissionDetails
                    eventId={presentation.event_id}
                    eventTitle={presentation.event_title}
                    createdAt={presentation.created_at}
                  />
                </PresentatonCardFooter>
              </PresentationCard>
            );
          })}
        </div>
      </SectionContainer>
    </Section>
  );
}
