"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import * as Form from "@/components/otp-form";
import * as Dialog from "@/components/otp-dialog";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignInWithOtp() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [validatingOtp, startValidatingOtp] = useTransition();
  const { toast } = useToast();
  const form = Form.useOtpForm();
  const router = useRouter();

  const onSubmit = async (values: Form.FormValues) => {
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
      <Form.Root {...form} onSubmit={onSubmit} className="grid">
        <Form.Email />
        <Form.Submit />
      </Form.Root>

      <Dialog.Root open={dialogOpen} onOpenChange={onOpenChange}>
        <Dialog.Header>
          <Dialog.Title />
          <Dialog.Description />
        </Dialog.Header>
        <Dialog.Body>
          <Dialog.Input value={otpCode} onChange={onCHangeOtp} />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.ValidateBtn
            onClick={onValidateOtp}
            loading={validatingOtp}
            disabled={
              validatingOtp || otpCode.length < Dialog.OTP_INPUT_MAX_LENGTH
            }
          />
        </Dialog.Footer>
      </Dialog.Root>
    </>
  );
}
