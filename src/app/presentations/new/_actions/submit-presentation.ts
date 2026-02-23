"use server";

import { createClient } from "@/services/supabase/server";
import { type PresentationFormValues } from "@/components/presentation-form";

export async function submitPresentation(values: PresentationFormValues) {
  const client = await createClient();
  const { data: user } = await client.auth.getUser();

  const { error } = await client
    .schema("public")
    .from("presentations")
    .insert({
      title: values.title,
      description: values.description,
      profile_id: user.user?.id || "",
      event_id: Number(values.event),
    });

  if (error) {
    throw error;
  }
}
