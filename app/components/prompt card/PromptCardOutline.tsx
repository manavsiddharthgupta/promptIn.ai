export const PromptCardOutline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={'border-[1.5px] border-black w-full rounded-md ' + className}
    >
      {children}
    </div>
  );
};
