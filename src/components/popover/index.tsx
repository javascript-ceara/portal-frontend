import { twMerge } from "tailwind-merge";
import {
  Popover,
  PopoverPortal,
  PopoverTrigger,
  PopoverContent,
  PopoverContentProps,
} from "@radix-ui/react-popover";

export const Root = Popover;
export const Portal = PopoverPortal;
export const Trigger = PopoverTrigger;

export function Content({ className, ...rest }: PopoverContentProps) {
  return (
    <PopoverContent
      {...rest}
      className={twMerge(
        "mt-4 w-72 rounded-md border border-border bg-background p-4 shadow-md outline-none",
        className,
      )}
    />
  );
}
