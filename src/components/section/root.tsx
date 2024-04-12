import { twMerge } from "tailwind-merge";

type SectionRootProps = {
  children: React.ReactNode;
  className?: string;
};

export function Root({ children, className }: SectionRootProps) {
  return <section className={className}>{children}</section>;
}
