'use client';
import { ProfileCard } from '@/app/components/profile/ProfileCard';
import ProfileEdit from '@/app/components/profile/ProfileEdit';
import { ProfileFeed } from '@/app/components/profile/ProfileFeed';
import Card from '@/app/ui/Card';
import { useState } from 'react';

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <main className="min-h-screen">
      <Card>
        <ProfileCard openEditModalHandler={openEditModal} />
        <ProfileFeed params={params} />
      </Card>
      {showEditModal && <ProfileEdit closeEditModalHandler={closeEditModal} />}
    </main>
  );
};

export default ProfilePage;
