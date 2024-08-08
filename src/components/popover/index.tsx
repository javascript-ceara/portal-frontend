import { twMerge } from "tailwind-merge";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
  Portal,
  PopoverContentProps as PopoverContentProps,
} from "@radix-ui/react-popover";

export type { PopoverProps as PopoverRootProps } from "@radix-ui/react-popover";

export const Root = Popover;
export const Trigger = PopoverTrigger;

export function Content({ className, ...rest }: PopoverContentProps) {
  return (
    <Portal>
      <PopoverContent
        className={twMerge(
          "border-border mt-4 rounded-md border bg-background p-4 shadow-md outline-none",
          className,
        )}
        {...rest}
      />
    </Portal>
  );
}
