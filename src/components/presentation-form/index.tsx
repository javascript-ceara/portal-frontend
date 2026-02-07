"use client";
import { useIMask } from "react-imask";
import { Controller, Input } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  UseFormReturn,
  useFormState,
} from "react-hook-form";

import { Button } from "@/components/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { Textarea } from "@/components/textarea";
import { Combobox, ComboboxProps } from "@/components/combobox";

import * as z from "zod";
import React from "react";

const PresentationFormSchema = z.object({
  title: z.string().min(1, "Campo obrigatório"),
  event: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(1, "Campo obrigatório"),
  email: z.string().email("Email inválido."),
  description: z
    .string()
    .min(400, "Descrição deve conter ao menos 400 caracteres")
    .max(600, "Descrição deve conter no máximo 800 caracteres"),
});

type PresentationFormValues = z.infer<typeof PresentationFormSchema>;

type ProfileFomProps = UseFormReturn<PresentationFormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<PresentationFormValues>;
};

function PresentationForm({
  children,
  handleSubmit,
  onSubmit,
  ...rest
}: ProfileFomProps) {
  return (
    <FormProvider {...rest} handleSubmit={handleSubmit}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
}

function PresentationFormTitle({}) {
  return (
    <Controller
      name="title"
      label="Título"
      render={({ field }) => {
        return <Input {...field} />;
      }}
    />
  );
}

type PresentationFormEventProps = Omit<ComboboxProps, "onSelect" | "value">;

function PresentationFormEvent({
  options,
  disabled,
}: PresentationFormEventProps) {
  const { setValue } = useFormContext();

  const onSelect = (value: string) => {
    setValue("event", value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  return (
    <Controller
      name="event"
      label="Evento"
      render={({ field }) => {
        return (
          <Combobox
            options={options}
            disabled={field.disabled || disabled}
            value={field.value}
            onSelect={onSelect}
          />
        );
      }}
    />
  );
}

function PresentationFormDescription({}) {
  return (
    <Controller
      name="description"
      label="Descrição"
      render={({ field }) => {
        return (
          <Textarea
            {...field}
            className="min-h-52"
            placeholder="Dedscreva sua palestra aqui."
          />
        );
      }}
    />
  );
}
function PresentationFormPhone() {
  const { setValue } = useFormContext();

  const { ref, maskRef } = useIMask(
    { mask: "(00) 00000-0000" },
    {
      onAccept: (value) => {
        setValue("phone", value, {
          shouldValidate: true,
          shouldDirty: true,
        });
      },
    },
  );
  return (
    <Controller
      name="phone"
      label="Telefone"
      render={({ field }) => {
        return (
          <Input
            ref={(el) => {
              ref.current = el;
              if (el && field.value && !el.value) {
                 el.value = field.value;
                 maskRef.current?.updateValue();
              }
            }}
            name={field.name}
            disabled={field.disabled}
            value={field.value}
            onChange={() => {}}
            onBlur={() => {
              if (
                 maskRef.current?.masked && 
                 !maskRef.current.masked.isComplete
              ) {
                setValue(field.name, "", {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }
            }}
            placeholder="(00) 00000-0000"
          />
        );
      }}
    />
  );
}
function PresentationFormEmail({}) {
  return (
    <Controller
      name="email"
      label="Email"
      render={({ field }) => {
        return <Input {...field} />;
      }}
    />
  );
}

function PresentationFormRevisionAlert() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Sua submissão será revisada</AlertTitle>
      <AlertDescription>
        O conteúdo da sua palestra será revisado antes da publicação.
      </AlertDescription>
    </Alert>
  );
}

function PresentationFormAwaitingReviewAlert() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Palestra aguardando revisão</AlertTitle>
      <AlertDescription>
        O conteúdo da sua palesta será revisado pela nossa equipe.
      </AlertDescription>
    </Alert>
  );
}

function PresentationFormUnderRevisionAlert() {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTitle>Palestra em revisão</AlertTitle>
      <AlertDescription>
        O conteúdo da sua palesta está em revisão e não pode ser editado neste
        momento.
      </AlertDescription>
    </Alert>
  );
}

function PresentationFormAcceptedAlert() {
  return (
    <Alert className="mb-4">
      <AlertTitle>Palestra confirmada</AlertTitle>
      <AlertDescription>
        Para editar o conteúdo da sua palestra entre em contato com nossa
        equipe.
      </AlertDescription>
    </Alert>
  );
}

function PresentationFormDeclinedAlert() {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTitle>Palestra não confirmada</AlertTitle>
      <AlertDescription>
        Não é possível editar o conteúdo da sua palestra.
      </AlertDescription>
    </Alert>
  );
}

function PresentationFormSubmit() {
  const formState = useFormState();
  return (
    <Button
      type="submit"
      disabled={formState.isSubmitting || formState.disabled}
      className="cursor-pointer"
    >
      {formState.isSubmitting && (
        <Loader className="mr-2 h-5 w-5 animate-spin" />
      )}
      <span>Salvar</span>
    </Button>
  );
}

type UsePresentationFormParams = {
  disabled?: boolean;
};
function usePresentationForm(params?: UsePresentationFormParams) {
  return useForm<PresentationFormValues>({
    resolver: zodResolver(PresentationFormSchema),
    defaultValues: {
      title: "",
      event: "",
      phone: "",
      email: "",
      description: "",
    },
    disabled: params?.disabled,
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}

export {
  PresentationForm,
  PresentationFormTitle,
  PresentationFormEvent,
  PresentationFormDescription,
  PresentationFormPhone,
  PresentationFormEmail,
  PresentationFormRevisionAlert,
  PresentationFormAwaitingReviewAlert,
  PresentationFormUnderRevisionAlert,
  PresentationFormAcceptedAlert,
  PresentationFormDeclinedAlert,
  PresentationFormSubmit,
  usePresentationForm,
  type PresentationFormValues,
  type ProfileFomProps,
  type PresentationFormEventProps,
};
