import { Button } from "@/components/button";
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
import { useIMask } from "react-imask";
import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const FormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  email: z.string().email().optional(),
  phone: z.string().regex(phoneRegex, "Telefone inválido").nullable(),
  bio: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  social_links: z.object({
    github_url: z.string().url("Insira um link válido").optional(),
    site_url: z.string().url("Insira um link válido").optional(),
    linkedin_url: z.string().url("Insira um link válido").optional(),
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
        return (
          <Input className="disabled:text-opacity-55" disabled {...field} />
        );
      }}
    />
  );
}

export function Phone() {
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
            }}
            name={field.name}
            disabled
            className="disabled:text-opacity-45"
            defaultValue={field.value}
            onBlur={() => {
              if (!maskRef.current?.masked.isComplete) {
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
      name="social_links.site_url"
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
      name="social_links.github_url"
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
      name="social_links.linkedin_url"
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
      name: "Cícero Viana",
      email: "cicecoviana@example.com",
      phone: "",
      bio: "Front-end engineer and contributor on @reactjs-ceara",
      company: "@reactjs-ceara",
      location: "Fortaleza, CE, Brazil",
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
