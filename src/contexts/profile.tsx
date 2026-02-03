"use client";

import { createContext, use } from "react";
import { Tables } from "@/types/supabase.database";

type ProfileContext = {
  profile: Tables<"profiles"> | null;
};

const Context = createContext({} as ProfileContext);

type ProfileProviderProps = {
  children: React.ReactNode;
  profile: Tables<"profiles"> | null;
};

function ProfileProvider({ children, profile }: ProfileProviderProps) {
  const value = {
    profile,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useProfile() {
  return use(Context);
}

export {
  ProfileProvider,
  useProfile,
  type ProfileContext,
  type ProfileProviderProps,
};
