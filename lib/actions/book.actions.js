'use server';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { connectToDB } from '../mongoose';
import Book from '../models/booking';

export const booked = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const books = await Book.find();
    const registered = books.find((book) => book.userId === userId);
    if (!registered) {
      return null;
    }
    return registered;
  } catch (error) {
    return null;
  }
};
