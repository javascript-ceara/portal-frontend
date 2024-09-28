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

import { Button } from "@/components/button";
import { TypographyH4 } from "@/components/typography";

import * as z from "zod";

const ProfileFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  email: z.string().email().optional(),
  phone: z.string().nullable(),
  bio: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  github_url: z
    .string()
    .optional()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: "Insira um link válido",
    }),
  site_url: z
    .string()
    .optional()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: "Insira um link válido",
    }),
  linkedin_url: z
    .string()
    .optional()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: "Insira um link válido",
    }),
});

export type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

export type ProfileFomProps = UseFormReturn<ProfileFormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<ProfileFormValues>;
};

export function ProfileFom({
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

ProfileFom.Section = Section;
ProfileFom.Name = Name;
ProfileFom.Email = Email;
ProfileFom.Phone = Phone;
ProfileFom.Bio = Bio;
ProfileFom.Company = Company;
ProfileFom.Location = Location;
ProfileFom.Site = Site;
ProfileFom.Github = Github;
ProfileFom.Linkedin = Linkedin;
ProfileFom.Submit = Submit;

export type ProfileFormSectionProps = React.PropsWithChildren<{
  title: string;
}>;
function Section({ title, children }: ProfileFormSectionProps) {
  return (
    <div className="space-y-4">
      <TypographyH4>{title}</TypographyH4>
      {children}
    </div>
  );
}

function Name() {
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

function Email() {
  return (
    <Controller
      name="email"
      label="Email"
      render={({ field }) => {
        return (
          <Input
            className="disabled:bg-background-darker"
            disabled
            {...field}
          />
        );
      }}
    />
  );
}

function Phone() {
  return (
    <Controller
      name="phone"
      label="Telefone"
      render={({ field }) => {
        return <Input {...field} disabled />;
      }}
    />
  );
}

function Bio() {
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

function Company() {
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

function Location() {
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

function Site() {
  return (
    <Controller
      name="site_url"
      label="Site"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

function Github() {
  return (
    <Controller
      name="github_url"
      label="Github"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

function Linkedin() {
  return (
    <Controller
      name="linkedin_url"
      label="Linkedin"
      render={({ field }) => {
        return <Input type="text" {...field} />;
      }}
    />
  );
}

function Submit() {
  const formState = useFormState();
  return (
    <Button asChild>
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting && (
          <Loader className="mr-2 h-5 w-5 animate-spin" />
        )}
        <span>Salvar</span>
      </button>
    </Button>
  );
}

export function useProfileForm() {
  return useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      company: "",
      location: "",
      github_url: "",
      linkedin_url: "",
      site_url: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}
