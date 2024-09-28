import { twMerge } from "tailwind-merge";
import * as Primitive from "@radix-ui/react-avatar";

export type AvatarProps = Primitive.AvatarProps;

export function Avatar({ className, ...rest }: AvatarProps) {
  return (
    <Primitive.Avatar
      {...rest}
      className={twMerge("inline-flex rounded-full", className)}
    />
  );
}

Avatar.Fallback = AvatarFallback;
Avatar.Image = AvatarImage;

export type AvatarFallbackProps = Primitive.AvatarFallbackProps;
function AvatarFallback({ className, ...rest }: AvatarFallbackProps) {
  return (
    <Primitive.AvatarFallback
      {...rest}
      className={twMerge(
        "flex h-full w-full items-center justify-center text-sm font-medium",
        className,
      )}
    />
  );
}

export type AvatarImageProps = Primitive.AvatarImageProps;
function AvatarImage({ className, ...rest }: AvatarImageProps) {
  return (
    <Primitive.AvatarImage
      {...rest}
      className={twMerge("h-full w-full rounded-full object-cover", className)}
    />
  );
}
