export interface Prompt {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  creator: {
    id: string;
    avatarName: string | null;
    image: string | null;
    profileTags: string[];
  };
  tags: {
    name: string;
    slug: string;
    id: string;
  }[];
  _count: {
    starredby: number;
  };
}
export interface PromptExtend {
  prompt: Prompt;
}

export interface SearchPromptType {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  _count: {
    starredby: number;
  };
}
