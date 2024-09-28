import * as Primitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type DialogProps = Primitive.DialogProps;

export function Dialog(props: DialogProps) {
  return <Primitive.Dialog {...props} />;
}

Dialog.Portal = Primitive.Portal;
Dialog.Header = Header;
Dialog.Title = Title;
Dialog.Close = Close;
Dialog.Body = Body;
Dialog.Content = Content;
Dialog.Footer = Footer;
Dialog.Description = Description;

export type DialogHeaderProps = React.PropsWithChildren;
function Header({ children }: DialogHeaderProps) {
  return <div className="space-y-2">{children}</div>;
}

type DialogTitleProps = React.PropsWithChildren<{ className?: string }>;
function Title({ children, className }: DialogTitleProps) {
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

export type DialogCloseProps = React.PropsWithChildren;
function Close({ children }: DialogCloseProps) {
  return (
    <Primitive.Trigger className="absolute right-2 top-2 text-sm">
      <XIcon className="h-4 w-4" />
    </Primitive.Trigger>
  );
}

export type DialogBodyProps = React.PropsWithChildren;
function Body({ children }: DialogBodyProps) {
  return <div>{children}</div>;
}

export type DialogContentProps = Primitive.DialogContentProps;
function Content({ children, className }: DialogContentProps) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0 fixed inset-0 -z-0 z-10  grid  items-center justify-center overflow-y-auto bg-black/80" />
      <Primitive.Content
        className={twMerge(
          "fixed left-2/4 top-2/4 z-10 flex h-auto max-w-lg -translate-x-2/4 -translate-y-2/4 flex-col gap-4 rounded-md border border-border bg-background p-6",
          className,
        )}
      >
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
}

export type DialogFooterProps = React.PropsWithChildren<{ className?: string }>;
function Footer({ children, className }: DialogFooterProps) {
  return <div className={className}>{children}</div>;
}

type DialogDescriptionProps = Primitive.DialogDescriptionProps;
function Description({ className, ...rest }: DialogDescriptionProps) {
  return <Primitive.Description className={className} {...rest} />;
}
