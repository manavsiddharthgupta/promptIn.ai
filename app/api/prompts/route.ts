import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const prompts = await prisma.prompt.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      tags: true,
      createdBy: true,
      createdAt: true,
      _count: {
        select: {
          starredby: true,
        },
      },
      creator: {
        select: {
          avatarName: true,
          image: true,
          id: true,
          profileTags: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
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

export async function POST(request: Request) {
  const { createdBy, title, body, tags } = await request.json();

  const allTags = tags.map((tag: string) => {
    return {
      name: tag,
      slug: tag.toLowerCase(),
    };
  });

  const checkTagExist = async (slug: string) => {
    const existingTag = await prisma.tag.findUnique({
      where: {
        slug: slug,
      },
    });
    return existingTag;
  };

  const filteringCreateTags = async () => {
    const toCreateTags = await Promise.all(
      allTags.map(async (tag: { name: string; slug: string }) => {
        const existingTag = await checkTagExist(tag.slug);
        if (existingTag) {
          return false;
        }
        return tag;
      })
    );

    return toCreateTags.filter(Boolean);
  };

  const createtag = await filteringCreateTags();

  if (!createtag) {
    return NextResponse.json({
      status: 401,
      message: 'Tags not created',
    });
  }

  const userResponse = await prisma.prompt.create({
    data: {
      createdBy: createdBy,
      title: title,
      body: body,
      tags: {
        create: createtag,
        connect: allTags
          .filter(
            (tag: { name: string; slug: string }) => !createtag.includes(tag)
          )
          .map((tag: { name: string; slug: string }) => ({ slug: tag.slug })),
      },
    },
    include: {
      tags: true,
    },
  });

  if (!userResponse) {
    return NextResponse.json({
      status: 401,
      message: 'Prompt not created',
    });
  }
  return NextResponse.json({
    status: 200,
    message: 'Prompt created successfully',
    extraInfo: userResponse,
  });
}
