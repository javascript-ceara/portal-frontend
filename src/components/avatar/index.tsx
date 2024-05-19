import { twMerge } from "tailwind-merge";
import {
  Root as AvatarRoot,
  AvatarProps,
  Fallback as AvatarFallback,
  AvatarFallbackProps,
  Image as AvataImage,
  AvatarImageProps,
} from "@radix-ui/react-avatar";

type AvatarRootProps = AvatarProps;

export function Root({ className, ...rest }: AvatarRootProps) {
  return (
    <AvatarRoot
      {...rest}
      className={twMerge("inline-flex rounded-full", className)}
    />
  );
}

export function Fallback({ className, ...rest }: AvatarFallbackProps) {
  return (
    <AvatarFallback
      {...rest}
      className={twMerge(
        "flex h-full w-full items-center justify-center text-sm font-medium",
        className,
      )}
    />
  );
}

export function Image({ className, ...rest }: AvatarImageProps) {
  return (
    <AvataImage
      {...rest}
      className={twMerge("h-full w-full rounded-full object-cover", className)}
    />
  );
}
