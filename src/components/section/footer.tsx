type SectionFooterProps = {
  children?: React.ReactNode;
};

export function Footer({ children }: SectionFooterProps) {
  return <div className="mt-12">{children}</div>;
}
