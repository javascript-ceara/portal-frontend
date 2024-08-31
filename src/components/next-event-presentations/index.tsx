import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/typography";
import { User2Icon } from "lucide-react";
import * as Popover from "@/components/popover";
import * as Avatar from "@/components/avatar";

export function Root({ children }: React.PropsWithChildren) {
  return <ul className="divide-y divide-border">{children}</ul>;
}

export function Presentation({ children }: React.PropsWithChildren) {
  return (
    <li className="space-y-3 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4">
      <div>{children}</div>
    </li>
  );
}

export const PresentationTitle = TypographyH3;

export function PresentationAuthor({
  avatarUrl,
  fullName,
}: {
  avatarUrl: string;
  fullName: string;
}) {
  return (
    <Popover.Root>
      <div>
        <p className="flex items-center space-x-2 font-medium">
          <Popover.Trigger>
            <Avatar.Root className="flex h-8 w-8">
              <Avatar.Image
                src={
                  avatarUrl ||
                  "https://avatars.githubusercontent.com/u/124599?v=4"
                }
              />
              <Avatar.Fallback>
                <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
              </Avatar.Fallback>
            </Avatar.Root>
          </Popover.Trigger>
          <span>{fullName}</span>
        </p>
        <Popover.Content className="flex flex-col items-center">
          <Avatar.Root className="mb-4 flex h-24 w-24">
            <Avatar.Image src={avatarUrl || "default-avatar-url"} />
            <Avatar.Fallback>
              <User2Icon className="h-8 w-8 rounded-full p-1 dark:text-foreground" />
            </Avatar.Fallback>
          </Avatar.Root>
          <TypographyH4>{fullName}</TypographyH4>
        </Popover.Content>
      </div>
    </Popover.Root>
  );
}

export function PresentationDescription({ children }: React.PropsWithChildren) {
  return <TypographyP className="max-w-3xl">{children}</TypographyP>;
}
