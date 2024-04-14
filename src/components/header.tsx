"use client";

import { InstagramIcon } from "@/components/icons/instagram";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "@/contexts/sidebar";

export function Header() {
  const { setOpen } = useSidebar();
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="flex h-24 items-center justify-between px-8 lg:container lg:mx-auto">
        <div>
          <h1 className="flex items-center space-x-2">
            <Logo className="h-12 w-12 text-sky-600" />
            <span className="text-nowrap text-lg font-bold text-gray-600">
              React Ceará
            </span>
          </h1>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/events" className="font-medium">
                Eventos
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium">
                Sobre
              </Link>
            </li>

            <li>
              <Link href="/" className="font-medium">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setOpen(true)}
          type="button"
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
