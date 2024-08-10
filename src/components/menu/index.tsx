import { Slot } from "@radix-ui/react-slot";
import { Root as SeparatorRoot, Label } from "@/components/separator";

export const Separator = SeparatorRoot;
export const SeparatorLabel = Label;

export function Root({ children }: React.PropsWithChildren) {
  return <ul>{children}</ul>;
}

export function Item({
  asChild,
  children,
}: React.PropsWithChildren<{
  asChild?: boolean;
}>) {
  const Comp = asChild ? Slot : "div";
  return (
    <li>
      <Comp className="block px-4 py-3 hover:bg-background-hover">
        {children}
      </Comp>
    </li>
  );
}
