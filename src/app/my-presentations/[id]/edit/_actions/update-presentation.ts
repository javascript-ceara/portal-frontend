"use server";

import { createClient } from "@/services/supabase/server";
import { type PresentationFormValues } from "@/components/presentation-form";

export async function updatePresentation(
  id: number,
  values: PresentationFormValues,
) {
  const client = await createClient();
  const { data: user } = await client.auth.getUser();

  const { error, data } = await client
    .schema("public")
    .from("presentations")
    .update({
      title: values.title,
      description: values.description,
      profile_id: user.user?.id || "",
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }
}
