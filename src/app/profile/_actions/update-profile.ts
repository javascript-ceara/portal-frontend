"use server";

import { createClient } from "@/services/supabase/client";
import { type ProfileFormValues } from "@/components/profile-form";

export async function updateProfile(values: ProfileFormValues) {
  const client = createClient({});
  const { data: user } = await client.auth.getUser();

  const { error } = await client
    .schema("public")
    .from("profiles")
    .update({
      full_name: values.name,
      bio: values.bio,
      company: values.company,
      location: values.location,
      github_url: values.github_url,
      site_url: values.site_url,
      linkedin_url: values.linkedin_url,
    })
    .eq("id", user.user?.id || "");

  if (error) {
    throw error;
  }
}
