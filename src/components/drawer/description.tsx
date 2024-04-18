import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";

export type DrawerDescriptionProps = React.ComponentProps<
  typeof Drawer.Description
>;

export function Description({ className, ...rest }: DrawerDescriptionProps) {
  return (
    <Drawer.Description
      className={twMerge("text-lg leading-none tracking-tight", className)}
      {...rest}
    />
  );
}
