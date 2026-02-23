"use client";

import { useEffect } from "react";
import {
  ProfileForm,
  ProfileFormSection,
  ProfileFormName,
  ProfileFormEmail,
  ProfileFormBio,
  ProfileFormCompany,
  ProfileFormLocation,
  ProfileFormPhone,
  ProfileFormSite,
  ProfileFormGithub,
  ProfileFormLinkedin,
  ProfileFormSubmit,
  ProfileFormValues,
  useProfileForm,
} from "@/components/profile-form";
import { useToast } from "@/components/toaster/use-toast";
import { useRouter } from "next/navigation";
import { useProfile } from "@/contexts/profile";
import { updateProfile } from "../_actions/update-profile";

export function ProfileFormContainer() {
  const { toast } = useToast();
  const { profile } = useProfile();
  const router = useRouter();
  const form = useProfileForm();

  const onSubmit = async (values: ProfileFormValues) => {
    try {
      await updateProfile(values);
      toast({
        title: "Dados atualizados.",
      });

      router.refresh();
    } catch {
      toast({
        title: "Erro efetuar login",
        description: "Revise seus dados e tente novamente",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    form.reset({
      name: profile?.full_name || "",
      email: profile?.email || "",
      bio: profile?.bio || "",
      company: profile?.company || "",
      location: profile?.location || "",
      phone: profile?.phone || "",
      github_url: profile?.github_url || "",
      site_url: profile?.site_url || "",
      linkedin_url: profile?.linkedin_url || "",
    });
  }, [profile, form]);

  return (
    <ProfileForm {...form} onSubmit={onSubmit}>
      <ProfileFormSection title="Dados pessoais">
        <ProfileFormName />
        <ProfileFormEmail />
        <ProfileFormBio />
        <ProfileFormCompany />
        <ProfileFormLocation />
        <ProfileFormPhone />
      </ProfileFormSection>
      <ProfileFormSection title="Redes sociais">
        <ProfileFormSite />
        <ProfileFormGithub />
        <ProfileFormLinkedin />
      </ProfileFormSection>
      <ProfileFormSubmit />
    </ProfileForm>
  );
}
