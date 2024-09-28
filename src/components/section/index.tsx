import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";
import { TypographyH3 } from "@/components/typography";
import { TypographyLead } from "@/components/typography";

export type SectionProps = React.PropsWithChildren<{
  className?: string;
}>;
export function Section({ children, className }: SectionProps) {
  return <section className={className}>{children}</section>;
}

Section.Title = TypographyH3;
Section.Subtitle = TypographyLead;
Section.Container = Container;
Section.Header = Header;
Section.Footer = Footer;
Section.Button = Button;

export type SectionContainerProps = React.PropsWithChildren<{
  className?: string;
}>;
function Container({ children, className }: SectionContainerProps) {
  return (
    <div className={twMerge("px-8 lg:container lg:mx-auto", className)}>
      {children}
    </div>
  );
}

export type SectionHeaderProps = React.PropsWithChildren;
function Header({ children }: SectionHeaderProps) {
  return <div className="space-y-1 py-12">{children}</div>;
}

export type SectionFooterProps = React.PropsWithChildren;
function Footer({ children }: SectionFooterProps) {
  return <div className="mt-12">{children}</div>;
}

export type SectionButtonProps = React.PropsWithChildren<
  Partial<LinkProps> & {
    children: React.ReactNode;
    component?: React.ElementType | React.FC<LinkProps>;
  }
>;
function Button({
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
