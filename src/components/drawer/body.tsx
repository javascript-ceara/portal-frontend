import { twMerge } from "tailwind-merge";

export type DrawerBodyProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Body({ className, children }: DrawerBodyProps) {
  return <div className={twMerge("p-4", className)}>{children}</div>;
}
