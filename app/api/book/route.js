import Book from '@/lib/models/booking';
import User from '@/lib/models/user';
import { connectToDB } from '@/lib/mongoose';
import { auth } from '@clerk/nextjs';

import { NextResponse } from 'next/server';

export async function POST(response) {
  const body = await response.json();
  const {
    firstName,
    lastName,
    middleName,
    email,
    number,
    guest,
    reason,
    update,
    accommodation,
    prefix,
    location,
    participants,
    userId,
  } = body;

  if (!userId) {
    console.log('Unauthorized');
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();
    const user = await User.findOne({ userId });
    if (!user) {
      console.log('User not found');
      return new NextResponse('Unauthorized Please log in', { status: 401 });
    }
    const book = await Book.findOneAndUpdate(
      { userId },
      {
        firstName,
        lastName,
        middleName,
        email,
        number,
        guest,
        reason,
        update,
        accommodation,
        prefix,
        location,
        participants,
        userId,
        registered: true,
      },
      { upsert: true }
    );
    return NextResponse.json(book);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to onboard user', 'Book error');
  }
}
