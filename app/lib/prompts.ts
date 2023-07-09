export const getAllPromptsData = async () => {
  const data = await fetch('http://localhost:3000/api/prompts');
  const prompts = await data.json();
  return prompts;
};

export const getPromptData = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/prompts/${id}`);
  const prompt = await data.json();
  return prompt;
};

export const createdAtTimeStamp = (createdAt: string): string => {
  const currentTime = new Date();
  const timestamp = new Date(createdAt);
  const timeDifference = currentTime.getTime() - timestamp.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  let result = '';

  if (weeks > 0) {
    result = `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
  } else if (days > 0) {
    result = `${days} ${days === 1 ? 'day' : 'days'}`;
  } else if (hours > 0) {
    result = `${hours} ${hours === 1 ? 'hr' : 'hrs'}`;
  } else if (minutes > 0) {
    result = `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
  } else {
    result = `${seconds} ${seconds === 1 ? 'sec' : 'secs'}`;
  }

  return result;
};
