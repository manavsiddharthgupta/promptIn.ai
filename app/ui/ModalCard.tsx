export const ModalCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="z-0 fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.71)] p-4"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-[800px]">
        {children}
      </div>
    </>
  );
};
