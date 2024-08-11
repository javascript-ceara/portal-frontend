import * as Section from "@/components/section";
import { createClient } from "@/services/supabase/server";
import { redirect } from "next/navigation";
import { Profile } from "./profile";

export default async function Page() {
  const client = createClient();
  const { data } = await client.auth.getUser();

  if (data.user?.id) {
    redirect("/");
  }

  return (
    <Section.Root>
      <Section.Container>
        <Section.Header>
          <Section.Title className="text-start">Perfil</Section.Title>
        </Section.Header>
        <Section.Header>
          <Section.Title className="text-start">Dados pessoais</Section.Title>
        </Section.Header>
        <Profile />
      </Section.Container>
    </Section.Root>
  );
}
