const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-4 max-w-[70rem] mx-auto py-8 transition-all ease-in-out duration-300">
      {children}
    </main>
  );
};
export default Card;
