import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import "./globals.css";
import { RootProvider } from "./root-provider";

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
    <html lang="pt" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "bg-background text-foreground antialiased",
        )}
      >
        <RootProvider>
          <Sidebar />
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
