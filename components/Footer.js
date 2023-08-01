'use client';
import { TextInput } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const socialIcon = [
  {
    link: 'https://twitter.com/AlaIgboYouth',
    Icon: FaTwitter,
  },

  {
    link: 'https://chat.whatsapp.com/FnBEvJrBkL7ARqkSEZTZNc',
    Icon: FaWhatsapp,
  },

  {
    link: 'https://www.instagram.com/AlaIgboYouth',
    Icon: FaInstagram,
  },
];
const MotionLink = motion(Link);
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <motion.footer className="bg-[#0D0C0DE6] px-4 pb-6 ">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 py-8 ">
          <div>
            <div>
              <p className="text-white text-center mb-4">
                STAY CONNECTED VIA EMAIL
              </p>
              <div className="flex lg:space-x-3 flex-col lg:flex-row gap-y-4 justify-center items-center">
                <p className="text-white text-center lg:text-left w-[300px] text-sm ">
                  Be the first to receive progress updates and new offers from
                  ALAIGBO:
                </p>
                <TextInput
                  placeholder="Email Address"
                  className="flex-1"
                  rightSection={
                    <div className="h-full w-[150px] text-white text-sm flex items-center justify-center p-2 bg-[#00AA00] rounded-tr-sm rounded-br-sm cursor-pointer">
                      SUBSCRIBE
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <motion.div className="md:ml-16 flex flex-col items-center ">
            <p className="text-white mb-8">CONNECT WITH US</p>
            <div className="flex space-x-3 items-center">
              {socialIcon.map(({ link, Icon }, i) => (
                <MotionLink
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                  className="inline-block"
                  href={link}
                  key={i}
                  target="_blank"
                >
                  {' '}
                  <Icon color="white" size={25} />{' '}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div className="lg:text-right text-center md:pr-8 mt-4 pb-4">
          <p className="text-xs text-white">
            Copyright © {year}. ALAIGBO All rights reserved Privacy Policy Terms
            & Conditions
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
