import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyLead({ children, className }: Props) {
  return (
    <p
      className={twMerge(
        "dark:text-foreground text-content-foreground text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
