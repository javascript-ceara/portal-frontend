import {
    TypographyH4,
    TypographyP,
} from "@/components/typography";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { GithubIcon } from "../icons/github";

export type OrganizerCardProps = React.PropsWithChildren<{ className?: string }>;

export function OrganizerCard ({className, children}: OrganizerCardProps)  {
    return (
        <li className={twMerge('flex items-center space-x-2 rounded-2xl border border-border p-4 sm:flex-col sm:space-x-0 sm:space-y-2', className)}>{children}</li>
    )
}

OrganizerCard.Avatar = OrganizerAvatar
OrganizerCard.Name = TypographyH4
OrganizerCard.Description = TypographyP
OrganizerCard.GitHub = OrganizerGithub

export function OrganizerAvatar ({className, children}: OrganizerCardProps)  {
    return (
        <div className={twMerge('relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24', className)} >{children}</div>
    )
}

export type OrganizerGitHubProps = {github: string, githubName: string}

export function OrganizerGithub ({github, githubName}: OrganizerGitHubProps)  {
    return (
        <div className="flex gap-2 items-center group cursor-pointer">
            <figure className="w-6 h-6">
                <GithubIcon className="fill-background-lighter" />
            </figure>
            <Link className="text-sm text-foreground group-hover:underline" href={github}>{githubName}</Link>
        </div>
    )
}

