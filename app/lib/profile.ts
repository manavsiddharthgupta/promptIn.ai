export const getMyProfileData = async (userId: string) => {
  const profileData = await fetch('http://localhost:3000/api/user/' + userId);
  const profileDataJson = await profileData.json();
  return profileDataJson;
};
