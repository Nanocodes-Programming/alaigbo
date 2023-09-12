import EventCard from '@/components/Events/EventCard';
import MemberSidebar from '@/components/MemberSidebar';
import { fetchInvestor } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect, useRouter } from 'next/navigation';

const InvestorPage = async () => {
  const { id } = await currentUser();

  const investor = await fetchInvestor(id);

  if (!isMember || !investor) redirect('/accountType');

  return (
    <div className="min-h-[100vh] w-full sm:pb-0 pb-10 relative grid grid-cols-12 place-content-center  ">
      {/* <div className="hidden lg:!flex col-span-3">
        <MemberSidebar imgUrl={member?.imgUrl} department={member?.group} />
      </div> */}

      <div className=" lg:col-span-9 col-span-12">
        <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
          <h1 className="text-3xl font-bold text-center md:text-start mt-24">{`Welcome ${investor?.companyName}`}</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-10">
            <div className="sm:col-span-2"></div>
            <div className="sm:col-span-1">
              <EventCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPage;
