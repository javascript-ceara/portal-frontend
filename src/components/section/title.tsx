import { TypographyH3 } from "@/components/typography/h3";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title(props: SectionTitleProps) {
  return <TypographyH3 {...props} />;
}
