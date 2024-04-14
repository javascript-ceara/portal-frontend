import { twMerge } from "tailwind-merge";

export type DrawerHeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Header({ className, children }: DrawerHeaderProps) {
  return (
    <div className={twMerge("grid gap-1.5 px-4 pt-4 text-center", className)}>
      {children}
    </div>
  );
}
