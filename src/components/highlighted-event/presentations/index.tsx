import {
  TypographyH3,
  TypographyH4,
  TypographySmall,
} from "@/components/typography";
import { User2Icon, LinkedinIcon } from "lucide-react";
import { Popover } from "@/components/popover";
import { Avatar } from "@/components/avatar";
import { GithubIcon } from "@/components/icons/github";

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
      <Popover.Content
        align="start"
        className="mt-1 flex flex-col items-center"
      >
        <Avatar className="flex h-20 w-20">
          <Avatar.Image src={avatarUrl} />
          <Avatar.Fallback className="h-20 w-20 rounded-full border border-border">
            <User2Icon className="h-10 w-10 text-foreground dark:text-foreground" />
          </Avatar.Fallback>
        </Avatar>
        <TypographyH4>{fullName}</TypographyH4>
        <TypographySmall className="mb-4 text-center font-normal">
          {bio}
        </TypographySmall>

        <div className="flex items-center gap-2">
          <a href={githubUrl} title={`Perfil do GitHub de ${fullName}`}>
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={linkedinUrl} title={`Perfil do LinkedIn de ${fullName}`}>
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
      </Popover.Content>
    </Popover>
  );
}

type PresentationDescriptionProps = React.PropsWithChildren;
function Description({ children }: PresentationDescriptionProps) {
  return <p className="max-w-5xl leading-7">{children}</p>;
}
