import { ReactNode } from "react";

export type BaseProps<P = {}> = P & {
  children?: ReactNode;
  className?: string;
};
