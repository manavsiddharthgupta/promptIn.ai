import { getAuthSession } from '@/app/lib/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const db = new PrismaClient();
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id: promptId } = context.params;
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({
      status: 200,
      isBookmarked: false,
      message: 'you are not autorized',
    });
  }

  const userId = session.user.id;

  try {
    const isBookmarked = await db.bookmark.findUnique({
      where: {
        userId_promptId: {
          promptId,
          userId,
        },
      },
    });

    if (isBookmarked) {
      return NextResponse.json({
        status: 200,
        message: 'bookmark found',
        isBookmarked: true,
      });
    } else {
      return NextResponse.json({
        status: 200,
        message: 'bookmark not found',
        isBookmarked: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'something went wrong',
      extraInfo: error,
    });
  }
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const { id: promptId } = context.params;

  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: 'you are not autorized',
    });
  }

  const userId = session.user.id;

  try {
    const isBookmarked = await db.bookmark.findUnique({
      where: { userId_promptId: { userId, promptId } },
    });

    if (isBookmarked) {
      await db.bookmark.delete({
        where: { userId_promptId: { userId, promptId } },
      });

      return NextResponse.json({
        status: 200,
        message: 'bookmarked removed',
      });
    } else {
      await db.bookmark.create({
        data: {
          user: { connect: { id: userId } },
          prompt: { connect: { id: promptId } },
        },
      });

      return NextResponse.json({
        status: 200,
        message: 'bookmarked created',
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'something went wrong',
      extraInfo: error,
    });
  }
}
