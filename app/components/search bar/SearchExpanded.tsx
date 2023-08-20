import { SearchPromptType } from '@/app/lib/types/prompts';
import { SearchPrompt } from './SearchPrompt';
// import { SearchUsers } from './SearchUsers';
import { CircularLoading } from '../CircularProgress';

export const SearchExpanded = ({
  searchPromptResult,
  searchLoadingState,
  searchErrorState,
}: {
  searchPromptResult: SearchPromptType[] | undefined;
  searchLoadingState: boolean;
  searchErrorState: string | null;
}) => {
  let allSearchPrompt: any = (
    <p className="text-sm font-semibold text-gray-500 mt-6 text-center">
      No prompt matched your search
    </p>
  );
  if (searchPromptResult && searchPromptResult.length > 0) {
    allSearchPrompt = searchPromptResult.map((prompt: SearchPromptType) => (
      <SearchPrompt key={prompt.id} prompt={prompt} />
    ));
  }

  return (
    <div className="h-full p-6 w-full overflow-y-auto">
      <div className="mb-4">
        <h1 className="text-base font-semibold">From Prompts : </h1>
        {searchLoadingState ? (
          <div className="text-sm font-semibold text-center mt-4">
            <CircularLoading />
          </div>
        ) : searchErrorState ? (
          <p className="text-sm font-semibold text-center text-red-500 mt-6">
            Oops you got 404 :)
          </p>
        ) : (
          allSearchPrompt
        )}
      </div>
      {/* <div className="mb-2">
        <h1 className="text-base font-semibold">From Users : </h1>
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
      </div> */}
    </div>
  );
};
