import React from 'react';
import Countdown from './Countdown';

const EventTimer = () => {
  return (
    <div className="bg-[#000000] min-h-[469px] flex flex-col items-center pt-[100px] pb-[50px]">
      <h1 className="font-bold text-[#00AA00] text-center sm:text-[30px] text-[25px] mb-6">
        Register to reserve your seat
      </h1>
      <Countdown />
    </div>
  );
};

export default EventTimer;
