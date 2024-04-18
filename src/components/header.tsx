"use client";

import { InstagramIcon } from "@/components/icons/instagram";
import { Logo } from "@/components/logo";
import { useSidebar } from "@/contexts/sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  const { setOpen } = useSidebar();
  return (
    <header className="bg-background border-background-darker dark:border-background-lighter sticky top-0 z-10 border-b">
      <div className="flex h-24 w-full items-center justify-between px-8 lg:container lg:mx-auto">
        <div>
          <h1 className="flex items-center space-x-2">
            <Logo className="text-primary h-12 w-12" />
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
                  Sobre
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
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">menu mobile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
