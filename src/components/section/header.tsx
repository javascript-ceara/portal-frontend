type SectionHeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: SectionHeaderProps) {
  return <div className="space-y-1 py-12">{children}</div>;
}
