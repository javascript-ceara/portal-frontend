import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { createClient } from "@/services/supabase/server";
import { ThemeProvider } from "next-themes";

import { ProfileProvider } from "@/contexts/profile";
import { Toaster } from "@/components/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Ceará",
  description: "Comunidade cearense de React",
};

export default async function RootLayout({
  children,
  dialog,
}: Readonly<{
  children: React.ReactNode;
  dialog: React.ReactNode;
}>) {
  console.log("ddddd", dialog);

  const client = createClient();
  const { data } = await client.auth.getUser();

  const { data: profiles } = await client
    .from("profiles")
    .select("*")
    .eq("id", data.user?.id || "")
    .single();

  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "bg-background text-foreground antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProfileProvider profile={profiles}>
            {children}
            {dialog}
            <Toaster />
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
