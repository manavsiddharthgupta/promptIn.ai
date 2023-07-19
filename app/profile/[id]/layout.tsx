import { ProfileFeed } from '@/app/components/profile/ProfileFeed';
import Card from '@/app/ui/Card';

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {children}
      <Card>
        <ProfileFeed />
      </Card>
    </main>
  );
}
