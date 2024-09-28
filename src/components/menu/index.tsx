import { Slot } from "@radix-ui/react-slot";
import { Separator } from "@/components/separator";

export function Menu({ children }: React.PropsWithChildren) {
  return <ul>{children}</ul>;
}

Menu.Item = Item;
Menu.Separator = Separator;
Menu.SeparatorLabel = Separator.Label;

export type MenuItemProps = React.PropsWithChildren<{
  asChild?: boolean;
}>;

function Item({ asChild, children }: MenuItemProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <li>
      <Comp className="block px-4 py-3 hover:bg-background-hover">
        {children}
      </Comp>
    </li>
  );
}
