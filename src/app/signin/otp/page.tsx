import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/section";
import { createClient } from "@/services/supabase/server";
import { SignInWithOtp } from "./signin-with-otp";

export default async function Page() {
  const client = createClient();
  const { data } = await client.auth.getUser();

  if (data.user?.id) {
    redirect("/");
  }

  return (
    <Section>
      <Section.Container className="sm:mx-auto sm:max-w-xl">
        <Section.Header>
          <div className="flex items-center justify-center">
            <Link href="/signin" className=" flex items-center text-xs">
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
          </div>
          <Section.Title className="text-center">Login sem senha</Section.Title>
        </Section.Header>
        <SignInWithOtp />
      </Section.Container>
    </Section>
  );
}
