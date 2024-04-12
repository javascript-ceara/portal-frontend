import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyLarge({ children, className }: Props) {
  return (
    <p className={twMerge("text-lg font-semibold", className)}>{children}</p>
  );
}
