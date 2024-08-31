import * as Section from "@/components/section";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
} from "@/components/typography";

export function Root({ children }: React.PropsWithChildren) {
  return (
    <Section.Root className="border-b border-border pb-12">
      <Section.Container>{children}</Section.Container>
    </Section.Root>
  );
}

export const Header = Section.Header;

export function Label() {
  return <TypographyH4 className="mb-4 text-xl">Próximo evento</TypographyH4>;
}

export function Title({ children }: React.PropsWithChildren) {
  return (
    <TypographyH1 className="mb-4 font-extrabold sm:text-5xl xl:text-7xl">
      {children}
    </TypographyH1>
  );
}

export const Description = TypographyLead;

export function Body({ children }: React.PropsWithChildren) {
  return <div className="space-y-8">{children}</div>;
}

export function Footer({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">{children}</div>
  );
}
