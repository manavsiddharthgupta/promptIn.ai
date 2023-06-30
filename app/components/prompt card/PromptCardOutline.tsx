export const PromptCardOutline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={'w-full rounded-md ' + className}>{children}</div>;
};
