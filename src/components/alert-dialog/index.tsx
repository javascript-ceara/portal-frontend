import * as Primitive from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/button";

type AlertDialogProps = Primitive.AlertDialogProps;
function AlertDialog(props: AlertDialogProps) {
  return <Primitive.AlertDialog {...props} />;
}

const AlertDialogPortal = Primitive.Portal;
const AlertDialogDescription = Primitive.Description;

type AlertDialogHeaderProps = React.PropsWithChildren;
function AlertDialogHeader({ children }: AlertDialogHeaderProps) {
  return <div className="space-y-1.5">{children}</div>;
}

type AlertDialogFooterProps = React.PropsWithChildren;
function AlertDialogFooter({ children }: AlertDialogFooterProps) {
  return <div className="flex justify-end space-x-2">{children}</div>;
}

type AlertDialogTitleProps = Primitive.AlertDialogTitleProps;
function AlertDialogTitle(props: AlertDialogTitleProps) {
  return (
    <Primitive.AlertDialogTitle
      className="text-xl font-semibold leading-none tracking-tight"
      {...props}
    />
  );
}

type AlertDialogCancelProps = Primitive.AlertDialogCancelProps;
function AlertDialogCancel({ children, ...rest }: AlertDialogCancelProps) {
  return (
    <Primitive.AlertDialogCancel asChild {...rest}>
      <Button variant="outlined">{children}</Button>
    </Primitive.AlertDialogCancel>
  );
}

type AlertDialogActionProps = Primitive.AlertDialogActionProps;
function AlertDialogAction({ children, ...rest }: AlertDialogActionProps) {
  return (
    <Primitive.AlertDialogAction {...rest}>
      <Button>{children}</Button>
    </Primitive.AlertDialogAction>
  );
}

type AlertDialogOverlayProps = Primitive.AlertDialogOverlayProps;
function AlertDialogOverlay(props: AlertDialogOverlayProps) {
  return (
    <Primitive.AlertDialogOverlay
      {...props}
      className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80"
    />
  );
}

type AlertDialogContentProps = Primitive.AlertDialogContentProps;
function AlertDialogContent(props: AlertDialogContentProps) {
  return (
    <Primitive.AlertDialogContent
      className="border-border bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md border p-6 shadow-lg duration-200"
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogPortal,
  AlertDialogDescription,
};
