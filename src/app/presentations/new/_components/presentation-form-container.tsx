"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  PresentationForm,
  PresentationFormSubmit,
  PresentationFormTitle,
  PresentationFormEvent,
  PresentationFormDescription,
  usePresentationForm,
  PresentationFormPhone,
  PresentationFormEmail,
  PresentationFormRevisionAlert,
  PresentationFormValues,
  type PresentationFormEventProps,
} from "@/components/presentation-form";

import { useProfile } from "@/contexts/profile";
import { submitPresentation } from "../_actions/submit-presentation";
import { useEffect } from "react";

type PresentationFormContainerProps = {
  events: PresentationFormEventProps["options"];
};

export function PresentationFormContainer({
  events,
}: PresentationFormContainerProps) {
  const form = usePresentationForm();
  const router = useRouter();
  const { profile } = useProfile();

  const onSubmit = async (values: PresentationFormValues) => {
    try {
      await submitPresentation(values);
      toast("Apresentação eniada com sucesso!");
      form.reset();
      router.push("/my-presentations");
    } catch (err) {
      console.log(err);
      toast("Algo deu errado.", {
        description: "Tente novamente",
      });
    }
  };

  useEffect(() => {
    form.setValue("email", profile?.email || "");
    form.setValue("phone", profile?.phone || "");
  }, [profile]);

  return (
    <PresentationForm {...form} onSubmit={onSubmit}>
      <PresentationFormTitle />
      <PresentationFormEvent options={events} />
      <PresentationFormPhone />
      <PresentationFormEmail />
      <PresentationFormDescription />
      <PresentationFormSubmit />
      <PresentationFormRevisionAlert />
    </PresentationForm>
  );
}
