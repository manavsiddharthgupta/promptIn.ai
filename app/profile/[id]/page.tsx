import {
  ProfileComponent,
  ProfileData,
} from '@/app/components/profile/ProfileComponent';
import { getMyProfileData } from '@/app/lib/profile';
import { notFound } from 'next/navigation';

export const revalidate = 10;

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const profileDetails: ProfileData = await getMyProfileData(params.id);

  if (profileDetails.status !== 200) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <ProfileComponent params={params} profileDetails={profileDetails} />
    </main>
  );
};

export default ProfilePage;
