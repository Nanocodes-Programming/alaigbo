import AccountProfile from '@/components/form/AccountProfile';
import EventRegistration from '@/components/form/EventRegistration';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const EventOnboard = async () => {
  const { id, firstName, lastName, emailAddresses } = await currentUser();
  const user = {
    firstName,
    lastName,
    emailAddresses,
  };
  const isMember = await fetchUserMember(id);
  const isCompany = await fetchInvestor(id);
  console.log(isCompany?.isOnboarded, isMember?.isOnboarded);
  if (!isCompany?.isOnboarded && !isMember?.isOnboarded)
    redirect('/accountType');

  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-2xl md:text-4xl capitalize font-bold text-center">
        Book a seat at the upcoming summit
      </h1>

      <div>
        <EventRegistration />
      </div>
    </div>
  );
};

export default EventOnboard;
