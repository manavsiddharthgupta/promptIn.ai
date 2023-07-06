import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: { avatarName: string } }
) {
  const { avatarName } = context.params;

  const profile = await prisma.user.findUnique({
    where: {
      avatarName: avatarName,
    },
    select: {
      id: true,
      avatarName: true,
      email: true,
      name: true,
      image: true,
      link: true,
      oneLiner: true,
      profileTags: true,
    },
  });

  if (!profile) {
    return NextResponse.json({
      status: 401,
      message: 'profile not found',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'profile fetched successfully',
    extraInfo: profile,
  });
}
