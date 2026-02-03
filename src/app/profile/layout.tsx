import type { Metadata } from "next";
import { View, ViewHeader, ViewFooter } from "@/components/view";

export const metadata: Metadata = {
  title: "React Ceará - Meu perfil",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View>
      <ViewHeader />
      <main className="min-h-screen">{children}</main>
      <ViewFooter />
    </View>
  );
}
