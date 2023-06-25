import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { avatar, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const userExist = await prisma.user.findUnique({
    where: {
      avatarName: avatar,
    },
  });

  if (userExist) {
    return NextResponse.json({
      status: 401,
      message: 'User already exist',
    });
  }

  const userResponse = await prisma.user.create({
    data: {
      avatarName: avatar,
      hashedPassword: hashedPassword,
    },
  });

  return NextResponse.json({
    status: 200,
    message: 'User created successfully',
    extraInfo: userResponse,
  });
}
