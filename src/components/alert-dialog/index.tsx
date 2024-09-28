import * as Primitive from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/button";

export type AlertDialogProps = Primitive.AlertDialogProps;
export function AlertDialog(props: AlertDialogProps) {
  return <Primitive.AlertDialog />;
}

AlertDialog.Header = Header;
AlertDialog.Footer = Footer;
AlertDialog.Title = Title;
AlertDialog.Cancel = Cancel;
AlertDialog.Action = Action;
AlertDialog.Overlay = Overlay;
AlertDialog.Content = Content;
AlertDialog.Portal = Primitive.Portal;
AlertDialog.Description = Primitive.Description;

export type HeaderProps = React.PropsWithChildren;
function Header({ children }: HeaderProps) {
  return <div className="space-y-1.5">{children}</div>;
}

export type FooterProps = React.PropsWithChildren;
function Footer({ children }: FooterProps) {
  return <div className="flex justify-end space-x-2">{children}</div>;
}

export type TitleProps = Primitive.AlertDialogTitleProps;
function Title(props: TitleProps) {
  return (
    <Primitive.AlertDialogTitle
      className="text-xl font-semibold leading-none tracking-tight"
      {...props}
    />
  );
}

export type CancelProps = Primitive.AlertDialogCancelProps;
function Cancel({ children, ...rest }: CancelProps) {
  return (
    <Primitive.AlertDialogCancel asChild {...rest}>
      <Button variant="outlined">{children}</Button>
    </Primitive.AlertDialogCancel>
  );
}

export type ActionProps = Primitive.AlertDialogActionProps;
function Action({ children, ...rest }: ActionProps) {
  return (
    <Primitive.AlertDialogAction {...rest}>
      <Button>{children}</Button>
    </Primitive.AlertDialogAction>
  );
}

export type OverlayProps = Primitive.AlertDialogOverlayProps;
function Overlay(props: OverlayProps) {
  return (
    <Primitive.AlertDialogOverlay
      {...props}
      className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80"
    />
  );
}

export type ContentProps = Primitive.AlertDialogContentProps;
function Content(props: ContentProps) {
  return (
    <Primitive.AlertDialogContent
      className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md border border-border bg-background p-6 shadow-lg duration-200"
      {...props}
    />
  );
}
