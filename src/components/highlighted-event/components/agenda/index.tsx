import { TypographyH4 } from "@/components/typography";

type HighlightedEventAgendaProps = React.HTMLAttributes<HTMLDivElement>;
function HighlightedEventAgenda({ children }: HighlightedEventAgendaProps) {
  return <div>{children}</div>;
}

type HighlightedEventAgendaTitleProps = React.HTMLAttributes<HTMLDivElement>;
function HighlightedEventAgendaTitle({
  children,
}: HighlightedEventAgendaTitleProps) {
  return <TypographyH4 className="mb-4">{children}</TypographyH4>;
}

export {
  HighlightedEventAgenda,
  HighlightedEventAgendaTitle,
  type HighlightedEventAgendaProps,
};
