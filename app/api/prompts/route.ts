import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const prompts = await prisma.prompt.findMany();

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
  const { createdBy, title, body } = await request.json();

  const userResponse = await prisma.prompt.create({
    data: {
      createdBy: createdBy,
      title: title,
      body: body,
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
