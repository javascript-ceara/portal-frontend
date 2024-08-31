import { ReactNode } from "react";

export type BaseProps<P = {}> = P & {
  children?: ReactNode;
  className?: string;
};

export type Event<P = {}> = P & {
  id: number;
  title: string;
  created_at: string;
  description: string;
  start_date: string;
  end_date: string;
  place: string; // nome do local
  is_online: boolean;
  address: string;
  subscribe_url: string;
};
