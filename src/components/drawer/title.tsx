import { Drawer } from "vaul";
import { twMerge } from "tailwind-merge";

export type DrawerTitleProps = React.ComponentProps<typeof Drawer.Title>;

export function Title({ className, ...rest }: DrawerTitleProps) {
  return (
    <Drawer.Title
      className={twMerge(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...rest}
    />
  );
}
