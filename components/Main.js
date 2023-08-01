'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { Text, Title } from '@mantine/core';
import DemoTwo from './SecondAccordion';
import { texts, writeUp } from '@/dummyText';

const Main = () => {
  const MotionLink = motion(Link);
  return (
    <div className="bg-[#FEFEFE] min-h-screen py-[100px] px-4">
      <h1 className="text-center text-3xl  md:text-5xl font-bold text-[#F37435] mb-16">
        WHY CHOOSE <span className="text-[#00AA00]">ALAIGBO</span>
      </h1>
      {/* <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-y-8 container mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="border border-black rounded-md md:h-[320px]  h-[200px]"
        ></motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <h2 className="font-bold text-center mb-4 text-3xl">Human Capital</h2>
          <div className="text-center">
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="border border-black rounded-md md:h-[320px] h-[200px]"
        ></motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <h2 className="font-bold text-center mb-4 text-3xl">INVESTMENT</h2>
          <div className="text-center">
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
          </div>
        </motion.div>
      </div> */}
      <div>
        <div className="md:w-[70%] w-[95%] mx-auto">
          <Title order={2} ta={'center'} mb={20}>
            Introduction{' '}
          </Title>
          <Text fz={'md'} fw={'500'} fs={'italic'} ta={'center'}>
            At Alaigbo Youth Forum, we recognize that our most valuable asset is
            our people. With a rich pool of talented individuals, we are
            committed to harnessing the potential of our human capital to propel
            sustainable development, foster innovation, and drive social
            progress across our region.
          </Text>
          <div className="mt-8 mb-16">
            <DemoTwo data={texts} />
          </div>
          <Title mt={30} order={2} ta={'center'} mb={20}>
            Invest in Alaigbo: Unlocking Opportunities for Growth and Returns
          </Title>
          <Text mb={20} fz={'md'} fw={'500'} fs={'italic'}>
            Discover the investment potential of Alaigbo, a region rich in
            resources, talent, and business opportunities. Explore the key
            sectors, incentives, and strategic advantages that make Alaigbo an
            attractive investment destination.
          </Text>
          <Title order={2} mt={50} ta={'left'} mb={20}>
            Introduction:
          </Title>
          <Text fz={'md'} fw={'500'} fs={'italic'}>
            Welcome to Alaigbo, a land of abundant opportunities for investors
            seeking high returns and sustainable growth. With a diverse range of
            sectors poised for development, strategic advantages, and a
            supportive business environment, Alaigbo offers a fertile ground for
            investment. Join us as we explore the promising investment landscape
            that awaits you.
          </Text>
          <div className="my-8">
            <DemoTwo data={writeUp} />
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <Button
          initial={{ scale: 0.9 }}
          whileHover={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          href={'/'}
          className="bg-[#00AA00] inline-block rounded-md px-8 text-white py-3"
          title="INVEST"
        />
      </div>
    </div>
  );
};

export default Main;
