import Link from "next/link";
import { redirect } from "next/navigation";

import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/section";
import { SignUpFormContainer } from "./_components/signup-form";
import { createClient } from "@/services/supabase/server";

export default async function Page() {
  const client = await createClient();
  const { data } = await client.auth.getUser();

  if (data.user?.id) {
    redirect("/");
  }

  return (
    <Section>
      <SectionContainer className="sm:mx-auto sm:max-w-xl">
        <SectionHeader>
          <SectionTitle className="text-center">
            Cadastre-se gratuitamente
          </SectionTitle>

          <SectionSubtitle className="text-center">
            <span>Já possui conta? </span>
            <Link href="/signin" className="text-primary">
              Login
            </Link>
          </SectionSubtitle>
        </SectionHeader>

        <SignUpFormContainer />
      </SectionContainer>
    </Section>
  );
}
