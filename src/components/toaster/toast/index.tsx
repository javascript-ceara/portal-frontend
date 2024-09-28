"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { XIcon } from "lucide-react";
import * as Primitive from "@radix-ui/react-toast";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md  p-6 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border border-border bg-background",
        destructive: "bg-red-600 group border text-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type ToastProps = Primitive.ToastProps &
  VariantProps<typeof toastVariants>;

export function Toast({ variant, className, ...rest }: ToastProps) {
  return (
    <Primitive.Toast
      className={twMerge(toastVariants({ variant }), variant, className)}
      {...rest}
    />
  );
}

Toast.Provider = Primitive.Provider;
Toast.Content = ToastContent;
Toast.Title = ToastTitle;
Toast.Description = ToastDescription;
Toast.Viewport = ToastViewport;
Toast.Close = ToastClose;
Toast.Action = ToastAction;

export type ToastContentProps = React.PropsWithChildren;
function ToastContent({ children }: ToastContentProps) {
  return <div className="grid gap-1">{children}</div>;
}

export type ToastTitleProps = Primitive.ToastTitleProps;
function ToastTitle(props: ToastTitleProps) {
  return <Primitive.ToastTitle className="text-sm font-semibold" {...props} />;
}

export type ToastDescriptionProps = Primitive.ToastDescriptionProps;
function ToastDescription(props: ToastDescriptionProps) {
  return <Primitive.ToastDescription className="text-sm" {...props} />;
}

export type ToastViewportProps = Primitive.ToastViewportProps;
function ToastViewport(props: ToastViewportProps) {
  return (
    <Primitive.ToastViewport
      className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      {...props}
    />
  );
}

export type ToastCloseProps = Primitive.ToastCloseProps;
function ToastClose(props: ToastCloseProps) {
  return (
    <Primitive.ToastClose
      className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600"
      {...props}
    >
      <XIcon className="h-4 w-4" />
    </Primitive.ToastClose>
  );
}

export type ToastActionElement = React.ReactElement<
  typeof Primitive.ToastAction
>;
export type ToastActionProps = React.ComponentProps<
  typeof Primitive.ToastAction
>;

function ToastAction(props: ToastActionProps) {
  return (
    <Primitive.ToastAction
      className="focus:ring-ring group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40"
      {...props}
    />
  );
}
