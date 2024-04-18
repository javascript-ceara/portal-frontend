"use client";

import { cva } from "class-variance-authority";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";
import { DrawerContext, DrawerContextType } from "./root";

type DrawerContentProps = React.ComponentProps<typeof Drawer.Content>;

const contentVariants = cva(
  "fixed z-50 flex h-auto bg-background w-full flex-col border border-background-lighter text-foreground",
  {
    variants: {
      direction: {
        left: "left-0 top-0 h-screen",
        top: "inset-x-0 top-0",
        right: "right-0 top-0 h-screen",
        bottom: "inset-x-0 bottom-0 mt-24",
      },
    },
    defaultVariants: {
      direction: "bottom",
    },
  },
);

export function Content({ className, children, ...props }: DrawerContentProps) {
  const { direction } = useContext<DrawerContextType>(DrawerContext);
  return (
    <Drawer.Content
      className={twMerge(contentVariants({ direction, className }))}
      {...props}
    >
      {direction === "bottom" && (
        <div className="mx-auto mt-4 h-2 w-[50px] rounded-full" />
      )}
      {children}
      {direction === "top" && (
        <div className="m-4 mx-auto h-2 w-[50px] rounded-full" />
      )}
    </Drawer.Content>
  );
}
