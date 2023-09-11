'use client';
import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { currentUser, useUser } from '@clerk/nextjs';
import { fetchUserMember } from '@/lib/actions/user.actions';

const Links = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState('');
  const getUserId = async () => {
    const isMember = await fetchUserMember(user?.id);
    setUserId(isMember?.userId);
  };
  useEffect(() => {
    getUserId();
  }, []);

  const navLinks = [
    {
      title: 'ABSTRACT',
      link: '/abstract',
    },

    {
      title: 'EVENTS',
      link: '/event',
    },
    {
      title: 'SUMMIT BOOKING',
      link: '/booking',
    },
    {
      title: 'MEMBER REGISTRATION',
      link: '/member',
    },
    {
      title: 'INVESTOR REGISTRATION',
      link: '/investor',
    },
    {
      title: 'PROJECT',
      link: '/',
    },
    {
      title: 'DEPARTMENTS',
      link: '/department',
    },
    {
      title: 'CONTACT',
      link: '/contact',
    },
    {
      title: 'PROFILE',
      link: `/member/${userId}`,
    },
  ];
  return (
    <div className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-full top-0 -right-14 -translate-x-[50px] bottom-0">
      {navLinks.map((item, i) => (
        <NavLinks key={i} item={item} />
      ))}
    </div>
  );
};

export default Links;
