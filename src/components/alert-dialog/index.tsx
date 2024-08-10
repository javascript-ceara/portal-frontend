import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogOverlay,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCancelProps,
  AlertDialogActionProps,
  AlertDialogOverlayProps,
} from "@radix-ui/react-alert-dialog";

export const Root = AlertDialog;
export const Trigger = AlertDialogTrigger;
export const Portal = AlertDialogPortal;

export function Header({ children }: React.PropsWithChildren) {
  return <div className="space-y-1.5">{children}</div>;
}

export function Content(props: AlertDialogContentProps) {
  return (
    <AlertDialogContent
      className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md border  bg-white p-6 shadow-lg duration-200"
      {...props}
    />
  );
}

export function Footer({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end space-x-2">{children}</div>;
}

export function Title(props: AlertDialogTitleProps) {
  return (
    <AlertDialogTitle
      className="text-xl font-semibold leading-none tracking-tight"
      {...props}
    />
  );
}

export function Description(props: AlertDialogDescriptionProps) {
  return <AlertDialogDescription className="text-gray-600" {...props} />;
}

export function Cancel(props: AlertDialogCancelProps) {
  return (
    <AlertDialogCancel
      className="rounded-md border px-4 py-2 font-medium text-gray-600"
      {...props}
    />
  );
}

export function Action(props: AlertDialogActionProps) {
  return (
    <AlertDialogAction
      className="rounded-md border bg-brand-600 px-4  py-2 font-medium text-white"
      {...props}
    />
  );
}

export function Overlay(props: AlertDialogOverlayProps) {
  return (
    <AlertDialogOverlay
      {...props}
      className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80"
    />
  );
}
