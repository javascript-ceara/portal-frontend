import {
  FormProvider,
  useForm,
  UseFormReturn,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { Loader } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/button";
import { Controller, Input } from "@/components/form";

const FormSchema = z.object({
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
});

export type FormValues = z.infer<typeof FormSchema>;

type OtpFormRootProps = UseFormReturn<FormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<FormValues>;
  className?: string;
};

export function Root({
  children,
  handleSubmit,
  onSubmit,
  className,
  ...rest
}: OtpFormRootProps) {
  return (
    <FormProvider {...rest} handleSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={twMerge("space-y-4", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export function Email() {
  return (
    <Controller
      name="email"
      label="Receber código de autenticação por email"
      render={({ field }) => {
        return (
          <Input
            {...field}
            placeholder="Insira o email associado à sua conta"
          />
        );
      }}
    />
  );
}

export function Submit() {
  const formState = useFormState();
  return (
    <Button asChild>
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting && (
          <Loader className="ml-2 h-5 w-5 animate-spin" />
        )}
        <span>Enviar código</span>
      </button>
    </Button>
  );
}

export function useOtpForm() {
  return useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });
}
