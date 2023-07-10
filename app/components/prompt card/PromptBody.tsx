export const PromptBody = ({
  promptTitle,
  promptDesc,
  PromptTitleSize,
  PromptDescSize,
  extraStyle,
}: {
  promptTitle: string;
  promptDesc: string;
  PromptTitleSize: string;
  PromptDescSize: string;
  extraStyle?: string;
}) => {
  return (
    <div className="mt-2 px-1 flex flex-col gap-1">
      <h1 className={`${PromptTitleSize} font-semibold`}>{promptTitle}</h1>
      <p className={`text-${PromptDescSize} text-slate-600 ${extraStyle}`}>
        {promptDesc}
      </p>
    </div>
  );
};
