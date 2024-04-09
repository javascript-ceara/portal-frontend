import { ThemeToggleButton } from "@/components/theme-toggle-button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { InstagramIcon } from "@/components/icons/instagram";

export function Header() {
  return (
    <header className="border-b">
      <div className="lg:container items-center lg:mx-auto px-8 h-24  flex justify-between">
        <div>
          <h1 className="flex items-center space-x-2">
            <Logo className="h-12 w-12 text-sky-800" />
            <span className="font-medium text-lg text-nowrap text-gray-600">
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
        <button className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
