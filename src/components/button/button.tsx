import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center border border-transparent justify-center whitespace-nowrap rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-sky-600 text-white hover:bg-sky-700",
        outlined: "border-sky-600 text-sky-600 font-bold hover:bg-sky-50",
      },
      size: {
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
export function Button({
  variant,
  size,
  asChild,
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={twMerge(buttonVariants({ variant, size, className }))}
      {...rest}
    ></Comp>
  );
}
