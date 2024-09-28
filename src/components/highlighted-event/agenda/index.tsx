import { TypographyH4 } from "@/components/typography";

type AgendaProps = React.PropsWithChildren;
export function Agenda({ children }: AgendaProps) {
  return <div>{children}</div>;
}

Agenda.Title = Title;

function Title() {
  return <TypographyH4 className="mb-4">Agenda</TypographyH4>;
}
