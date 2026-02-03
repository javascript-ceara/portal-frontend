"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MenuIcon } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { Logo } from "@/components/logo";
import { UserAvatar } from "@/components/user-avatar";
import { UserHeadline } from "@/components/user-headline";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { DiscordIcon } from "@/components/icons/discord";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
} from "@/components/drawer";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@/components/popover";
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuSeparatorLabel,
} from "@/components/menu";

import { useProfile } from "@/contexts/profile";
import React from "react";

type ViewProps = React.HTMLAttributes<HTMLDivElement>;
function View({ children }: ViewProps) {
  return <div>{children}</div>;
}

function ViewHeader() {
  const { profile } = useProfile();
  return (
    <header className="border-border bg-background sticky top-0 z-10 border-b">
      <div className="flex h-20 w-full items-center justify-between px-8 lg:container lg:mx-auto">
        <div>
          <Link href="/">
            <h1 className="flex items-center space-x-2">
              <Logo className="text-primary-foreground h-10 w-10" />
              <span className="text-nowrap font-semibold">
                Javascript Ceará
              </span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  href="/events"
                  className="hover:text-primary font-semibold"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary font-semibold"
                >
                  A comunidade
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-primary font-semibold">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggleButton />
          <Popover>
            <PopoverTrigger className="hidden md:block">
              <UserAvatar />
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent sideOffset={10} side="bottom" className="p-0">
                {profile?.id ? (
                  <>
                    <UserHeadline />
                    <MenuSeparator />
                    <Menu>
                      <MenuItem asChild>
                        <Link href="/profile">Meu perfil</Link>
                      </MenuItem>
                      <MenuItem asChild>
                        <Link href="/my-presentations">Minhas palestras</Link>
                      </MenuItem>
                    </Menu>

                    <MenuSeparator />

                    <Menu>
                      <MenuItem asChild>
                        <Link href="/signout">Sair</Link>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Menu>
                    <MenuItem asChild>
                      <Link href="/signin">Entrar</Link>
                    </MenuItem>
                    <MenuItem asChild>
                      <Link href="/signup">Cadastrar</Link>
                    </MenuItem>
                  </Menu>
                )}
              </PopoverContent>
            </PopoverPortal>
          </Popover>

          <Drawer direction="right">
            <DrawerTrigger type="button" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">menu mobile</span>
            </DrawerTrigger>
            <DrawerOverlay />
            <DrawerPortal>
              <DrawerContent className="w-72">
                <div className="flex h-20 border-b">
                  {profile?.id && <UserHeadline />}
                </div>

                {profile?.id ? (
                  <>
                    <Menu>
                      <MenuItem asChild>
                        <Link href="/profile">Meu perfil</Link>
                      </MenuItem>
                    </Menu>

                    <MenuSeparator />

                    <Menu>
                      <MenuItem asChild>
                        <Link href="/events">Eventos</Link>
                      </MenuItem>
                      <MenuItem asChild>
                        <Link href="/about">A comunidade</Link>
                      </MenuItem>
                    </Menu>

                    <MenuSeparator />

                    <Menu>
                      <MenuItem asChild>
                        <Link href="/signout">Sair</Link>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Menu>
                      <MenuItem asChild>
                        <Link href="/events">Eventos</Link>
                      </MenuItem>
                      <MenuItem asChild>
                        <Link href="/about">A comunidade</Link>
                      </MenuItem>
                    </Menu>

                    <MenuSeparator />

                    <MenuSeparator />
                    <Menu>
                      <MenuItem asChild>
                        <Link href="/signin">Entrar</Link>
                      </MenuItem>
                      <MenuItem asChild>
                        <Link href="/signup">Cadastrar</Link>
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </DrawerContent>
            </DrawerPortal>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

type ViewBodyProps = React.PropsWithChildren<{
  className?: string;
}>;
function ViewBody({ children, className }: ViewBodyProps) {
  return (
    <main className={twMerge("-z-0 min-h-screen", className)}>{children}</main>
  );
}

function ViewFooter() {
  return (
    <footer className="border-border bg-foreground text-background dark:bg-background dark:text-foreground mt-8 border-t">
      <div className="space-y-4 px-8 py-12 lg:container lg:mx-auto">
        <div className="flex justify-between">
          <h6 className="flex items-center space-x-1 font-bold">
            <Logo className="text-primary-foreground mr-2 h-8 w-8" />
            <span>JavaScript Ceará</span>
          </h6>
          <div className="flex space-x-4">
            <InstagramIcon className="flex h-6 w-6" />
            <WhatsAppIcon className="h-6 w-6" />
            <DiscordIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-8">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">Contribua com a comunidade</a>
            </li>
            <li>
              <a href="/">Código fonte no Github</a>
            </li>
          </ul>

          <div>
            <p className="text-center text-sm">© 2024 JavaScript Ceará</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export {
  View,
  ViewHeader,
  ViewBody,
  ViewFooter,
  type ViewProps,
  type ViewBodyProps,
};
