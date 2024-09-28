import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

type Props = React.PropsWithChildren<{
  className?: string;
  asChild?: boolean;
}>;

function TypographyH1({ children, className }: Props) {
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

function TypographyH2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

function TypographyH3({ children, className }: Props) {
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

function TypographyH4({ children, className, asChild }: Props) {
  const Comp = asChild ? Slot : "h4";
  return (
    <Comp
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

function TypographyLarge({ children, className }: Props) {
  return (
    <p className={twMerge("text-lg font-semibold", className)}>{children}</p>
  );
}

function TypographyLead({ children, className }: Props) {
  return <p className={twMerge("text-xl", className)}>{children}</p>;
}

function TypographyP({ children, className }: Props) {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

function TypographySmall({ children, className }: Props) {
  return (
    <p className={twMerge("text-sm font-medium leading-none", className)}>
      {children}
    </p>
  );
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyP,
  TypographySmall,
};
