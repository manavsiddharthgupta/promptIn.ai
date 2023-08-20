import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';

export async function GET(request: NextRequest) {
  const searchInput = request.nextUrl.searchParams.get('searchInput');

  if (!searchInput) {
    return NextResponse.json({
      status: 401,
      message: 'Search input not provided',
    });
  }

  const prompts = await db.prompt.findMany({
    where: {
      OR: [
        { title: { contains: searchInput, mode: 'insensitive' } },
        { body: { contains: searchInput, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      title: true,
      body: true,
      _count: {
        select: {
          starredby: true,
          bookmarkedby: true,
        },
      },
      createdAt: true,
    },
  });

  if (!prompts) {
    return NextResponse.json({
      status: 401,
      message: 'Prompts not fetched',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'Prompts fetched successfully',
    extraInfo: prompts,
  });
}
