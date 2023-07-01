import { ProfileCard } from '@/app/components/profile/ProfileCard';
import { ProfileFeed } from '@/app/components/profile/ProfileFeed';
import Card from '@/app/ui/Card';

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen">
      <Card>
        <ProfileCard />
        <ProfileFeed params={params} />
      </Card>
    </main>
  );
};

export default ProfilePage;
