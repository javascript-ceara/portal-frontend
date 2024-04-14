import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";

import { ThemeProvider } from "@/contexts/theme";
import { SidebarProvider } from "@/contexts/sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Ceará",
  description: "Comunidade cearense de React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-brand-100 dark:bg-brand-800")}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SidebarProvider>
            <Sidebar />
            <Header />
            {children}
            <Footer />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
