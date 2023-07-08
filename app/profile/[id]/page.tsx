import { ProfileComponent } from '@/app/components/profile/ProfileComponent';
import { getMyProfileData } from '@/app/lib/profile';
import { ProfileData } from '@/app/lib/types/profile';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

// export const dynamicParams = true; default

// export const dynamic = 'auto'; default

// export const revalidate = 10;

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
