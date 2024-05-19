import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";
import { TypographyH3 } from "@/components/typography";
import { TypographyLead } from "@/components/typography";

type SectionRootProps = {
  children: React.ReactNode;
  className?: string;
};

export function Root({ children, className }: SectionRootProps) {
  return <section className={className}>{children}</section>;
}

type SectionContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: SectionContainerProps) {
  return (
    <div className={twMerge("px-8 lg:container lg:mx-auto", className)}>
      {children}
    </div>
  );
}

type SectionHeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: SectionHeaderProps) {
  return <div className="space-y-1 py-12">{children}</div>;
}

type SectionFooterProps = {
  children?: React.ReactNode;
};

export function Footer({ children }: SectionFooterProps) {
  return <div className="mt-12">{children}</div>;
}

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title(props: SectionTitleProps) {
  return <TypographyH3 {...props} />;
}

type SectionSubtitleProps = {
  children: React.ReactNode;
};

export function Subtitle({ children }: SectionSubtitleProps) {
  return <TypographyLead>{children}</TypographyLead>;
}

type SectionButtonProps = Partial<LinkProps> & {
  children: React.ReactNode;
  component?: React.ElementType | React.FC<LinkProps>;
};

export function Button({
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
