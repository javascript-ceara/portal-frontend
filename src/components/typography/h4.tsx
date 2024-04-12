import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH4({ children, className }: Props) {
  return (
    <h4
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
