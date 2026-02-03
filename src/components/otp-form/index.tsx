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

const OtpFormSchema = z.object({
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
});

type OtpFormValues = z.infer<typeof OtpFormSchema>;

type OtpFormProps = UseFormReturn<OtpFormValues> & {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<OtpFormValues>;
  className?: string;
};
function OtpForm({
  children,
  handleSubmit,
  onSubmit,
  className,
  ...rest
}: OtpFormProps) {
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

OtpForm.Email = OtpFormEmail;
OtpForm.Submit = OtpFormSubmit;

function OtpFormEmail() {
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

function OtpFormSubmit() {
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

function useOtpForm() {
  return useForm<OtpFormValues>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });
}

export {
  OtpForm,
  OtpFormEmail,
  OtpFormSubmit,
  useOtpForm,
  type OtpFormValues,
  type OtpFormProps,
};
