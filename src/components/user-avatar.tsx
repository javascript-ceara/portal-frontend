import { UserIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";

function UserAvatar() {
  return (
    <Avatar className="border-border h-10 w-10 border">
      <AvatarImage />
      <AvatarFallback>
        <UserIcon className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
