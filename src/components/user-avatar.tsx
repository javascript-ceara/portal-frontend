import { UserIcon } from "lucide-react";
import { Avatar } from "@/components/avatar";

export function UserAvatar() {
  return (
    <Avatar className="h-10 w-10 border border-border">
      <Avatar.Image />
      <Avatar.Fallback>
        <UserIcon className="h-5 w-5" />
      </Avatar.Fallback>
    </Avatar>
  );
}
