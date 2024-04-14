"use client";

import { createContext } from "react";
import { Drawer } from "vaul";
export type DrawerContextType = {
  direction?: "top" | "bottom" | "right" | "left";
};

export const DrawerContext = createContext<{}>({} as DrawerContextType);

export type DrawerRootProps = React.ComponentProps<typeof Drawer.Root> &
  DrawerContextType;

export function Root({ direction, children, ...rest }: DrawerRootProps) {
  return (
    <DrawerContext.Provider value={{ direction }}>
      <Drawer.Root direction={direction} {...rest}>
        <Drawer.Portal>{children}</Drawer.Portal>
      </Drawer.Root>
    </DrawerContext.Provider>
  );
}
