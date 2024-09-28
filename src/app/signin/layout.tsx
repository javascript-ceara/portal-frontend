import type { Metadata } from "next";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "React Ceará - Login",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutClient>{children}</LayoutClient>;
}
