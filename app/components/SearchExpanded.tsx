import { SearchPrompt } from './SearchPrompt';
import { SearchUsers } from './SearchUsers';

export const SearchExpanded = () => {
  return (
    <div className="h-full p-6 w-full overflow-y-auto">
      <div className="mb-2">
        <h1 className="text-base font-semibold">From Prompts : </h1>
        <SearchPrompt />
        <SearchPrompt />
        <SearchPrompt />
        <SearchPrompt />
        <SearchPrompt />
        <SearchPrompt />
      </div>
      <div className="mb-2">
        <h1 className="text-base font-semibold">From Users : </h1>
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
        <SearchUsers />
      </div>
    </div>
  );
};
