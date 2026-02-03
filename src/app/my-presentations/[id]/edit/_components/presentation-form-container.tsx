"use client";

import { useEffect, useState } from "react";
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
  PresentationFormUnderRevisionAlert,
  PresentationFormAwaitingReviewAlert,
  PresentationFormAcceptedAlert,
  PresentationFormDeclinedAlert,
  PresentationFormValues,
  type PresentationFormEventProps,
} from "@/components/presentation-form";

import { updatePresentation } from "../_actions/update-presentation";

import { Database } from "@/types/supabase.database";

type PresentationFormContainerProps = {
  presentation: Database["public"]["Functions"]["get_presentations"]["Returns"][0];
};

export function PresentationFormContainer({
  presentation,
}: PresentationFormContainerProps) {
  const [disabled, setDisabled] = useState<boolean>(true);
  const form = usePresentationForm({ disabled });
  const [events, setEvents] = useState<PresentationFormEventProps["options"]>(
    [],
  );

  const onSubmit = async (values: PresentationFormValues) => {
    try {
      await updatePresentation(presentation.id, values);
      toast("Apresentação atualizada com sucesso!");
    } catch (err) {
      toast("Algo deu errado.", {
        description: "Tente novamente",
      });
    }
  };

  useEffect(() => {
    if (presentation) {
      setEvents([
        {
          value: String(presentation.event_id),
          label: presentation.event_title,
        },
      ]);

      form.reset({
        title: presentation.title,
        event: String(presentation.event_id),
        phone: presentation.profile_phone,
        email: presentation.profile_email,
        description: presentation.description,
      });
    }
  }, [presentation]);

  useEffect(() => {
    setDisabled(presentation.status !== "awaiting_review");
  }, [presentation]);

  return (
    <PresentationForm {...form} onSubmit={onSubmit}>
      {presentation.status === "awaiting_review" && (
        <PresentationFormAwaitingReviewAlert />
      )}
      {presentation.status === "under_review" && (
        <PresentationFormUnderRevisionAlert />
      )}
      {presentation.status === "accepted" && <PresentationFormAcceptedAlert />}
      {presentation.status === "declined" && <PresentationFormDeclinedAlert />}
      <PresentationFormTitle />
      <PresentationFormEvent options={events} disabled={true} />
      <PresentationFormPhone />
      <PresentationFormEmail />
      <PresentationFormDescription />
      <PresentationFormSubmit />
    </PresentationForm>
  );
}
