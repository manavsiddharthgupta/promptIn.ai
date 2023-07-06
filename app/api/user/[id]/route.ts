import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '@/app/lib/auth';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const profile = await prisma.user.findUnique({
    where: {
      id: id,
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

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: 'you are not autorized',
    });
  }

  const { id } = context.params;

  const { avatarName, email, name, image, link, oneLiner, profileTags } =
    await request.json();

  const profile = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      avatarName: avatarName,
      email: email,
      name: name,
      image: image,
      link: link,
      oneLiner: oneLiner,
      profileTags: profileTags,
    },
  });

  if (!profile) {
    return NextResponse.json({
      status: 401,
      message: 'profile not updated',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'profile updated successfully',
    extraInfo: profile,
  });
}
