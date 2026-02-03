"use client";

import { useRouter } from "next/navigation";
import {
  SignInForm,
  SignInFormEmail,
  SignInFormPassword,
  SignInFormSubmit,
  useSignInForm,
  SignInFormValues,
} from "@/components/signin-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";

function SignInFormContainer() {
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
      console.log(error);
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
      <SignInFormEmail />
      <SignInFormPassword />
      <SignInFormSubmit />
    </SignInForm>
  );
}

export { SignInFormContainer };
