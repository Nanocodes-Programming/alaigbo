'use client';
import SemiHeader from '@/UI/SemiHeader';

import Demo from '@/components/Accordion';
import { Text } from '@mantine/core';
import React from 'react';

const Abstract = () => {
  return (
    <div className="min-h-screen md:py-[100px] py-[80px]">
      <SemiHeader>ABSTRACT</SemiHeader>
      <div className="container w-[98%] md:w-[85%] lg:w-[70%] space-y-32  mx-auto px-4">
        <Demo />

        <div className="mt-16 space-y-8">
          <Text fw={600} fs={'lg'}>
            We sincerely welcome your philanthropic and strategic partnership
            towards the economic, social, and political development of Alaigbo.
            Together, let us shape a brighter future and create lasting impact.
            Join us today and be a catalyst for change.
          </Text>
          <Text fw={600} fs={'lg'}>
            Invest in Alaigbo Youth Forum and seize the boundless possibilities
            that lie ahead.
          </Text>
          <Text>Sincerely, AYF Team</Text>

          <Text fw={700}>OUR MOTTO: Maka Oganiru Ndigbo</Text>
        </div>
      </div>
    </div>
  );
};

export default Abstract;
