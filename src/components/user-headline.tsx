import { twMerge } from "tailwind-merge";
import { UserAvatar } from "@/components/user-avatar";
import { useProfile } from "@/contexts/profile";

type UserHeadlineProps = {
  className?: string;
};

function UserHeadline({ className }: UserHeadlineProps) {
  const { profile } = useProfile();
  return (
    <div
      className={twMerge("flex items-center space-x-2 px-4 py-3", className)}
    >
      <UserAvatar />
      <div>
        <p className="font-medium">{profile?.full_name}</p>
        <p className="text-sm">{profile?.email}</p>
      </div>
    </div>
  );
}

export { UserHeadline };
