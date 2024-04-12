import { User2Icon } from "lucide-react";
import { Hero } from "@/components/hero";
import * as Section from "@/components/section";
import * as Typography from "@/components/typography";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section.Root className="border-b bg-gray-50 pb-12">
        <Section.Container>
          <Section.Header>
            <Section.Title>Próximo evento</Section.Title>
          </Section.Header>
          <div className="space-y-16">
            <div>
              <Typography.TypographyH1 className="mb-4 font-extrabold sm:text-5xl xl:text-7xl">
                9 Meetup React Ceará
              </Typography.TypographyH1>
              <Typography.TypographyLead>
                Dia 11 de maio, às 13h , estaremos na Digital College sede
                Aldeota com nosso segundo meetup de 2024.
              </Typography.TypographyLead>
            </div>
            <div className="space-y-8">
              <Typography.TypographyH4>Agenda</Typography.TypographyH4>
              <ul className="divide-y">
                {Array.from(Array(5).keys()).map(() => {
                  return (
                    <li className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4">
                      <p className="flex items-center font-medium">
                        <User2Icon className="h-8 w-8 rounded-full bg-gray-100 p-1" />
                        <span>Cicero Viana</span>
                      </p>
                      <Typography.TypographyH3>
                        Aplicando para vagas Internacionais
                      </Typography.TypographyH3>
                      <Typography.TypographyP className="max-w-3xl">
                        Nessa apresentação irei compartilhar dicas e sugestões
                        de dois recrutadores americanos, além de compartilhar o
                        que aprendi ao aplicar a vagas internacionais.
                      </Typography.TypographyP>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Inscreva-se</Button>
              <Button variant="outlined" size="lg">
                Envie sua palestra
              </Button>
            </div>
          </div>
        </Section.Container>
      </Section.Root>
      <Section.Root>
        <Section.Container>
          <Section.Header>
            <Section.Title>Eventos anteriores</Section.Title>
          </Section.Header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(10).keys()).map(() => {
              return (
                <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-gray-500 text-lg">
                  Event card
                </div>
              );
            })}
          </div>
        </Section.Container>
      </Section.Root>
      <Section.Root>
        <Section.Container>
          <Section.Header>
            <Section.Title>Parceiros</Section.Title>
          </Section.Header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from(Array(4).keys()).map(() => {
              return (
                <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-gray-500 text-lg">
                  Logo here
                </div>
              );
            })}
          </div>
        </Section.Container>
      </Section.Root>
    </main>
  );
}
