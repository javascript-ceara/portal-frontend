import { twMerge } from "tailwind-merge";

export function Separator({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      role="separator"
      className={twMerge("relative flex items-center", className)}
    >
      {children ? (
        <>
          <div className=" h-[1px] flex-1 bg-border" />
          {children}
          <div className="h-[1px] flex-1 bg-border" />
        </>
      ) : (
        <div className="h-[1px] flex-1 bg-border" />
      )}
    </div>
  );
}

export type SeparatorLabelProps = React.PropsWithChildren;
Separator.Label = ({ children }: SeparatorLabelProps) => {
  return <div className="p-2">{children}</div>;
};
