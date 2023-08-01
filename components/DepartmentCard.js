'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const MotionLink = motion(Link);
const DepartmentCard = ({ item }) => {
  return (
    <MotionLink
      href={`/department/${item.id}`}
      initial={{ scale: 0.9, backgroundColor: '#FFFFFF' }}
      whileHover={{
        backgroundColor: [
          '#121212',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(252,176,69,1)',
          'rgba(131,58,180,1)',
          '#121212',
        ],
        scale: 1,
        transition: { duration: 1, repeat: Infinity },
      }}
      className="bg-white h-[200px] rounded-sm flex items-center justify-center font-bold cursor-pointer"
    >
      {item.department}
    </MotionLink>
  );
};

export default DepartmentCard;
