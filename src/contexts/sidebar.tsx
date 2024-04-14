"use client";

import { createContext, useContext, useState } from "react";

export type SidebarContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext({} as SidebarContextType);

type SidebarProviderProps = {
  children?: React.ReactNode;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
