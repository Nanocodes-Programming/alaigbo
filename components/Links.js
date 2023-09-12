'use client';
import NavLinks from './NavLinks';
import { useUser } from '@clerk/nextjs';

const Links = () => {
  const { user } = useUser();

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
      link: `/member/${user?.id}`,
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
