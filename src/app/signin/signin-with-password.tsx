"use client";

import { useRouter } from "next/navigation";
import * as Form from "@/components/signin-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignInWithPassword() {
  const { toast } = useToast();
  const router = useRouter();
  const form = Form.useSignInForm();

  const onSubmit = async (values: Form.FormValues) => {
    const sbClient = createClient({});
    const { error } = await sbClient.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast({
        title: "Erro efetuar login",
        description: "Revise seus dados e tente novamente",
        variant: "destructive",
      });
      return;
    }

    form.reset();
    router.push("/");
    router.refresh();
  };

  return (
    <Form.Root {...form} onSubmit={onSubmit}>
      <Form.Email />
      <Form.Password />
      <Form.Submit />
    </Form.Root>
  );
}
