import {
  Root as PopoverRoot,
  PopoverProps,
  Portal,
} from "@radix-ui/react-popover";

export type { PopoverProps } from "@radix-ui/react-popover";

export function Root(props: PopoverProps) {
  return <PopoverRoot {...props} />;
}
