import { twMerge } from "tailwind-merge";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function TypographyH1({ children, className }: Props) {
  return (
    <h1
      className={twMerge(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: Props) {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: Props) {
  return (
    <h4
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyLarge({ children, className }: Props) {
  return (
    <p className={twMerge("text-lg font-semibold", className)}>{children}</p>
  );
}

export function TypographyLead({ children, className }: Props) {
  return <p className={twMerge("text-xl", className)}>{children}</p>;
}

export function TypographyP({ children, className }: Props) {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children }: Props) {
  return <p className="text-sm font-medium leading-none">{children}</p>;
}
