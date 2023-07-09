export const PromptAllTags = ({
  tags,
}: {
  tags: {
    name: string;
    slug: string;
    id: string;
  }[];
}) => {
  const promptTags = tags.map((tag) => <PormptTag tag={tag.name} />);
  return <div className="mt-[2px] px-1 font-normal w-full">{promptTags}</div>;
};

export const PormptTag = ({ tag }: { tag: string }) => {
  return (
    <span className="inline-block mb-1 w-fit px-2 py-[1px] bg-[#0000001d] rounded-xl mr-1 text-xs">
      {tag}
    </span>
  );
};
