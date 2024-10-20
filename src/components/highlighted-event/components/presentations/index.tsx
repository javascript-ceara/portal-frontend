import Link from "next/link";
import { TypographyH3 } from "@/components/typography";
import { User2Icon } from "lucide-react";
import { Popover } from "@/components/popover";
import { ProfileCard } from "@/components/profile-card";
import { Avatar } from "@/components/avatar";

type PresentationsProps = React.PropsWithChildren;

export function Presentations({ children }: PresentationsProps) {
  return <ul className="divide-y divide-border">{children}</ul>;
}

type PresentationProps = React.PropsWithChildren;

export function Presentation({ children }: PresentationProps) {
  return (
    <li className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4">
      <div>{children}</div>
    </li>
  );
}

Presentation.Title = TypographyH3;
Presentation.Description = Description;
Presentation.Author = Author;

type PresentationAuthorProps = {
  avatarUrl: string;
  fullName: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
};
function Author({
  avatarUrl,
  fullName,
  githubUrl,
  linkedinUrl,
  bio,
}: PresentationAuthorProps) {
  return (
    <Popover>
      <p className="mb-2 flex items-center font-medium">
        <Popover.Trigger>
          <Avatar className="mr-1 flex h-8 w-8">
            <Avatar.Image src={avatarUrl} />
            <Avatar.Fallback className="h-8 w-8 rounded-full border border-border">
              <User2Icon className="h-4 w-4 dark:text-foreground" />
            </Avatar.Fallback>
          </Avatar>
        </Popover.Trigger>
        {fullName}
      </p>
      <Popover.Content align="start" className="mt-1 border-0 p-0 shadow-none">
        <ProfileCard>
          <ProfileCard.Header>
            <ProfileCard.Avatar src={avatarUrl} />
          </ProfileCard.Header>
          <ProfileCard.Name>{fullName}</ProfileCard.Name>
          <ProfileCard.Bio>{bio}</ProfileCard.Bio>
          <ProfileCard.Footer>
            <ProfileCard.GithubLink
              href={githubUrl}
              title={`Perfil do Github de ${fullName}`}
            />
            <ProfileCard.LinkedinLink
              href={linkedinUrl}
              title={`Perfil do Linkedin de ${fullName}`}
            />
          </ProfileCard.Footer>
        </ProfileCard>
      </Popover.Content>
    </Popover>
  );
}

type PresentationDescriptionProps = React.PropsWithChildren;
function Description({ children }: PresentationDescriptionProps) {
  return <p className="max-w-5xl leading-7">{children}</p>;
}
