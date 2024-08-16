"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import * as Dialog from "@/components/otp-dialog";
import * as Form from "@/components/signup-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignUpWithPassword() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [validatingOtp, startValidatingOtp] = useTransition();
  const { toast } = useToast();
  const router = useRouter();
  const form = Form.useSignUpForm();

  const onCHangeOtp = (value: string) => {
    setOtpCode(value);
  };

  const onOpenChange = () => {
    setDialogOpen(false);
    setOtpCode("");
  };

  const onSubmit = async (values: Form.FormValues) => {
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
      <Form.Root {...form} onSubmit={onSubmit}>
        <Form.Name />
        <Form.Email />
        <Form.Phone />
        <Form.Password />
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
