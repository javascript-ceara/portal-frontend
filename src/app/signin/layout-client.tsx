"use client";

import { View } from "@/components/view";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View>
      <View.Header />
      <View.Body>{children}</View.Body>
      <View.Footer />
    </View>
  );
}
