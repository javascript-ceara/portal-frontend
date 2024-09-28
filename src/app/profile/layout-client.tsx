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
      <main className="min-h-screen">{children}</main>
      <View.Footer />
    </View>
  );
}
