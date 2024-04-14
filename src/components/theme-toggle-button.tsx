import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  if (theme === "light") {
    return (
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        <MoonIcon className="h-6 w-6" />
        <span className="sr-only">change to light mode</span>
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setTheme("light");
      }}
    >
      <SunIcon className="h-7 w-7" />
      <span className="sr-only">change to dark mode</span>
    </button>
  );
}
