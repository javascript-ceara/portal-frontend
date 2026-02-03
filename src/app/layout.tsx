import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { createClient } from "@/services/supabase/server";
import { ThemeProvider } from "next-themes";
import { ProfileProvider } from "@/contexts/profile";
import { Toaster } from "@/components/sooner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Ceará",
  description: "Comunidade cearense de React",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = await createClient();
  const { data } = await client.auth.getUser();

  const { data: profile } = await client
    .schema("public")
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
          <ProfileProvider profile={profile}>
            {children}
            <Toaster />
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
