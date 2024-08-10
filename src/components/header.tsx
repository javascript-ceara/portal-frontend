"use client";
import Link from "next/link";

import { MenuIcon } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { Logo } from "@/components/logo";
import { UserAvatar } from "@/components/user-avatar";
import { UserHeadline } from "@/components/user-headline";
import { ThemeToggleButton } from "./theme-toggle-button";
import * as Drawer from "@/components/drawer";
import * as Popover from "@/components/popover";
import * as Menu from "@/components/menu";

import { useProfile } from "@/contexts/profile";

export function Header() {
  const { profile } = useProfile();
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="flex h-24 w-full items-center justify-between px-8 lg:container lg:mx-auto">
        <div>
          <h1 className="flex items-center space-x-2">
            <Logo className="h-12 w-12 text-primary" />
            <span className="text-nowrap text-lg font-semibold">
              React Ceará
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  href="/events"
                  className="font-semibold hover:text-primary"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-semibold hover:text-primary"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link href="/" className="font-semibold hover:text-primary">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggleButton />
          <Popover.Root>
            <Popover.Trigger asChild>
              <button>
                <UserAvatar />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content sideOffset={10} side="bottom" className="p-0">
                {profile?.id ? (
                  <>
                    <UserHeadline />
                    <Menu.Separator />
                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/profile">Meu perfil</Link>
                      </Menu.Item>
                    </Menu.Root>

                    <Menu.Separator />

                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/signout">Sair</Link>
                      </Menu.Item>
                    </Menu.Root>
                  </>
                ) : (
                  <Menu.Root>
                    <Menu.Item asChild>
                      <Link href="/signin">Entrar</Link>
                    </Menu.Item>
                    <Menu.Item asChild>
                      <Link href="/signup">Cadastrar</Link>
                    </Menu.Item>
                  </Menu.Root>
                )}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Drawer.Root direction="right">
            <Drawer.Trigger type="button" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">menu mobile</span>
            </Drawer.Trigger>
            <Drawer.Overlay />
            <Drawer.Portal>
              <Drawer.Content className="w-72">
                <Drawer.Header>
                  <Drawer.Title>Title</Drawer.Title>
                  <Drawer.Description>Description</Drawer.Description>
                </Drawer.Header>
                <Drawer.Body className="h-[400px]">dsds</Drawer.Body>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </header>
  );
}
