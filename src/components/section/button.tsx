import { LinkProps } from "next/link";

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
