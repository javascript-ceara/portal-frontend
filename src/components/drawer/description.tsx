import { Drawer } from "vaul";
import { twMerge } from "tailwind-merge";

export type DrawerDescriptionProps = React.ComponentProps<
  typeof Drawer.Description
>;

export function Description({ className, ...rest }: DrawerDescriptionProps) {
  return (
    <Drawer.Description
      className={twMerge(
        "text-lg leading-none tracking-tight text-gray-500",
        className,
      )}
      {...rest}
    />
  );
}
