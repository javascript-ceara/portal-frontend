"use client";

import { twMerge } from "tailwind-merge";
import { createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { Drawer as VaulDrawer } from "vaul";

export type DrawerContextType = {
  direction?: "top" | "bottom" | "right" | "left";
};

const DrawerContext = createContext<{}>({} as DrawerContextType);

export type DrawerProps = React.ComponentProps<typeof VaulDrawer.Root> &
  DrawerContextType;

export function Drawer({ direction, children, ...rest }: DrawerProps) {
  return (
    <DrawerContext.Provider value={{ direction }}>
      <VaulDrawer.Root direction={direction} {...rest}>
        {children}
      </VaulDrawer.Root>
    </DrawerContext.Provider>
  );
}

Drawer.Overlay = Overlay;
Drawer.Header = Header;
Drawer.Content = Content;
Drawer.Body = Body;
Drawer.Title = Title;
Drawer.Description = Description;
Drawer.Trigger = VaulDrawer.Trigger;
Drawer.Portal = VaulDrawer.Portal;

export type DrawerOverlayProps = React.ComponentProps<
  typeof VaulDrawer.Overlay
>;
function Overlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <VaulDrawer.Overlay
      className={twMerge("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  );
}

export type DrawerHeaderProps = {
  className?: string;
  children?: React.ReactNode;
};
function Header({ className, children }: DrawerHeaderProps) {
  return (
    <div className={twMerge("grid gap-1.5 px-4 pt-4 text-center", className)}>
      {children}
    </div>
  );
}

const contentVariants = cva(
  "fixed z-50 flex h-auto bg-background w-full flex-col border border border-border text-foreground",
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
export type DrawerContentProps = React.ComponentProps<
  typeof VaulDrawer.Content
>;
function Content({ className, children, ...props }: DrawerContentProps) {
  const { direction } = useContext<DrawerContextType>(DrawerContext);
  return (
    <VaulDrawer.Content
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
    </VaulDrawer.Content>
  );
}

export type DrawerBodyProps = {
  className?: string;
  children?: React.ReactNode;
};
function Body({ className, children }: DrawerBodyProps) {
  return <div className={twMerge("p-4", className)}>{children}</div>;
}

export type DrawerTitleProps = React.ComponentProps<typeof VaulDrawer.Title>;
function Title({ className, ...rest }: DrawerTitleProps) {
  return (
    <VaulDrawer.Title
      className={twMerge(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...rest}
    />
  );
}

export type DrawerDescriptionProps = React.ComponentProps<
  typeof VaulDrawer.Description
>;
function Description({ className, ...rest }: DrawerDescriptionProps) {
  return (
    <VaulDrawer.Description
      className={twMerge("text-lg leading-none tracking-tight", className)}
      {...rest}
    />
  );
}
