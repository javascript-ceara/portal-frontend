"use client";

import * as Form from "@/components/profile-form";
import * as Section from "@/components/section";
import { useToast } from "@/components/toaster/use-toast";
import { createClient } from "@/services/supabase/client";
import { useRouter } from "next/navigation";

export async function Profile() {
  const { toast } = useToast();
  const router = useRouter();
  const form = Form.useProfileForm();
  const client = createClient({});
  const { data } = await client.auth.getUser();

  const onSubmit = async (values: Form.FormValues) => {
    const sbClient = createClient({});
    const { error } = await sbClient
      .from("profiles")
      .update({
        username: values.name,
        bio: values.bio,
        company: values.company,
        location: values.location,
        github_url: values.social_links.github_url,
        site_url: values.social_links.site_url,
        linkedin_url: values.social_links.linkedin_url,
      })
      .eq("id", 1);

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
    <Form.Root {...form} onSubmit={onSubmit}>
      <Form.Name />
      <Form.Email />
      <Form.Bio />
      <Form.Company />
      <Form.Location />
      <Form.Phone />
      <Section.Title>Redes sociais</Section.Title>
      <Form.SocialLinkGithub />
      <Form.SocialLinkLinkedin />
      <Form.SocialLinkSite />
      <div className="flex items-start w-full">
        <Form.Submit />
      </div>
    </Form.Root>
  );
}
