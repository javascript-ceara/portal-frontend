import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/section";
import { Button } from "@/components/button";
import { SignInFormContainer } from "./_components/signin-form";

export default async function Page() {
  return (
    <Section>
      <SectionContainer className="sm:mx-auto sm:max-w-xl">
        <SectionHeader>
          <SectionTitle className="text-center">Fazer login</SectionTitle>
          <SectionSubtitle className="text-balance text-center">
            <span>Ainda não possui conta? </span>
            <Link href="/signup" className="text-primary">
              Cadastre-se
            </Link>
          </SectionSubtitle>
        </SectionHeader>
        <SignInFormContainer />
        <Button asChild variant="outlined" className="my-4 w-full">
          <Link href="/signin/otp">Login sem senha</Link>
        </Button>
      </SectionContainer>
    </Section>
  );
}
