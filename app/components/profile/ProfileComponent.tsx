'use client';
import { useState } from 'react';
import { ProfileCard } from '@/app/components/profile/ProfileCard';
import ProfileEdit from '@/app/components/profile/ProfileEdit';
import { ProfileFeed } from '@/app/components/profile/ProfileFeed';
import Card from '@/app/ui/Card';
import { ProfileData } from '@/app/lib/types/profile';
import { useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProfileComponent = ({
  params,
  profileDetails,
}: {
  params: { id: string };
  profileDetails: ProfileData;
}) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const { data: session, status } = useSession();

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <Card>
        <ProfileCard
          profileCardData={profileDetails}
          openEditModalHandler={openEditModal}
        />
        <ProfileFeed params={params} />
      </Card>
      {showEditModal &&
        status === 'authenticated' &&
        session.user.id === profileDetails.extraInfo.id && (
          <ProfileEdit
            profileCardData={profileDetails}
            closeEditModalHandler={closeEditModal}
          />
        )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
