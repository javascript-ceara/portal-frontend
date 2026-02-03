"use server";
import { createClient } from "@/services/supabase/server";

async function signout() {
  const client = await createClient();
  const { error } = await client.auth.signOut();

  if (error) {
    throw error;
  }
}

export { signout };
