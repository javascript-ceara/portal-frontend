import { twMerge } from "tailwind-merge";
import {
  Controller as Ctrl,
  FieldPath,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues,
} from "react-hook-form";

type Props<Values extends FieldValues> = {
  name: FieldPath<Values>;
  label?: string;
  render: (props: {
    field: ControllerRenderProps<FieldValues, FieldPath<Values>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => React.ReactElement;
};

export function Controller<Values extends Record<string, any>>({
  name,
  label,
  render,
}: Props<Values>) {
  return (
    <Ctrl
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <div className="flex flex-1 flex-col space-y-2">
            <div>
              {label && (
                <label
                  htmlFor={field.name}
                  className={twMerge(
                    "text-sm font-medium",
                    fieldState.error?.message && "text-red-600",
                  )}
                >
                  {label}
                </label>
              )}
            </div>
            {render({ field, formState, fieldState })}
            <p className="text-sm text-red-500">{fieldState.error?.message}</p>
          </div>
        );
      }}
    />
  );
}
