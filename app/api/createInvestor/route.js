import Investor from '@/lib/models/Investor';
import { connectToDB } from '@/lib/mongoose';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const {
    companyName,
    userId,
    number,
    representativeName,
    email,
    industry,
    investmentPreference,
    investmentExperience,
    accreditation,
  } = body;
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();
    const investor = await Investor.findOneAndUpdate(
      { userId },
      {
        companyName,
        userId,
        number,
        representativeName,
        email,
        industry,
        investmentPreference,
        investmentExperience,
        accreditation,
        role: 'investor',
        isOnboarded: true,
      },
      { upsert: true }
    );
    return NextResponse.json(investor);
  } catch (error) {
    console.log(error);
    return new NextResponse('Failed to onboard', { status: 401 });
  }
}
