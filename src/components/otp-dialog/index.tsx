import { Loader } from "lucide-react";
import { Dialog, DialogProps } from "@/components/dialog";
import { OtpInput, OtpInputProps } from "@/components/otp-input";

export const OTP_INPUT_MAX_LENGTH = 6;
export function OtpDialog({ children, ...rest }: DialogProps) {
  return (
    <Dialog {...rest}>
      <Dialog.Portal>
        <Dialog.Content onPointerDownOutside={(e) => e.preventDefault()}>
          <Dialog.Close />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

OtpDialog.Header = Dialog.Header;
OtpDialog.Input = Input;
OtpDialog.Title = Title;
OtpDialog.Validate = Validate;
OtpDialog.Footer = Footer;
OtpDialog.Description = Description;
OtpDialog.Body = Dialog.Body;

type OtpDialogFooterProps = React.PropsWithChildren;
function Footer(props: OtpDialogFooterProps) {
  return <Dialog.Footer className="mx-auto" {...props} />;
}

function Title() {
  return <Dialog.Title className="text-center">Validar código</Dialog.Title>;
}

function Description() {
  return (
    <Dialog.Description className="text-center">
      Enviamos um código para o e-mail e/ou telefone cadastrados na sua conta
    </Dialog.Description>
  );
}

type OtpDialogValidateProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
function Validate({ loading, ...rest }: OtpDialogValidateProps) {
  return (
    <button
      className="flex items-center rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
      {...rest}
    >
      <span>Validar</span>
      {loading && <Loader className="ml-2 h-5 w-5 animate-spin" />}
    </button>
  );
}

type OtpDialogProps = Omit<OtpInputProps, "maxLength">;

function Input({ onComplete, onChange, value }: OtpDialogProps) {
  return (
    <OtpInput
      value={value}
      onComplete={onComplete}
      onChange={onChange}
      maxLength={OTP_INPUT_MAX_LENGTH}
    >
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
      </OtpInput.Group>
      <OtpInput.Separator />
      <OtpInput.Group>
        <OtpInput.Slot index={3} />
        <OtpInput.Slot index={4} />
        <OtpInput.Slot index={5} />
      </OtpInput.Group>
    </OtpInput>
  );
}
