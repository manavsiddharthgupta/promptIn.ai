'use client';
import { useState } from 'react';
import { ProfileCard } from '@/app/components/profile/ProfileCard';
import ProfileEdit from '@/app/components/profile/ProfileEdit';
import { ProfileFeed } from '@/app/components/profile/ProfileFeed';
import Card from '@/app/ui/Card';
import { ProfileData } from '@/app/lib/types/profile';

export const ProfileComponent = ({
  params,
  profileDetails,
}: {
  params: { id: string };
  profileDetails: ProfileData;
}) => {
  const [showEditModal, setShowEditModal] = useState(false);

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
      {showEditModal && (
        <ProfileEdit
          profileCardData={profileDetails}
          closeEditModalHandler={closeEditModal}
        />
      )}
    </>
  );
};
