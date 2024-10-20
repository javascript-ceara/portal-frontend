"use client";

import { twMerge } from "tailwind-merge";

export type CardProps = React.HtmlHTMLAttributes<HTMLElement>;
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={twMerge(
        "rounded-3xl border  border-border bg-background p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Footer = Footer;

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export function Header({ className, children }: CardHeaderProps) {
  return <div className={twMerge("mb-4", className)}>{children}</div>;
}

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export function Footer({ className, children }: CardFooterProps) {
  return <div className={twMerge("mt-4", className)}>{children}</div>;
}
