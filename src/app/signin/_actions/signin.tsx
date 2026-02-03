"use server";

import { createClient } from "@/services/supabase/server";

import { SignInFormValues } from "@/components/signin-form";

async function signIn(values: SignInFormValues) {
  const client = await createClient();

  const { error } = await client.auth.signInWithOtp({
    email: values.email,
    options: {
      data: {
        name: values.email,
      },
    },
  });

  if (error) {
    throw error;
  }

  return true;
}

export { signIn };
