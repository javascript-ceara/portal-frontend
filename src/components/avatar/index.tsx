"use client";

import { twMerge } from "tailwind-merge";
import * as Primitive from "@radix-ui/react-avatar";

type AvatarProps = Primitive.AvatarProps;
function Avatar({ className, ...rest }: AvatarProps) {
  return (
    <Primitive.Avatar
      {...rest}
      className={twMerge("inline-flex rounded-full", className)}
    />
  );
}

type AvatarFallbackProps = Primitive.AvatarFallbackProps;
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

type AvatarImageProps = Primitive.AvatarImageProps;
function AvatarImage({ className, ...rest }: AvatarImageProps) {
  return (
    <Primitive.AvatarImage
      {...rest}
      className={twMerge("h-full w-full rounded-full object-cover", className)}
    />
  );
}

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  type AvatarProps,
  type AvatarFallbackProps,
  type AvatarImageProps,
};
