import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string;
};
export function TypographyP({ children, className }: Props) {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
