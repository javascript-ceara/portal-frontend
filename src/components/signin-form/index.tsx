"use client";

import { Loader } from "lucide-react";
import { useState } from "react";
import {
  FormProvider,
  useForm,
  UseFormReturn,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { Button } from "@/components/button";
import { InputPassword, Input, Controller } from "@/components/form";

const SignInFormSchema = z.object({
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
  password: z.string().min(1, "Campo precisa"),
});

type SignInFormValues = z.infer<typeof SignInFormSchema>;

type SignInFormProps = UseFormReturn<SignInFormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<SignInFormValues>;
};

function SignInForm({
  children,
  handleSubmit,
  onSubmit,
  ...rest
}: SignInFormProps) {
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

function SignInFormEmail() {
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

function SignInFormPassword() {
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

function SignInFormSubmit() {
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

function useSignInForm() {
  return useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}

export {
  SignInForm,
  SignInFormEmail,
  SignInFormPassword,
  SignInFormSubmit,
  useSignInForm,
  type SignInFormValues,
  type SignInFormProps,
};
