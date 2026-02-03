import { Metadata } from "next";
import { View, ViewHeader, ViewBody, ViewFooter } from "@/components/view";

export const metadata: Metadata = {
  title: "React Ceará - Minhas palestras",
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
