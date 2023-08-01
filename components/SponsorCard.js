'use client';
import { Image, Text } from '@mantine/core';
import React from 'react';

const SponsorCard = ({ src, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full w-[200px] max-h-[200px]  overflow-hidden">
        <Image
          src={src}
          alt="img"
          width={'100%'}
          height={'100%'}
          className="object-contain"
        />
      </div>
      <Text ta={'center'} fw={'bold'} mt={20}>
        {text}
      </Text>
    </div>
  );
};

export default SponsorCard;
