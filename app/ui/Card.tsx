const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0 max-w-[68rem] mx-auto py-8">
      {children}
    </main>
  );
};
export default Card;
