"use client";

import { useRouter } from "next/navigation";
import {
  SignInForm,
  useSignInForm,
  SignInFormValues,
} from "@/components/signin-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

export function SignInWithPassword() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useSignInForm();

  const onSubmit = async (values: SignInFormValues) => {
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
    <SignInForm {...form} onSubmit={onSubmit}>
      <SignInForm.Email />
      <SignInForm.Password />
      <SignInForm.Submit />
    </SignInForm>
  );
}
