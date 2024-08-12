import * as Popover from "@/components/popover";
import { User } from "lucide-react";

function UserAvatar() {
  return (
    <div className="p-2 bg-background-lighter rounded-full">
      <User className="m-auto" />
    </div>
  );
}

function UserDetails() {
  return (
    <div className="flex flex-col text-start">
      <p className="font-medium">Cicero Viana</p>
      <p className="text-sm text-gray-500">cicerohen@gmail.com</p>
    </div>
  );
}

function UserAction({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <button className="w-full text-left">{children}</button>
    </li>
  );
}

function UserProfile() {
  return (
    <ul className="text-center p-4 space-y-4">
      <li className="flex items-center space-x-4">
        <UserAvatar />
        <UserDetails />
      </li>
      <hr className="my-2" />
      <UserAction>Meu perfil</UserAction>
      <hr className="my-2" />
      <UserAction>Sair</UserAction>
    </ul>
  );
}

export function UserInformation() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <User className="hover:text-primary" />
      </Popover.Trigger>
      <Popover.Content className="p-0 py-1">
        <UserProfile />
      </Popover.Content>
    </Popover.Root>
  );
}
