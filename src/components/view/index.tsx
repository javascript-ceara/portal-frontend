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
import * as Drawer from "@/components/drawer";
import * as Popover from "@/components/popover";
import * as Menu from "@/components/menu";

import { useProfile } from "@/contexts/profile";

export function Root({ children }: React.PropsWithChildren) {
  return <div>{children}</div>;
}

export function Header() {
  const { profile } = useProfile();
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="flex h-20 w-full items-center justify-between px-8 lg:container lg:mx-auto">
        <div>
          <Link href="/">
            <h1 className="flex items-center space-x-2">
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-nowrap font-semibold">React Ceará</span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex">
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
                  A comunidade
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
            <Popover.Trigger className="hidden md:block">
              <UserAvatar />
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
            <Drawer.Trigger type="button" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">menu mobile</span>
            </Drawer.Trigger>
            <Drawer.Overlay />
            <Drawer.Portal>
              <Drawer.Content className="w-72">
                <div className="flex h-20 border-b">
                  {profile?.id && <UserHeadline />}
                </div>

                {profile?.id ? (
                  <>
                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/profile">Meu perfil</Link>
                      </Menu.Item>
                    </Menu.Root>

                    <Menu.Separator />

                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/events">Eventos</Link>
                      </Menu.Item>
                      <Menu.Item asChild>
                        <Link href="/about">A comunidade</Link>
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
                  <>
                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/events">Eventos</Link>
                      </Menu.Item>
                      <Menu.Item asChild>
                        <Link href="/about">A comunidade</Link>
                      </Menu.Item>
                    </Menu.Root>

                    <Menu.Separator />

                    <Menu.Separator />
                    <Menu.Root>
                      <Menu.Item asChild>
                        <Link href="/signin">Entrar</Link>
                      </Menu.Item>
                      <Menu.Item asChild>
                        <Link href="/signup">Cadastrar</Link>
                      </Menu.Item>
                    </Menu.Root>
                  </>
                )}
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </header>
  );
}

export function Body({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <main className={twMerge("-z-0 min-h-screen", className)}>{children}</main>
  );
}
export function Footer() {
  return (
    <footer className="boder mt-8 border-t border-border bg-foreground text-background dark:bg-background dark:text-foreground">
      <div className="space-y-4 px-8 py-12 lg:container lg:mx-auto">
        <div className="flex justify-between">
          <h6 className="flex items-center space-x-1 font-bold">
            <Logo className="h-8 w-8" />
            <span>React Ceará</span>
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
            <p className="text-center text-sm">© 2023 React Ceará</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
