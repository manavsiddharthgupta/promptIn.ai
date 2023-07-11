import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '@/app/lib/auth';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const promptSchema = {
    select: {
      prompt: {
        select: {
          id: true,
          title: true,
          body: true,
          tags: true,
          creator: {
            select: {
              avatarName: true,
              image: true,
              id: true,
              profileTags: true,
            },
          },
          createdAt: true,
          _count: {
            select: {
              starredby: true,
            },
          },
        },
      },
    },
  };

  const createdPrompts = await prisma.prompt.findMany({
    where: {
      createdBy: id,
    },
    select: {
      id: true,
      title: true,
      body: true,
      tags: true,
      creator: {
        select: {
          avatarName: true,
          image: true,
          id: true,
          profileTags: true,
        },
      },
      createdAt: true,
      _count: {
        select: {
          starredby: true,
        },
      },
    },
  });

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
      bookmarkedPrompt: promptSchema,
      starredPrompt: promptSchema,
    },
  });

  if (!profile) {
    return NextResponse.json({
      status: 401,
      message: 'profile not found',
    });
  }
  const newProfile = {
    ...profile,
    createdPrompts,
  };

  return NextResponse.json({
    status: 200,
    message: 'profile fetched successfully',
    extraInfo: newProfile,
  });
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session || session.user.id !== context.params.id) {
    return NextResponse.json({
      status: 401,
      message: 'you are not autorized',
    });
  }

  const { id } = context.params;

  const changedData = await request.json();

  const { avatarName } = changedData;

  if (avatarName) {
    const existingProfile = await prisma.user.findFirst({
      where: {
        avatarName: avatarName,
        NOT: {
          id: id,
        },
      },
    });

    if (existingProfile) {
      return NextResponse.json({
        status: 400,
        message: 'Avatar already exists',
      });
    }
  }

  const profile = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      ...changedData,
    },
  });
  if (!profile) {
    return NextResponse.json({
      status: 401,
      message: 'profile not updated',
      extraInfo: profile,
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'profile updated successfully',
    extraInfo: profile,
  });
}
