"use client";

import { useEffect } from "react";
import * as Form from "@/components/profile-form";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";
import { useRouter } from "next/navigation";
import { useProfile } from "@/contexts/profile";

export function ProfileForm() {
  const { toast } = useToast();
  const { profile } = useProfile();
  const router = useRouter();
  const form = Form.useProfileForm();

  const onSubmit = async (values: Form.FormValues) => {
    const client = createClient({});
    const { data } = await client.auth.getUser();

    if (!data.user?.id) {
      return;
    }

    const { error } = await client
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
      .eq("id", data.user.id);

    if (error) {
      toast({
        title: "Erro efetuar login",
        description: "Revise seus dados e tente novamente",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Dados atualizados.",
    });

    router.refresh();
  };

  useEffect(() => {
    form.reset({
      name: profile?.full_name || "",
      email: profile?.email || "",
      bio: profile?.bio || "",
      company: profile?.company || "",
      location: profile?.location || "",
      github_url: profile?.github_url || "",
      site_url: profile?.site_url || "",
      linkedin_url: profile?.linkedin_url || "",
    });
  }, [profile, form]);

  return (
    <Form.Root {...form} onSubmit={onSubmit}>
      <Form.Section title="Dados pessoais">
        <Form.Name />
        <Form.Email />
        <Form.Bio />
        <Form.Company />
        <Form.Location />
        <Form.Phone />
      </Form.Section>
      <Form.Section title="Redes sociais">
        <Form.Site />
        <Form.Github />
        <Form.Linkedin />
      </Form.Section>
      <Form.Submit />
    </Form.Root>
  );
}
