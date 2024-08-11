import * as View from "@/components/view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Ceará - Meu perfil",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <View.Header />
      <main className="min-h-screen">{children}</main>
      <View.Footer />
    </>
  );
}
