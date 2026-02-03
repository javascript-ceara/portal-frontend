"use server";

import { createClient } from "@/services/supabase/server";
import { SignUpFormValues } from "@/components/signup-form";

async function verifyOtp(values: SignUpFormValues, token: string) {
  const client = await createClient();

  const { error } = await client.auth.verifyOtp({
    email: values.email,
    token,
    type: "email",
  });

  if (error) {
    throw error;
  }

  return true;
}

export { verifyOtp };
