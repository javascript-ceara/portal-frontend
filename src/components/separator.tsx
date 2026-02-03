import { twMerge } from "tailwind-merge";

type SeparatorProps = React.PropsWithChildren<{
  className?: string;
}>;
function Separator({ children, className }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={twMerge("relative flex items-center", className)}
    >
      {children ? (
        <>
          <div className=" bg-border h-[1px] flex-1" />
          {children}
          <div className="bg-border h-[1px] flex-1" />
        </>
      ) : (
        <div className="bg-border h-[1px] flex-1" />
      )}
    </div>
  );
}

type SeparatorLabelProps = React.PropsWithChildren;
function SeparatorLabel({ children }: SeparatorLabelProps) {
  return <div className="p-2">{children}</div>;
}

export {
  Separator,
  SeparatorLabel,
  type SeparatorLabelProps,
  type SeparatorProps,
};
