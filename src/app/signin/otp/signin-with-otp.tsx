"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { OtpForm, OtpFormValues, useOtpForm } from "@/components/otp-form";
import { OtpDialog, OTP_INPUT_MAX_LENGTH } from "@/components/otp-dialog";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignInWithOtp() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [validatingOtp, startValidatingOtp] = useTransition();
  const { toast } = useToast();
  const form = useOtpForm();
  const router = useRouter();

  const onSubmit = async (values: OtpFormValues) => {
    const client = createClient({});
    const { error } = await client.auth.signInWithOtp({
      email: values.email,
      options: {
        shouldCreateUser: false,
      },
    });

    if (error) {
      toast({
        title: "Ocoreu um erro",
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

      router.push("/");
      router.refresh();
    });
  };

  const onCHangeOtp = (value: string) => {
    setOtpCode(value);
  };

  const onOpenChange = () => {
    setDialogOpen(false);
    setOtpCode("");
    form.reset();
  };
  return (
    <>
      <OtpForm {...form} onSubmit={onSubmit} className="grid">
        <OtpForm.Email />
        <OtpForm.Submit />
      </OtpForm>

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
