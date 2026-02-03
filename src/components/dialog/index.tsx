import * as Primitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type DialogProps = Primitive.DialogProps;
function Dialog(props: DialogProps) {
  return <Primitive.Dialog {...props} />;
}

const DialogPortal = Primitive.Portal;

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
function DialogHeader({ children, ...rest }: DialogHeaderProps) {
  return (
    <div className="space-y-2" {...rest}>
      {children}
    </div>
  );
}

type DialogTitleProps = React.PropsWithChildren<{ className?: string }>;
function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <Primitive.Title
      className={twMerge(
        "text-xl font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </Primitive.Title>
  );
}

function DialogClose() {
  return (
    <Primitive.Trigger className="absolute right-2 top-2 text-sm">
      <XIcon className="h-4 w-4" />
    </Primitive.Trigger>
  );
}

type DialogBodyProps = React.PropsWithChildren;
function DialogBody({ children }: DialogBodyProps) {
  return <div>{children}</div>;
}

type DialogContentProps = Primitive.DialogContentProps;
function DialogContent({ children, className }: DialogContentProps) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0 fixed inset-0 -z-0 z-10  grid  items-center justify-center overflow-y-auto bg-black/80" />
      <Primitive.Content
        className={twMerge(
          "border-border bg-background fixed left-2/4 top-2/4 z-10 flex h-auto max-w-lg -translate-x-2/4 -translate-y-2/4 flex-col gap-4 rounded-md border p-6",
          className,
        )}
      >
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
}

type DialogFooterProps = React.PropsWithChildren<{ className?: string }>;
function DialogFooter({ children, className }: DialogFooterProps) {
  return <div className={className}>{children}</div>;
}

type DialogDescriptionProps = Primitive.DialogDescriptionProps;
function DialogDescription({ className, ...rest }: DialogDescriptionProps) {
  return <Primitive.Description className={className} {...rest} />;
}

export {
  Dialog,
  DialogPortal,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogDescription,
  type DialogProps,
  type DialogHeaderProps,
  type DialogTitleProps,
  type DialogBodyProps,
  type DialogContentProps,
  type DialogFooterProps,
  type DialogDescriptionProps,
};
