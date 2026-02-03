import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Minus } from "lucide-react";

import * as Primitive from "input-otp";

type OtpInputProps = Primitive.OTPInputProps;

function OtpInput(props: OtpInputProps) {
  return (
    <Primitive.OTPInput
      containerClassName={twMerge(
        "flex items-center justify-center gap-2 has-[:disabled]:opacity-50",
      )}
      className={twMerge("bg-red-500 disabled:cursor-not-allowed")}
      {...props}
    />
  );
}

function OtpInputSlot({
  index,
  className,
}: {
  className?: string;
  index: number;
}) {
  const { slots } = useContext(Primitive.OTPInputContext);
  const { char, hasFakeCaret } = slots[index];

  return (
    <div
      className={twMerge(
        "border-border first:border-l-border relative flex h-12 w-12 items-center justify-center border text-sm shadow-sm transition-all first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0",
        slots[index].isActive && "ring-ring z-10 ring-1",
        className,
      )}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function OtpInputSeparator() {
  return (
    <div role="separator">
      <Minus className="text-border" />
    </div>
  );
}

type OtpInputGroupProps = React.PropsWithChildren<{
  className?: string;
}>;

function OtpInputGroup({ className, children }: OtpInputGroupProps) {
  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
}

export {
  OtpInput,
  OtpInputSlot,
  OtpInputSeparator,
  OtpInputGroup,
  type OtpInputProps,
  type OtpInputGroupProps,
};
