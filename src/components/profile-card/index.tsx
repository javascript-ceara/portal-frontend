"use client";

import { twMerge } from "tailwind-merge";
import { LinkedinIcon } from "lucide-react";
import { Card, CardProps } from "@/components/card";
import { TypographyH4, TypographySmall } from "@/components/typography";
import {
  Avatar as PrimitiveAvatar,
  AvatarImageProps,
} from "@/components/avatar";
import { GithubIcon } from "@/components/icons/github";

export type ProfileCardProps = CardProps;
export function ProfileCard({ children, className }: ProfileCardProps) {
  return (
    <Card
      className={twMerge(
        "flex flex-col items-center justify-between",
        className,
      )}
    >
      {children}
    </Card>
  );
}

ProfileCard.Avatar = Avatar;
ProfileCard.Name = TypographyH4;
ProfileCard.Bio = Bio;
ProfileCard.GithubLink = GithubLink;
ProfileCard.LinkedinLink = LinkedinLink;
ProfileCard.Header = Header;
ProfileCard.Footer = Footer;

export type ProfileCardAvatarProps = AvatarImageProps;
function Avatar({ className, src }: ProfileCardAvatarProps) {
  return (
    <PrimitiveAvatar className={twMerge("h-28 w-28", className)}>
      <PrimitiveAvatar.Fallback />
      <PrimitiveAvatar.Image src={src} />
    </PrimitiveAvatar>
  );
}

export type GithubLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function GithubLink(props: GithubLinkProps) {
  return (
    <a {...props} target="_blank">
      <GithubIcon className="h-6 w-6" />
    </a>
  );
}

export type LinkedinLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
function LinkedinLink(props: LinkedinLinkProps) {
  return (
    <a {...props} target="_blank">
      <LinkedinIcon className="h-6 w-6" />
    </a>
  );
}

export type HeaderProps = React.HTMLAttributes<HTMLAnchorElement>;
function Header({ children }: HeaderProps) {
  return <div className="flex justify-center gap-2">{children}</div>;
}

export type FooterProps = React.HTMLAttributes<HTMLAnchorElement>;
function Footer({ children }: FooterProps) {
  return <div className="mt-4 flex justify-center gap-2">{children}</div>;
}

export type BioProps = React.HTMLAttributes<HTMLParagraphElement>;
function Bio({ className, ...rest }: BioProps) {
  return <TypographySmall {...rest} className="text-center" />;
}
