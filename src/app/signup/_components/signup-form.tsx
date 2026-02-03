"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  OtpDialog,
  OtpDialogBody,
  OtpDialogFooter,
  OtpDialogHeader,
  OtpDialogInput,
  OtpDialogDescription,
  OtpDialogTitle,
  OtpDialogValidate,
  OTP_INPUT_MAX_LENGTH,
} from "@/components/otp-dialog";
import {
  SignUpForm,
  SignUpFormName,
  SignUpFormEmail,
  SignUpFormPhone,
  SignUpFormPassword,
  SignUpFormSubmit,
  useSignUpForm,
  SignUpFormValues,
} from "@/components/signup-form";
import { useToast } from "@/components/toaster/use-toast";

import { signup } from "../_actions/signup";
import { verifyOtp } from "../_actions/verify-otp";

export function SignUpFormContainer() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [validatingOtp, startValidatingOtp] = useTransition();
  const { toast } = useToast();
  const router = useRouter();
  const form = useSignUpForm();

  const onCHangeOtp = (value: string) => {
    setOtpCode(value);
  };

  const onOpenChange = () => {
    setDialogOpen(false);
    setOtpCode("");
  };

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await signup(values);
      setDialogOpen(true);
    } catch (error: any) {
      if (error?.code === "weak_password") {
        toast({
          title: "Senha fraca",
          description:
            "Tente alternar entre números e letras maiúsculas e minúsculas",
          variant: "destructive",
        });
        return;
      }

      if (error) {
        toast({
          title: "Erro ao criar conta",
          description: "Revise seus dados e tente novamente",
          variant: "destructive",
        });
      }
    }
  };

  const onValidateOtp = async () => {
    startValidatingOtp(async () => {
      try {
        await verifyOtp(form.getValues(), otpCode);
        toast({
          title: "Login efetuado com sucesso",
        });

        form.reset();
        router.push("/profile");
        router.refresh();
      } catch {
        toast({
          variant: "destructive",
          title: "Erro ao validar código",
        });
      }
    });
  };

  return (
    <>
      <SignUpForm {...form} onSubmit={onSubmit}>
        <SignUpFormName />
        <SignUpFormEmail />
        <SignUpFormPhone />
        <SignUpFormPassword />
        <SignUpFormSubmit />
      </SignUpForm>
      <OtpDialog open={dialogOpen} onOpenChange={onOpenChange}>
        <OtpDialogHeader>
          <OtpDialogTitle />
          <OtpDialogDescription />
        </OtpDialogHeader>
        <OtpDialogBody>
          <OtpDialogInput value={otpCode} onChange={onCHangeOtp} />
        </OtpDialogBody>
        <OtpDialogFooter>
          <OtpDialogValidate
            onClick={onValidateOtp}
            loading={validatingOtp}
            disabled={validatingOtp || otpCode.length < OTP_INPUT_MAX_LENGTH}
          />
        </OtpDialogFooter>
      </OtpDialog>
    </>
  );
}
