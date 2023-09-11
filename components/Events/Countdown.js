'use client';
import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import { motion } from 'framer-motion';

const Countdown = () => {
  const countDate = new Date('December 18, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  useEffect(() => {
    const countDown = () => {
      const seconds = 1000;
      const minute = seconds * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const eventDay = Math.floor(gap / day);
      const eventHour = Math.floor((gap % day) / hour);
      const eventMinute = Math.floor((gap % hour) / minute);
      const eventSecond = Math.floor((gap % minute) / seconds);

      setDays(eventDay);
      setHours(eventHour);
      setMinutes(eventMinute);
      setSeconds(eventSecond);
    };
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval);
  }, [gap]);

  useEffect(() => {
    if (gap === 0) {
      setTimeOver(true);
    }
  }, [gap]);

  const timer = [
    {
      time: days,
      days: 'Days',
    },
    {
      time: hours,
      days: 'Hours',
    },
    {
      time: minutes,
      days: 'Minutes',
    },
    {
      time: seconds,
      days: 'Seconds',
    },
  ];
  return (
    <>
      <div className="flex items-center space-x-5">
        {timeOver ? (
          <h1 className="text-white text-center text-2xl mb-5">
            REGISTRATION IS OVER
          </h1>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timer.map(({ time, days }) => (
              <motion.div
                initial={{ scale: 0, rotate: 720, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, stiffness: 100, type: 'spring' }}
                key={days}
                className="bg-[#F36C0A] p-4 mb-5 px-6  rounded-sm text-center"
              >
                <p className="font-bold text-3xl text-white">{time}</p>
                <span className="font-bold text-xs text-white">{days}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {!timeOver && (
        <Button
          initial={{ scale: 0.9 }}
          whileHover={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          href={'/booking'}
          className="bg-[#00AA00] inline-block rounded-md px-8 text-white py-3"
          title="Book Your Seat"
        />
      )}
    </>
  );
};

export default Countdown;
