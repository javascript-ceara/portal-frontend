import { createClient } from "@/services/supabase/server";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/section";
import type { PresentationFormEventProps } from "@/components/presentation-form";
import { PresentationFormContainer } from "./_components/presentation-form-container";

export default async function Page() {
  const client = await createClient();

  const { data: events } = await client
    .schema("public")
    .from("events")
    .select("*")
    .eq("is_accepting_submissions", true);

  const options: PresentationFormEventProps["options"] =
    events?.map((event) => ({
      label: event.title,
      value: String(event.id),
    })) || [];

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Enviar palestra</SectionTitle>
        </SectionHeader>
        <PresentationFormContainer events={options} />
      </SectionContainer>
    </Section>
  );
}
