import { LegacyRef, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

export type InputPasswordProps = {
  show: boolean;
  onToggle: () => void;
};

export const InputPassword = forwardRef(
  (
    { show, onToggle, ...rest }: InputPasswordProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    return (
      <div className="relative h-14 w-full rounded-md border border-border">
        <input
          {...rest}
          ref={ref}
          className="h-full w-full rounded-md bg-transparent px-4 pr-12"
          type={(show && "text") || "password"}
        />
        <div className="absolute right-0 top-0 flex h-full w-12 items-center justify-center">
          <button type="button" onClick={onToggle}>
            {(show && <Eye className="h-5 w-5" />) || (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    );
  },
);

InputPassword.displayName = "InputPassword";
