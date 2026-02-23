import { redirect } from "next/navigation";
import { createClient } from "@/services/supabase/server";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

import { PresentationFormContainer } from "./_components/presentation-form-container";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await createClient();

  const { data } = await client.auth.getUser();

  const { data: presentation } = await client
    .schema("public")
    .rpc("get_presentations")
    .eq("profile_id", data.user?.id || "")
    .eq("id", Number(id))
    .single();

  console.log(presentation);

  if (!presentation?.id) {
    return redirect(`/my-presentations/`);
  }

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Editar palestra</SectionTitle>
        </SectionHeader>
        <PresentationFormContainer presentation={presentation} />
      </SectionContainer>
    </Section>
  );
}
