import { TypographyH3 } from "@/components/typography";
import { User2Icon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBio,
  ProfileCardFooter,
  ProfileCardGithubLink,
  ProfileCardName,
  ProfileCardHeader,
  ProfileCardLinkedinLink,
} from "@/components/profile-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

type HighlightedEventPresentationsProps =
  React.HTMLAttributes<HTMLUListElement>;

function HighlightedEventPresentations({
  children,
}: HighlightedEventPresentationsProps) {
  return <ul className="divide-border divide-y">{children}</ul>;
}

type HighlightedEventPresentationProps = React.PropsWithChildren &
  React.HTMLAttributes<HTMLLIElement>;

function HighlightedEventPresentation({
  children,
}: HighlightedEventPresentationProps) {
  return (
    <li className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4">
      <div>{children}</div>
    </li>
  );
}

const HighlightedEventPresentationTitle = TypographyH3;

type HighlightedEventPresentationDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

function HighlightedEventPresentationDescription({
  children,
}: HighlightedEventPresentationDescriptionProps) {
  return <p className="max-w-5xl leading-6">{children}</p>;
}

type HighlightedEventPresentationAuthorProps = {
  avatarUrl: string;
  fullName: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
};

function HighlightedEventPresentationAuthor({
  avatarUrl,
  fullName,
  githubUrl,
  linkedinUrl,
  bio,
}: HighlightedEventPresentationAuthorProps) {
  return (
    <Popover>
      <p className="mb-2 flex items-center font-medium">
        <PopoverTrigger className="cursor-pointer">
          <Avatar className="mr-1 flex h-8 w-8">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="border-border h-8 w-8 rounded-full border">
              <User2Icon className="dark:text-foreground h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        {fullName}
      </p>
      <PopoverContent align="start" className="mt-1 border-0 p-0 shadow-none">
        <ProfileCard>
          <ProfileCardHeader>
            <ProfileCardAvatar src={avatarUrl} />
          </ProfileCardHeader>
          <ProfileCardName>{fullName}</ProfileCardName>
          <ProfileCardBio>{bio}</ProfileCardBio>
          <ProfileCardFooter>
            <ProfileCardGithubLink
              href={githubUrl}
              title={`Perfil do Github de ${fullName}`}
            />
            <ProfileCardLinkedinLink
              href={linkedinUrl}
              title={`Perfil do Linkedin de ${fullName}`}
            />
          </ProfileCardFooter>
        </ProfileCard>
      </PopoverContent>
    </Popover>
  );
}

export {
  HighlightedEventPresentations,
  HighlightedEventPresentation,
  HighlightedEventPresentationTitle,
  HighlightedEventPresentationDescription,
  HighlightedEventPresentationAuthor,
  type HighlightedEventPresentationsProps,
  type HighlightedEventPresentationProps,
  type HighlightedEventPresentationDescriptionProps,
};
