"use client";

import { twMerge } from "tailwind-merge";
import * as Primitive from "@radix-ui/react-popover";

type PopoverProps = Primitive.PopoverProps;

function Popover(props: PopoverProps) {
  return <Primitive.Popover {...props} />;
}

const PopoverPortal = Primitive.Portal;
const PopoverTrigger = Primitive.Trigger;

type PopoverContentProps = Primitive.PopoverContentProps;
function PopoverContent({ className, ...rest }: PopoverContentProps) {
  return (
    <Primitive.PopoverContent
      {...rest}
      className={twMerge(
        "border-border bg-background z-20 w-72 rounded-md border p-4 shadow-md outline-none",
        className,
      )}
    />
  );
}

export {
  Popover,
  PopoverPortal,
  PopoverTrigger,
  PopoverContent,
  type PopoverProps,
  type PopoverContentProps,
};
