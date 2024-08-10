import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Root = Dialog.Dialog;

export function Header({ children }: React.PropsWithChildren) {
  return <div className="space-y-1">{children}</div>;
}

export function Title({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Dialog.Title
      className={twMerge(
        "text-xl font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </Dialog.Title>
  );
}

export function Close() {
  return (
    <Dialog.Trigger className="absolute right-2 top-2 text-sm">
      <XIcon className="h-4 w-4" />
    </Dialog.Trigger>
  );
}

export function Content({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0  grid  items-center justify-center overflow-y-auto bg-black/80" />
      <Dialog.Content
        className={twMerge(
          "fixed left-2/4 top-2/4 flex h-auto w-96 -translate-x-2/4 -translate-y-2/4 flex-col gap-2 rounded-md border  border-border bg-background p-6",
          className,
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function Description({ children }: React.PropsWithChildren) {
  return <Dialog.Description>{children}</Dialog.Description>;
}
