"use client";

import { useState } from "react";

import {
  FormProvider,
  UseFormReturn,
  useFormContext,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { Loader } from "lucide-react";
import { useIMask } from "react-imask";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { Input, InputPassword, Controller } from "@/components/form";
import { Button } from "@/components/button";

const SignUpFormSchema = z.object({
  name: z.string().min(3, "Campo deve conter ao menos 3 letras"),
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
  phone: z.string().optional(),
  password: z
    .string()
    .regex(
      /^(?!.*([a-zA-Z0-9])\1{1})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Deve conter ao menos 8 caracteres alternando entre números e letras maiúsculas e minúsculas",
    ),
});

type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

type SignUpFormProps = UseFormReturn<SignUpFormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<SignUpFormValues>;
};

function SignUpForm({
  handleSubmit,
  onSubmit,
  children,
  ...rest
}: SignUpFormProps) {
  return (
    <FormProvider {...rest} handleSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 space-y-10"
      >
        {children}
      </form>
    </FormProvider>
  );
}

function SignUpFormName() {
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

function SignUpFormEmail() {
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

function SignUpFormPhone() {
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
            disabled={field.disabled}
            value={field.value}
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

function SignUpFormPassword() {
  const [show, setShow] = useState(false);
  return (
    <Controller
      name="password"
      label="Senha"
      render={({ field }) => {
        return (
          <InputPassword
            show={show}
            {...field}
            onToggle={() => setShow((prev) => !prev)}
          />
        );
      }}
    />
  );
}

function SignUpFormSubmit() {
  const formState = useFormState();
  return (
    <Button asChild>
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting && (
          <Loader className="mr-2 h-5 w-5 animate-spin" />
        )}
        <span>Entrar</span>
      </button>
    </Button>
  );
}

function useSignUpForm() {
  return useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}

export {
  SignUpForm,
  SignUpFormName,
  SignUpFormEmail,
  SignUpFormPhone,
  SignUpFormPassword,
  SignUpFormSubmit,
  useSignUpForm,
  type SignUpFormValues,
  type SignUpFormProps,
};
