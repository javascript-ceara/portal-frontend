import { TypographyLead } from "@/components/typography/lead";

type SectionSubtitleProps = {
  children: React.ReactNode;
};

export function Subtitle({ children }: SectionSubtitleProps) {
  return <TypographyLead>{children}</TypographyLead>;
}
