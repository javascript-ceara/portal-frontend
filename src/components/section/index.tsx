import { twMerge } from "tailwind-merge";
import { LinkProps } from "next/link";
import { TypographyH3 } from "@/components/typography";
import { TypographyLead } from "@/components/typography";

export const Title = TypographyH3;
export const Subtitle = TypographyLead;

export function Root({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return <section className={className}>{children}</section>;
}

export function Container({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div className={twMerge("px-8 lg:container lg:mx-auto", className)}>
      {children}
    </div>
  );
}

export function Header({ children }: React.PropsWithChildren) {
  return <div className="space-y-1 py-12">{children}</div>;
}

export function Footer({ children }: React.PropsWithChildren) {
  return <div className="mt-12">{children}</div>;
}

export function Button({
  component: Component = "button",
  children,
  ...rest
}: React.PropsWithChildren<
  Partial<LinkProps> & {
    children: React.ReactNode;
    component?: React.ElementType | React.FC<LinkProps>;
  }
>) {
  return (
    <Component
      {...rest}
      className="border-brand-600 text-brand-600 inline-block rounded-md  border px-7 py-4 md:text-lg"
    >
      {children}
    </Component>
  );
}
