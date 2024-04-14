"use client";

import { Drawer } from "vaul";
import { twMerge } from "tailwind-merge";
export type DrawerOverlayProps = React.ComponentProps<typeof Drawer.Overlay>;

export function Overlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <Drawer.Overlay
      className={twMerge("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  );
}
