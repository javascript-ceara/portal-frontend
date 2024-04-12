type Props = {
  children: React.ReactNode;
};

export function TypographySmall({ children }: Props) {
  return <p className="text-sm font-medium leading-none">{children}</p>;
}
