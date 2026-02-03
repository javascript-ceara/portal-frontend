"use server";

import { SignUpFormValues } from "@/components/signup-form";
import { createClient } from "@/services/supabase/server";

async function signup(values: SignUpFormValues) {
  const client = await createClient();
  const { error } = await client.auth.signUp({
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

  if (error) {
    throw error;
  }
}

export { signup };
