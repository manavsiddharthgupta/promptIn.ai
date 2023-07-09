import { PrismaClient, Prompt } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const prompt = await prisma.prompt.findUnique({
    where: {
      id: id,
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

  if (!prompt) {
    return NextResponse.json({
      status: 401,
      message: 'prompt not found',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'prompt fetched successfully',
    extraInfo: prompt,
  });
}
