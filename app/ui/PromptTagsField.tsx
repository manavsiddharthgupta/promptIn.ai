const PromptTagsField = () => {
  return (
    <div className="p-4 border-[1px] border-gray-500 rounded-sm">
      <input
        className="text-sm px-2 py-[1px] outline-blue-600 border-[1px] border-gray-500 outline-[0.5px] rounded-sm max-w-[200px] w-full"
        type="text"
        placeholder="Add a tag"
      />
    </div>
  );
};

export default PromptTagsField;
