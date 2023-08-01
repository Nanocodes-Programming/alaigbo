'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const MotionLink = motion(Link);
const Button = ({ className, title, ...props }) => {
  return (
    <MotionLink
      {...props}
      className={`bg-[#00AA00] inline-block rounded-md px-3 text-white py-2 ${className}`}
    >
      {title}
    </MotionLink>
  );
};

export default Button;
