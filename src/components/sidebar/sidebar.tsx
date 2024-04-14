"use client";

import * as Drawer from "@/components/drawer";
import { useSidebar } from "@/contexts/sidebar";

type SidebarProps = {
  children?: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { open, setOpen } = useSidebar();
  return (
    <Drawer.Root
      direction="right"
      open={open}
      onOpenChange={(a) => {
        setOpen(a);
      }}
    >
      <Drawer.Overlay />
      <Drawer.Content className=" w-96">
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>{children}</Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
