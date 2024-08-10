import { twMerge } from "tailwind-merge";

export function Root({
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
          <div className=" h-[1px] flex-1 bg-gray-200" />
          {children}
          <div className="h-[1px] flex-1 bg-gray-200" />
        </>
      ) : (
        <div className="h-[1px] flex-1 bg-gray-200" />
      )}
    </div>
  );
}

export function Label({ children }: React.PropsWithChildren) {
  return <div className="p-2">{children}</div>;
}
