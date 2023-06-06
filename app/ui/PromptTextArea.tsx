const PromptTextArea = () => {
  return (
    <textarea
      placeholder="Write your prompt here"
      className="w-full resize-y outline-none border-[1px] transition ease-in-out duration-300 border-gray-500 p-4 rounded-sm min-h-[300px]"
    />
  );
};

export default PromptTextArea;
