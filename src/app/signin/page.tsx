import Link from "next/link";
import { redirect } from "next/navigation";
import * as Section from "@/components/section";
import { Button } from "@/components/button";
import { SignInWithPassword } from "./signin-with-password";

import { createClient } from "@/services/supabase/server";

export default async function Page() {
  const client = createClient();
  const { data } = await client.auth.getUser();

  if (data.user?.id) {
    redirect("/");
  }

  return (
    <Section.Root>
      <Section.Container className="sm:mx-auto sm:max-w-xl">
        <Section.Header>
          <Section.Title className="text-center">Fazer login</Section.Title>

          <Section.Subtitle className="text-balance text-center">
            <span>Ainda não possui conta? </span>
            <Link href="/signup" className="text-primary">
              Cadastre-se
            </Link>
          </Section.Subtitle>
        </Section.Header>
        <SignInWithPassword />
        <Button asChild variant="outlined" className="my-4 w-full">
          <Link href="/signin/otp">Login sem senha</Link>
        </Button>
      </Section.Container>
    </Section.Root>
  );
}
