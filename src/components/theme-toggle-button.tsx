"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { MoonIcon, SunIcon, Monitor } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { useTheme } from "next-themes";

function ThemeToggleButton() {
  const [isClient, setIsClient] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Popover>
      <PopoverTrigger className="text-primary">
        {resolvedTheme === "light" && <SunIcon className="h-6 w-6" />}
        {resolvedTheme === "dark" && <MoonIcon className="h-6 w-6" />}
        {resolvedTheme === "system" && <Monitor className="h-6 w-6" />}
      </PopoverTrigger>
      <PopoverContent className="max-w-40 p-0 py-1">
        <ul>
          <li className="flex">
            <button
              onClick={() => setTheme("light")}
              className={twMerge(
                "text-foreground hover:bg-background-hover flex flex-1 items-center px-4 py-1 font-medium",
                theme === "light" && "text-primary",
              )}
            >
              <SunIcon className="mr-2 h-6 w-6" />
              <span>Claro</span>
            </button>
          </li>
          <li className="flex">
            <button
              onClick={() => setTheme("dark")}
              className={twMerge(
                "text-foreground hover:bg-background-hover flex flex-1 items-center px-4 py-1 font-medium",
                theme === "dark" && "text-primary",
              )}
            >
              <MoonIcon className="mr-2 h-6 w-6" />
              <span>Escuro</span>
            </button>
          </li>
          <li className="flex">
            <button
              onClick={() => setTheme("system")}
              className={twMerge(
                "text-foreground hover:bg-background-hover flex flex-1 items-center px-4 py-1 font-medium ",
                theme === "system" && "text-primary",
              )}
            >
              <Monitor className="mr-2 h-6 w-6" />
              <span>Sistema</span>
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );

  // if (theme === "light") {
  //   return (
  //     <button
  //       onClick={() => {
  //         setTheme("dark");
  //       }}
  //     >
  //       <MoonIcon className="h-6 w-6" />
  //       <span className="sr-only">change to light mode</span>
  //     </button>
  //   );
  // }
  // return (
  //   <button
  //     onClick={() => {
  //       setTheme("light");
  //     }}
  //   >
  //     <SunIcon className="h-7 w-7" />
  //     <span className="sr-only">change to dark mode</span>
  //   </button>
  // );
}

export { ThemeToggleButton };
