import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { db } from '@/app/lib/db';

export async function GET(request: Request) {
  const { searchInput } = await request.json();

  const users = await db.user.findMany({
    where: {
      OR: [
        { avatarName: { contains: searchInput, mode: 'insensitive' } },
        { name: { contains: searchInput, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      avatarName: true,
      profileTags: true,
      image: true,
    },
  });

  if (!users) {
    return NextResponse.json({
      status: 401,
      message: 'Users not fetched',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'Users fetched successfully',
    extraInfo: users,
  });
}
