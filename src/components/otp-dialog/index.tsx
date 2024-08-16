import { Loader } from "lucide-react";
import * as Dialog from "@/components/dialog";
import * as Otp from "@/components/otp-input";

export const Header = Dialog.Header;
export const Body = Dialog.Body;

export function Root({ children, ...rest }: Dialog.RootProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Content onPointerDownOutside={(e) => e.preventDefault()}>
          <Dialog.Close />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Footer(props: React.PropsWithChildren) {
  return <Dialog.Footer className="mx-auto" {...props} />;
}

export function Title() {
  return <Dialog.Title className="text-center">Validar código</Dialog.Title>;
}

export function Description() {
  return (
    <Dialog.Description className="text-center">
      Enviamos um código para o e-mail e/ou telefone cadastrados na sua conta
    </Dialog.Description>
  );
}

export function ValidateBtn({
  loading,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}) {
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

export const OTP_INPUT_MAX_LENGTH = 6;

export function Input({
  onComplete,
  onChange,
  value,
}: Omit<Otp.OTPInputRootProps, "maxLength">) {
  return (
    <Otp.Root
      value={value}
      onComplete={onComplete}
      onChange={onChange}
      maxLength={OTP_INPUT_MAX_LENGTH}
    >
      <Otp.Group>
        <Otp.Slot index={0} />
        <Otp.Slot index={1} />
        <Otp.Slot index={2} />
      </Otp.Group>
      <Otp.Separator />
      <Otp.Group>
        <Otp.Slot index={3} />
        <Otp.Slot index={4} />
        <Otp.Slot index={5} />
      </Otp.Group>
    </Otp.Root>
  );
}
