import InvestorProfile from '@/components/form/InvestorProfile';

const Investor = () => {
  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-5xl font-bold text-start">Onboarding</h1>
      <h5 className="font-semibold text-2xl  text-start">
        Complete your profile to continue
      </h5>
      <div>
        <InvestorProfile />
      </div>
    </div>
  );
};

export default Investor;
