import { Metadata } from "next";
import * as View from "@/components/view";

export const metadata: Metadata = {
  title: "React Ceará - Eventos",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View.Root>
      <View.Header />
      <View.Body>{children}</View.Body>
      <View.Footer />
    </View.Root>
  );
}
