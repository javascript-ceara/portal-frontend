import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Minus } from "lucide-react";

import {
  OTPInput as Otp,
  OTPInputContext,
  OTPInputProps as OTPInputRootProps,
} from "input-otp";

export type { OTPInputProps as OTPInputRootProps } from "input-otp";

export function Root(props: OTPInputRootProps) {
  return (
    <Otp
      containerClassName={twMerge(
        "flex items-center justify-center gap-2 has-[:disabled]:opacity-50",
      )}
      className={twMerge("bg-red-500 disabled:cursor-not-allowed")}
      {...props}
    />
  );
}

export function Slot({
  index,
  className,
}: {
  className?: string;
  index: number;
}) {
  const { slots } = useContext(OTPInputContext);
  const { char, hasFakeCaret } = slots[index];

  return (
    <div
      className={twMerge(
        "relative flex h-12 w-12 items-center justify-center border border-border text-sm shadow-sm transition-all first:rounded-l-md first:border-r-0 first:border-l-border last:rounded-r-md last:border-l-0",
        slots[index].isActive && "ring-ring z-10 ring-1",
        className,
      )}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

export function Separator() {
  return (
    <div role="separator">
      <Minus className="text-border" />
    </div>
  );
}

export function Group({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
}
