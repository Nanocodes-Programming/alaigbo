'use server';
import { auth } from '@clerk/nextjs';

import { NextResponse } from 'next/server';
import User from '../models/user';
import { connectToDB } from '../mongoose';
import Investor from '../models/Investor';
import Book from '../models/booking';

export async function createMember(
  firstName,
  lastName,
  middleName,
  state,
  lga,
  town,
  placeOfBirth,
  village,
  familyName,
  gender,
  userId,
  interests,
  bio,
  imgUrl,
  dob,
  email,
  number,
  group
) {
  try {
    const { userId: id } = auth();

    if (!id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    connectToDB();
    const user = await User.findOne({ email });

    if (user) {
      return new NextResponse('User already exists', { status: 401 });
    }

    await User.findOneAndUpdate(
      { userId },
      {
        email,
        firstName,
        lastName,
        middleName,
        state,
        lga,
        town,
        placeOfBirth,
        village,
        familyName,
        gender,
        role: 'member',
        interests,
        bio,
        imgUrl,
        dob,
        userId,
        number,
        isOnboarded: true,
        group,
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error);

    throw new Error('Failed to onboard user');
  }
}
export async function eventBooking(
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
  userId
) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();
    const user = await User.findOne({ userId });
    if (!user) {
      return new NextResponse('User not found', { status: 401 });
    }

    const newBook = new Book({
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
    });

    await newBook.save();
    return newBook;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to Book event', 'Book error');
  }
}
export async function createInvestor(
  companyName,
  number,
  representativeName,
  email,
  industry,
  investmentPreference,
  investmentExperience,
  accreditation,
  userId
) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const user = await Investor.find({ email: email });

    if (user) {
      return new NextResponse('User already exists', { status: 401 });
    }
    await Investor.findOneAndUpdate(
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
  } catch (error) {
    console.log(error);
    throw new Error('Failed to onboard', 'Investor error');
  }
}

export const fetchUserMember = async (id) => {
  try {
    connectToDB();
    const member = await User.findOne({
      userId: id,
    });
    return member;
  } catch (error) {
    console.log(error);
  }
};
export const fetchInvestor = async (id) => {
  try {
    connectToDB();
    const investor = await Investor.findOne({ userId: id });

    return investor;
  } catch (error) {
    console.log(error);
  }
};
