import Investor from '@/lib/models/Investor';
import { connectToDB } from '@/lib/mongoose';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();

  try {
    connectToDB();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const investor = await Investor.findOne({ userId });

    return NextResponse.json(investor);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user', 'User error');
  }
}
