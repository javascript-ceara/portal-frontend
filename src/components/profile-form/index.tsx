"use client";

import { Button } from "@/components/button";
import { Controller, Input } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
  useFormState,
} from "react-hook-form";
import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const FormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  email: z.string().email().optional(),
  phone: z.string().regex(phoneRegex).optional(),
  bio: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  social_links: z.object({
    github_url: z.string().url().optional(),
    site_url: z.string().url().optional(),
    linkedin_url: z.string().url().optional(),
  }),
});

export type FormValues = z.infer<typeof FormSchema>;

export function Root({
  children,
  handleSubmit,
  onSubmit,
  ...rest
}: UseFormReturn<FormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<FormValues>;
}) {
  return (
    <FormProvider {...rest} handleSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 space-y-4"
      >
        {children}
      </form>
    </FormProvider>
  );
}

export function Name() {
  return (
    <Controller
      name="name"
      label="Nome"
      render={({ field }) => {
        return <Input {...field} />;
      }}
    />
  );
}

export function Email() {
  return (
    <Controller
      name="email"
      label="Email"
      render={({ field }) => {
        return <Input disabled {...field} />;
      }}
    />
  );
}

export function Phone() {
  return (
    <Controller
      name="phone"
      label="Telefone"
      render={({ field }) => {
        return <Input disabled {...field} />;
      }}
    />
  );
}

export function Bio() {
  return (
    <Controller
      name="bio"
      label="Bio"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

export function Company() {
  return (
    <Controller
      name="company"
      label="Empresa"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

export function Location() {
  return (
    <Controller
      name="location"
      label="Localização"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

export function SocialLinkSite() {
  return (
    <Controller
      name="social_link.site_url"
      label="Site"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );

}
export function SocialLinkGithub() {
  return (
    <Controller
      name="social_link.github_url"
      label="Github"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

export function SocialLinkLinkedin() {
  return (
    <Controller
      name="social_link.linkedin_url"
      label="Linkedin"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

export function Submit() {
  const formState = useFormState();
  return (
    <Button asChild>
      <button
        type="submit"
        disabled={formState.isSubmitting || !formState.isValid}
      >
        {formState.isSubmitting && (
          <Loader className="ml-2 h-5 w-5 animate-spin" />
        )}
        <span>Salvar</span>
      </button>
    </Button>
  );
}

export function useProfileForm() {
  return useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      bio: "",
      company: "",
      location: "",
      social_links: {
        github_url: "",
        linkedin_url: "",
        site_url: "",
      },
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}
