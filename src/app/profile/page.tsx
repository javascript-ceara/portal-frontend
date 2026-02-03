import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { createClient } from "@/services/supabase/server";
import { redirect } from "next/navigation";
import { ProfileFormContainer } from "./_components/profile-form-container";

export default async function Page() {
  const client = await createClient();
  const { data } = await client.auth.getUser();

  if (!data.user?.id) {
    redirect("/");
  }

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle className="text-start">Perfil</SectionTitle>
        </SectionHeader>
        <ProfileFormContainer />
      </SectionContainer>
    </Section>
  );
}
