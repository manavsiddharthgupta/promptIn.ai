export interface ProfileData {
  status: number;
  message: string;
  extraInfo: {
    id: string;
    avatarName: string | null;
    email: string | null;
    name: string | null;
    image: string | null;
    link: string | null;
    oneLiner: string | null;
    profileTags: string[];
  };
}
