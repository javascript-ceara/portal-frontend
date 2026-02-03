"use client";

import { twMerge } from "tailwind-merge";
import { LinkedinIcon, UserIcon } from "lucide-react";
import { Card, CardProps } from "@/components/card";
import { TypographyH4 } from "@/components/typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarImageProps,
} from "@/components/avatar";
import { GithubIcon } from "@/components/icons/github";

type ProfileCardProps = CardProps;
function ProfileCard({ children, className }: ProfileCardProps) {
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

const ProfileCardName = TypographyH4;

type ProfileCardAvatarProps = AvatarImageProps;
function ProfileCardAvatar({ className, src }: ProfileCardAvatarProps) {
  return (
    <Avatar className={twMerge("border-border h-28 w-28 border", className)}>
      <AvatarFallback>
        <UserIcon className="h-5 w-5" />
      </AvatarFallback>
      <AvatarImage src={src} />
    </Avatar>
  );
}

type ProfileCardGithubLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
function ProfileCardGithubLink(props: ProfileCardGithubLinkProps) {
  return (
    <a {...props} target="_blank">
      <GithubIcon className="h-6 w-6" />
    </a>
  );
}

type ProfileCardLinkedinLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
function ProfileCardLinkedinLink(props: ProfileCardLinkedinLinkProps) {
  return (
    <a {...props} target="_blank">
      <LinkedinIcon className="h-6 w-6" />
    </a>
  );
}

type ProfileCardHeaderProps = React.HTMLAttributes<HTMLAnchorElement>;
function ProfileCardHeader({ children }: ProfileCardHeaderProps) {
  return <div className="flex justify-center gap-2">{children}</div>;
}

type ProfileCardFooterProps = React.HTMLAttributes<HTMLAnchorElement>;
function ProfileCardFooter({ children }: ProfileCardFooterProps) {
  return <div className="mt-4 flex justify-center gap-2">{children}</div>;
}

type ProfileCardBioProps = React.HTMLAttributes<HTMLParagraphElement>;
function ProfileCardBio({ className, ...rest }: ProfileCardBioProps) {
  return <p {...rest} className="text-center text-sm leading-none" />;
}

export {
  ProfileCard,
  ProfileCardName,
  ProfileCardAvatar,
  ProfileCardGithubLink,
  ProfileCardLinkedinLink,
  ProfileCardHeader,
  ProfileCardFooter,
  ProfileCardBio,
  type ProfileCardProps,
  type ProfileCardAvatarProps,
  type ProfileCardGithubLinkProps,
  type ProfileCardLinkedinLinkProps,
  type ProfileCardHeaderProps,
  type ProfileCardFooterProps,
  type ProfileCardBioProps,
};
