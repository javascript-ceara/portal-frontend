"use client";

import { InstagramIcon } from "@/components/icons/instagram";
import { Logo } from "@/components/logo";
import * as Drawer from "@/components/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  return (
    <header className="border-border sticky top-0 border-b bg-background">
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
          <Drawer.Root direction="right">
            <Drawer.Trigger type="button" className="lg:hidden">
              <Menu className="h-6 w-6" />
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
