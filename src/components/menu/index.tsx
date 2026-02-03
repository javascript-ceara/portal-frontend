import { Slot } from "@radix-ui/react-slot";
import { Separator, SeparatorLabel } from "@/components/separator";

function Menu({ children }: React.PropsWithChildren) {
  return <ul>{children}</ul>;
}

const MenuSeparator = Separator;
const MenuSeparatorLabel = SeparatorLabel;

type MenuItemProps = React.PropsWithChildren<{
  asChild?: boolean;
}>;

function MenuItem({ asChild, children }: MenuItemProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <li>
      <Comp className="hover:bg-background-hover block px-4 py-3">
        {children}
      </Comp>
    </li>
  );
}

export {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuSeparatorLabel,
  type MenuItemProps,
};
