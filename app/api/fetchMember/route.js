import User from '@/lib/models/user';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();

  try {
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const user = await User.findOne({ userId });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user', 'User error');
  }
}
