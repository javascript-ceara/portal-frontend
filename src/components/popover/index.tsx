"use client";

import { twMerge } from "tailwind-merge";
import * as Primitive from "@radix-ui/react-popover";

export type PopoverProps = Primitive.PopoverProps;

export function Popover(props: PopoverProps) {
  return <Primitive.Popover {...props} />;
}

Popover.Portal = Primitive.Portal;
Popover.Trigger = Primitive.Trigger;
Popover.Content = Content;

export type PopoverContentProps = Primitive.PopoverContentProps;
function Content({ className, ...rest }: PopoverContentProps) {
  return (
    <Primitive.PopoverContent
      {...rest}
      className={twMerge(
        "z-20 w-72 rounded-md border border-border bg-background p-4 shadow-md outline-none",
        className,
      )}
    />
  );
}
