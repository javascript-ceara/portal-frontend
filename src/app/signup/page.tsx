import Link from "next/link";
import { redirect } from "next/navigation";

import { Section } from "@/components/section";
// import { TypographySmall } from "@/components/typography";
// import { Separator } from "@/components/separator";

// import { SignUpWithGoogle } from "./signup-with-google";
import { SignUpWithPassword } from "./signup-with-password";
import { createClient } from "@/services/supabase/server";

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
          <Section.Title className="text-center">
            Cadastre-se gratuitamente
          </Section.Title>

          <Section.Subtitle className="text-center">
            <span>Já possui conta? </span>
            <Link href="/signin" className="text-primary">
              Login
            </Link>
          </Section.Subtitle>
        </Section.Header>

        {/* <SignUpWithGoogle /> */}

        {/* <Separator.Root className="my-8">
          <Separator.Label>
            <TypographySmall>Ou</TypographySmall>
          </Separator.Label>
        </Separator.Root> */}

        <SignUpWithPassword />
      </Section.Container>
    </Section>
  );
}
