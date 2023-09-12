'use client';
import { Image } from '@mantine/core';
import React from 'react';
const speakers = [
  {
    url: '/speaker.png',
    name: 'Agbara-Okenze Obinna',
    job: 'Senior Cloud Administrator, AWS',
  },
  {
    url: '/speaker-2.png',
    name: 'Sarah Anookwuru',
    job: 'Senior Lead Otta Tech',
  },
  {
    url: '/speaker.png',
    name: 'Jack',
    job: 'MD Rolls & Boyce',
  },
  {
    url: '/speaker-2.png',
    name: 'Lola Ben',
    job: 'CTO and MD, Free to Code',
  },
];
const Speakers = () => {
  return (
    <div className="bg-[#F6FBD6] min-h-[700px] py-[100px]">
      <h1 className="text-[#00AA00] font-bold text-3xl sm:text-4xl text-center mb-8">
        Meet Our Speakers
      </h1>
      <div className="grid items-center place-content-center lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1 justify-center mx-auto w-[95%] md:w-[80%]">
        {speakers.map(({ url, name, job }, i) => (
          <div className="bg-gray-100" key={i}>
            <Image
              src={url}
              alt="img"
              width={'100%'}
              height={'100%'}
              fit="contain"
            />
            <div className="pl-2 pb-2">
              <p className="font-bold mb-2">{name}</p>
              <p className="text-xs font-light">{job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
