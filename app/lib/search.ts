export const getSearchPrompts = async (searchInput: string) => {
  const data = await fetch('/api/search/prompts?searchInput=' + searchInput);
  const prompts = await data.json();
  return prompts;
};
