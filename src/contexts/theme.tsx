"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}

export { ThemeProvider };
