import EventRegistration from '@/components/form/EventRegistration';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';

import { redirect } from 'next/navigation';

const EventOnboard = async () => {
  const { id } = await currentUser();
  const isMember = await fetchUserMember(id);
  const isInvestor = await fetchInvestor(id);

  if (!isMember?.isOnboarded && !isInvestor?.isOnboarded) {
    return redirect('/accountType');
  }

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
