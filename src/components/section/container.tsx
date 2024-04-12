import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: SectionContainerProps) {
  return (
    <div className={twMerge("px-8 lg:container lg:mx-auto", className)}>
      {children}
    </div>
  );
}
