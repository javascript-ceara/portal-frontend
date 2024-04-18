import { twMerge } from "tailwind-merge";

import { MoonIcon, SunIcon, Monitor } from "lucide-react";
import * as Popover from "@/components/popover";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  console.log(resolvedTheme);

  return (
    <Popover.Root>
      <Popover.Trigger className="text-sky-700 dark:text-sky-400">
        {resolvedTheme === "light" && <SunIcon className="h-6 w-6" />}
        {resolvedTheme === "dark" && <MoonIcon className="h-6 w-6" />}
        {resolvedTheme === "system" && <Monitor className="h-6 w-6" />}
      </Popover.Trigger>
      <Popover.Content className="max-w-40 p-0 py-1">
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
                "text-foreground hover:bg-background-hover flex flex-1 items-center px-4 py-1 font-medium",
                theme === "system" && "text-primary",
              )}
            >
              <Monitor className="mr-2 h-6 w-6" />
              <span>Sistema</span>
            </button>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
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
