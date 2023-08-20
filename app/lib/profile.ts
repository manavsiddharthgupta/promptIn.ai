export const getMyProfileData = async (userId: string) => {
  const profileData = await fetch('http://localhost:3000/api/user/' + userId);
  if (profileData.status === 404) {
    return profileData;
  }
  const profileDataJson = await profileData.json();
  return profileDataJson;
};
