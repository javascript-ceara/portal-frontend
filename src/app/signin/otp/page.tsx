import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { createClient } from "@/services/supabase/server";
import { OtpFormContainer } from "./_components/otp-form";

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
          <div className="flex items-center justify-center">
            <Link href="/signin" className=" flex items-center text-xs">
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
          </div>
          <SectionTitle className="text-center">Login sem senha</SectionTitle>
        </SectionHeader>
        <OtpFormContainer />
      </SectionContainer>
    </Section>
  );
}
