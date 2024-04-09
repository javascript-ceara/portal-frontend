import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

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
    </button>
  );
}
