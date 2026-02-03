import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";
import { TypographyH3 } from "@/components/typography";
import { TypographyLead } from "@/components/typography";

type SectionProps = React.PropsWithChildren<{
  className?: string;
}>;

function Section({ children, className }: SectionProps) {
  return <section className={className}>{children}</section>;
}

const SectionTitle = TypographyH3;
const SectionSubtitle = TypographyLead;

type SectionContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div className={twMerge("px-8 lg:container lg:mx-auto", className)}>
      {children}
    </div>
  );
}

type SectionHeaderProps = React.PropsWithChildren;
function SectionHeader({ children }: SectionHeaderProps) {
  return <div className="space-y-1 py-12">{children}</div>;
}

type SectionFooterProps = React.PropsWithChildren;
function SectionFooter({ children }: SectionFooterProps) {
  return <div className="mt-12">{children}</div>;
}

type SectionButtonProps = React.PropsWithChildren<
  Partial<LinkProps> & {
    children: React.ReactNode;
    component?: React.ElementType | React.FC<LinkProps>;
  }
>;

function SectionButton({
  component: Component = "button",
  children,
  ...rest
}: SectionButtonProps) {
  return (
    <Component
      {...rest}
      className="border-brand-600 text-brand-600 inline-block rounded-md  border px-7 py-4 md:text-lg"
    >
      {children}
    </Component>
  );
}

export {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SectionFooter,
  SectionButton,
  type SectionProps,
  type SectionContainerProps,
  type SectionHeaderProps,
  type SectionFooterProps,
  type SectionButtonProps,
};
