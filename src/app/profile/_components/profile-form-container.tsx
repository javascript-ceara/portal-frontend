"use client";

import { useEffect } from "react";
import { toast } from "sonner";
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
import { useRouter } from "next/navigation";
import { useProfile } from "@/contexts/profile";
import { updateProfile } from "../_actions/update-profile";

export function ProfileFormContainer() {
  const { profile } = useProfile();
  const router = useRouter();
  const form = useProfileForm();

  const onSubmit = async (values: ProfileFormValues) => {
    try {
      await updateProfile(values);
      toast("Dados atualizados.");

      router.refresh();
    } catch {
      toast("Erro ao atualizar dados", {
        description: "Revise seus dados e tente novamente",
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
