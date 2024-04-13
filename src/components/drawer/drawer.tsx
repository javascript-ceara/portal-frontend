'use client'

import { ComponentProps, createContext, HTMLAttributes, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer as DrawerPrimitive } from "vaul";

const DrawerContext = createContext<{
  direction?: 'top' | 'bottom' | 'right' | 'left'
}>({})

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>
export interface DrawerOverlayProps extends React.ComponentProps<typeof DrawerPrimitive.Overlay> { }
export interface DrawerContentProps extends React.ComponentProps<typeof DrawerPrimitive.Content> {}
export interface DrawerTitleProps extends React.ComponentProps<typeof DrawerPrimitive.Title> {}
export interface DrawerDescriptionProps extends React.ComponentProps<typeof DrawerPrimitive.Description> {}
export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

const Drawer = ({ shouldScaleBackground = true, ...props }: DrawerProps) => (
  <DrawerContext.Provider value={{ direction: props.direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  </DrawerContext.Provider>
)

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = (({ className, ...props }: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay
    className={twMerge("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));

const DrawerContent = (({ className, children, ...props }: DrawerContentProps) => {
  const { direction } = useContext(DrawerContext)
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={twMerge(
          'fixed z-50 flex h-auto flex-col border bg-white w-full',
          (!direction || direction === 'bottom') && 'inset-x-0 bottom-0 mt-24',
          direction === 'top' && 'inset-x-0 top-0',
          direction === 'right' && 'right-0 top-0 h-screen',
          direction === 'left' && 'left-0 top-0 h-screen',
          className
          )}
        {...props}
      >
        {direction === 'bottom' && <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-200" />}
        {children}
        {direction === 'top' && <div className="mx-auto m-4 h-2 w-[100px] rounded-full bg-zinc-200" />}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
});

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={twMerge("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={twMerge("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);

const DrawerTitle = (({ className, ...props }: DrawerTitleProps) => (
  <DrawerPrimitive.Title
    className={twMerge(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

const DrawerDescription = (({ className, ...props }: DrawerDescriptionProps) => (
  <DrawerPrimitive.Description
    className={twMerge("text-sm text-muted-foreground", className)}
    {...props}
  />
));


export {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger
};

