"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { OtpDialog, OTP_INPUT_MAX_LENGTH } from "@/components/otp-dialog";
import {
  SignUpForm,
  useSignUpForm,
  SignUpFormValues,
} from "@/components/signup-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignUpWithPassword() {
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
    const sbClient = createClient({});
    const { error } = await sbClient.auth.signUp({
      email: values.email,
      password: values.password,
      phone: values.phone,
      options: {
        data: {
          full_name: values.name,
          phone: values.phone,
        },
      },
    });

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
      return;
    }

    setDialogOpen(true);
  };

  const onValidateOtp = async () => {
    startValidatingOtp(async () => {
      const client = createClient({});
      const { error } = await client.auth.verifyOtp({
        email: form.getValues("email"),
        token: otpCode,
        type: "email",
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro ao validar código",
        });
        return;
      }

      toast({
        title: "Login efetuado com sucesso",
      });

      form.reset();
      router.push("/profile");
      router.refresh();
    });
  };

  return (
    <>
      <SignUpForm {...form} onSubmit={onSubmit}>
        <SignUpForm.Name />
        <SignUpForm.Email />
        <SignUpForm.Phone />
        <SignUpForm.Password />
        <SignUpForm.Submit />
      </SignUpForm>
      <OtpDialog open={dialogOpen} onOpenChange={onOpenChange}>
        <OtpDialog.Header>
          <OtpDialog.Title />
          <OtpDialog.Description />
        </OtpDialog.Header>
        <OtpDialog.Body>
          <OtpDialog.Input value={otpCode} onChange={onCHangeOtp} />
        </OtpDialog.Body>
        <OtpDialog.Footer>
          <OtpDialog.Validate
            onClick={onValidateOtp}
            loading={validatingOtp}
            disabled={validatingOtp || otpCode.length < OTP_INPUT_MAX_LENGTH}
          />
        </OtpDialog.Footer>
      </OtpDialog>
    </>
  );
}
