'use client';
import React from 'react';
import Button from '../../UI/Button';
import { motion } from 'framer-motion';
const EventNotification = () => {
  return (
    <div className="min-h-[554px] bg-gradient-to-r from-[#F36C0A] to-[#FF7527]">
      <div className=" py-[100px] flex flex-col items-center w-[95%] md:w-[50%] mx-auto   ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="bg-[#EE0000]  flex flex-col items-center md:self-start text-white relative p-4 mt-4"
        >
          <span className="self-start">18th-19th</span>
          <h3 className="font-bold text-3xl">December</h3>
          <p className="self-end">2023</p>
          <div className="absolute bg-[#EE0000] w-[30px] h-[30px] -bottom-2 translate-x-[-50%] rotate-45 left-1/2" />
        </motion.div>
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="text-black font-bold text-[30px] text-center mt-4 mb-8"
        >
          The Largest Gathering in Alaigbo
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="text-white leading-[1.7] text-center mb-10"
        >
          This assembly is one of a kind. The momentum for the actualization of
          a more progressive Alaigbo will be charted. Make sure you don’t miss
          this, it will surely be a November to remember forever.
        </motion.p>
        <Button
          href="/booking"
          initial={{ scale: 0.9 }}
          whileHover={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          title="Book Your Seat"
          className={'px-2'}
        />
      </div>
    </div>
  );
};

export default EventNotification;
