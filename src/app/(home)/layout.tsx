import { View, ViewHeader, ViewBody, ViewFooter } from "@/components/view";

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
