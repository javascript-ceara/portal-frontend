import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyLead({ children, className }: Props) {
  return (
    <p className={twMerge("text-xl text-gray-500", className)}>{children}</p>
  );
}
