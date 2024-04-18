import { twMerge } from "tailwind-merge";
import {
  Content as PopoverContent,
  Portal,
  PopoverContentProps as PopoverContentProps,
} from "@radix-ui/react-popover";

export function Content({ className, ...rest }: PopoverContentProps) {
  return (
    <Portal>
      <PopoverContent
        className={twMerge(
          "dark:bg-background dark:border-foreground/20 z-50 mt-4 w-72 rounded-md border bg-white p-4 shadow-md outline-none",
          className,
        )}
        {...rest}
      />
    </Portal>
  );
}
