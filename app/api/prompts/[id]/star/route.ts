import { getAuthSession } from '@/app/lib/auth';
import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id: promptId } = context.params;

  const session = await getAuthSession();
  if (!session) {
    const starsCount = await db.star.count({
      where: { promptId },
    });
    return NextResponse.json({
      status: 200,
      hasStar: false,
      totalStars: starsCount,
      message: 'you are not autorized',
    });
  }

  const userId = session.user.id;

  try {
    const star = await db.star.findUnique({
      where: { userId_promptId: { userId, promptId } },
    });

    const starsCount = await db.star.count({
      where: { promptId },
    });

    if (star) {
      return NextResponse.json({
        status: 200,
        message: 'star found',
        hasStar: true,
        totalStars: starsCount,
      });
    } else {
      return NextResponse.json({
        status: 200,
        message: 'star not found',
        hasStar: false,
        totalStars: starsCount,
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
    const hasStar = await db.star.findUnique({
      where: { userId_promptId: { userId, promptId } },
    });

    if (hasStar) {
      await db.star.delete({
        where: { userId_promptId: { userId, promptId } },
      });

      const starsCount = await db.star.count({
        where: { promptId },
      });

      return NextResponse.json({
        status: 200,
        message: 'star removed',
        totalStars: starsCount,
      });
    } else {
      await db.star.create({
        data: {
          user: { connect: { id: userId } },
          prompt: { connect: { id: promptId } },
        },
      });

      const starsCount = await db.star.count({
        where: { promptId },
      });

      return NextResponse.json({
        status: 200,
        message: 'star added',
        totalStars: starsCount,
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
