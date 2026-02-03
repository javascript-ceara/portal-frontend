import { twMerge } from "tailwind-merge";
import {
  Controller as Ctrl,
  FieldPath,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues,
} from "react-hook-form";

export type ControllerProps<Values extends FieldValues> = {
  name: FieldPath<Values>;
  label?: string;
  disabled?: boolean;
  render: (props: {
    field: ControllerRenderProps<FieldValues, FieldPath<Values>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => React.ReactElement;
};

export function Controller<Values extends Record<string, any>>({
  name,
  label,
  disabled,
  render,
}: ControllerProps<Values>) {
  return (
    <Ctrl
      name={name}
      disabled={disabled}
      render={({ field, fieldState, formState }) => {
        return (
          <div className="flex flex-1 flex-col space-y-2">
            <div>
              {label && (
                <label
                  htmlFor={field.name}
                  className={twMerge(
                    "text-sm font-medium",
                    fieldState.error?.message &&
                      "text-red-500 dark:text-red-300",
                  )}
                >
                  {label}
                </label>
              )}
            </div>
            {render({ field, formState, fieldState })}
            <p className="text-sm text-red-500 dark:text-red-300">
              {fieldState.error?.message}
            </p>
          </div>
        );
      }}
    />
  );
}
