import { LegacyRef, MutableRefObject, forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  props: Props,
  ref: LegacyRef<HTMLInputElement> | null,
) {
  return (
    <input
      ref={ref}
      {...props}
      className="h-14 w-full rounded-md border border-border bg-transparent px-4"
    />
  );
});
