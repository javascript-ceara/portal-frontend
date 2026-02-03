"use client";

import { twMerge } from "tailwind-merge";
import { TypographyH3 } from "@/components/typography";

type CardProps = React.HtmlHTMLAttributes<HTMLElement>;
function Card({ className, children }: CardProps) {
  return (
    <div
      className={twMerge(
        "border-border flex flex-col  rounded-3xl border p-8 text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={twMerge("mb-4 grid gap-2", className)}>{children}</div>
  );
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
function CardContent({ className, children }: CardContentProps) {
  return <div className={twMerge("flex-1", className)}>{children}</div>;
}

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
function CardFooter({ className, children }: CardFooterProps) {
  return <div className={twMerge("mt-4", className)}>{children}</div>;
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadElement>;
function CardTitle({ children }: CardTitleProps) {
  return (
    <TypographyH3 className="[&_a]:hover:text-primary">{children}</TypographyH3>
  );
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-base">{children}</p>;
}

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  type CardProps,
  type CardHeaderProps,
  type CardFooterProps,
  type CardTitleProps,
  type CardDescriptionProps,
};
