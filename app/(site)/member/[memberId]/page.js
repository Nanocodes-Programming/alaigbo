import EventCard from '@/components/Events/EventCard';
import IdentityCard from '@/components/IdentityCard';
import MemberSidebar from '@/components/MemberSidebar';
import ProfileSidebar from '@/components/ProfileSidebar';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { format } from 'date-fns';
import { redirect } from 'next/navigation';
import React from 'react';

const MemberPage = async () => {
  const { id } = await currentUser();
  const member = await fetchUserMember(id);
  const {
    imgUrl,
    lastName,
    firstName,
    middleName,
    state,
    lga,
    town,
    placeOfBirth,
    village,
    familyName,
    gender,
    _id,
    dob,
  } = member;
  const currentId = _id.toString();
  const isCompany = await fetchInvestor(id);
  const date = format(dob, 'PPP');

  if (!isCompany?.isOnboarded && !member?.isOnboarded) redirect('/accountType');

  return (
    <div className="min-h-[100vh] w-full sm:pb-0 pb-10 relative grid grid-cols-12 place-content-center  ">
      <div className="hidden lg:!flex col-span-3">
        <MemberSidebar imgUrl={member?.imgUrl} department={member?.group} />
      </div>

      <div className=" lg:col-span-9 col-span-12">
        <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
          <h1 className="text-3xl font-bold text-center md:text-start mt-24">{`Welcome ${member?.firstName}`}</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-10">
            <div className="sm:col-span-2">
              <IdentityCard
                memberId={currentId}
                imgUrl={imgUrl}
                lastName={lastName}
                firstName={firstName}
                middleName={middleName}
                state={state}
                lga={lga}
                town={town}
                placeOfBirth={placeOfBirth}
                village={village}
                familyName={familyName}
                gender={gender}
                dob={date}
              />
            </div>
            <div className="sm:col-span-1">
              <EventCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
