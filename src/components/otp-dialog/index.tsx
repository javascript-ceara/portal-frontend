"use client";

import { Loader } from "lucide-react";
import {
  Dialog,
  DialogPortal,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogBody,
  DialogProps,
} from "@/components/dialog";
import {
  OtpInput,
  OtpInputGroup,
  OtpInputProps,
  OtpInputSlot,
  OtpInputSeparator,
} from "@/components/otp-input";

const OTP_INPUT_MAX_LENGTH = 6;
function OtpDialog({ children, ...rest }: DialogProps) {
  return (
    <Dialog {...rest}>
      <DialogPortal>
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
          <DialogClose />
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

const OtpDialogHeader = DialogHeader;
const OtpDialogBody = DialogBody;

type OtpDialogFooterProps = React.PropsWithChildren;
function OtpDialogFooter(props: OtpDialogFooterProps) {
  return <DialogFooter className="mx-auto" {...props} />;
}

function OtpDialogTitle() {
  return <DialogTitle className="text-center">Validar código</DialogTitle>;
}

function OtpDialogDescription() {
  return (
    <DialogDescription className="text-center">
      Enviamos um código para o e-mail e/ou telefone cadastrados na sua conta
    </DialogDescription>
  );
}

type OtpDialogValidateProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
function OtpDialogValidate({ loading, ...rest }: OtpDialogValidateProps) {
  return (
    <button
      className="bg-primary flex items-center rounded-md px-4 py-2 text-white disabled:opacity-50"
      {...rest}
    >
      <span>Validar</span>
      {loading && <Loader className="ml-2 h-5 w-5 animate-spin" />}
    </button>
  );
}

type OtpDialogInputProps = Omit<OtpInputProps, "maxLength">;

function OtpDialogInput({ onComplete, onChange, value }: OtpDialogInputProps) {
  return (
    <OtpInput
      value={value}
      onComplete={onComplete}
      onChange={onChange}
      maxLength={OTP_INPUT_MAX_LENGTH}
    >
      <OtpInputGroup>
        <OtpInputSlot index={0} />
        <OtpInputSlot index={1} />
        <OtpInputSlot index={2} />
      </OtpInputGroup>
      <OtpInputSeparator />
      <OtpInputGroup>
        <OtpInputSlot index={3} />
        <OtpInputSlot index={4} />
        <OtpInputSlot index={5} />
      </OtpInputGroup>
    </OtpInput>
  );
}

export {
  OTP_INPUT_MAX_LENGTH,
  OtpDialog,
  OtpDialogHeader,
  OtpDialogBody,
  OtpDialogFooter,
  OtpDialogTitle,
  OtpDialogDescription,
  OtpDialogValidate,
  OtpDialogInput,
};
