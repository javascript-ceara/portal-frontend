import { TypographyH4 } from "@/components/typography";
export function Root({ children }: React.PropsWithChildren) {
  return <div>{children}</div>;
}

export function Title() {
  return <TypographyH4 className="mb-4">Agenda</TypographyH4>;
}
