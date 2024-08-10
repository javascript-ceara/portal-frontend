import { UserIcon } from "lucide-react";
import * as Avatar from "@/components/avatar";

export function UserAvatar() {
  return (
    <Avatar.Root className="h-10 w-10">
      <Avatar.Image />
      <Avatar.Fallback>
        <UserIcon className="h-5 w-5" />
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
