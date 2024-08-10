"use client";

import { createContext, useContext } from "react";
import { Tables } from "@/types/supabase.database";

type ProfileContext = {
  profile: Tables<"profiles"> | null;
};

const Context = createContext({} as ProfileContext);

type ProfileProviderProps = {
  children: React.ReactNode;
  profile: Tables<"profiles"> | null;
};

export function ProfileProvider({ children, profile }: ProfileProviderProps) {
  const value = {
    profile,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useProfile() {
  return useContext(Context);
}
