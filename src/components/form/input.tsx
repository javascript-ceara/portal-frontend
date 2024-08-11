import { LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef(function Input(
  { className, ...props }: Props,
  ref: LegacyRef<HTMLInputElement> | null,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={twMerge(
        "h-14 w-full rounded-md border border-border bg-transparent px-4",
        className,
      )}
    />
  );
});
