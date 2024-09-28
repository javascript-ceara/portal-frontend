import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center border border-transparent justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outlined: "border-border hover:bg-background-hover",
      },
      size: {
        xs: "h-8 px-4",
        md: "h-11 px-5 py-6",
        lg: "h-16 px-8",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
function Button({ variant, size, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={twMerge(buttonVariants({ variant, size, className }))}
      {...rest}
    ></Comp>
  );
}

export { Button, buttonVariants };
