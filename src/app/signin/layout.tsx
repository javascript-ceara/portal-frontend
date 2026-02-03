import type { Metadata } from "next";
import { View, ViewBody, ViewFooter, ViewHeader } from "@/components/view";

export const metadata: Metadata = {
  title: "React Ceará - Login",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View>
      <ViewHeader />
      <ViewBody>{children}</ViewBody>
      <ViewFooter />
    </View>
  );
}
