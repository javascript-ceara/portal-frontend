import { SidebarProvider } from "@/contexts/sidebar";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
