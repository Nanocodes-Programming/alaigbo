'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { Button as ButtonLucid } from '@/components/ui/button';
import NavLinks from './NavLinks';

import { AuthContext } from '@/lib/AuthContext';

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
    title: 'REGISTRATION',
    link: '/register',
  },
  {
    title: 'INVESTOR',
    link: '/',
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
];

const Header = () => {
  let session;
  if (typeof window !== 'undefined' && window.localStorage) {
    session = window.localStorage.getItem('isLoggedIn');
  }
  const isLoggedIn = Boolean(session);
  console.log(isLoggedIn);
  const { logOut } = useContext(AuthContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };
  const MotionLink = motion(Link);
  return (
    <header className=" p-8  bg-black  fixed top-0 left-0 right-0 z-30 ">
      <motion.nav className=" flex items-center justify-between w-[98%] sm:w-[90%] mx-auto ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          className="left text-base md:text-3xl"
        >
          <MotionLink
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.6 }}
            className="text-white"
            href={'/'}
          >
            Alaigbo
          </MotionLink>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          className="right space-x-4 hidden lg:flex items-center self-end"
        >
          <MotionLink className="text-white" href={'/'}>
            Join The Alaigbo Community
          </MotionLink>
          <MotionLink
            href={'/'}
            className="bg-[#00AA00] p-2 rounded-sm text-white"
          >
            INVEST IN ALAIGBO
          </MotionLink>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            className="flex space-x-2 text-white cursor-pointer"
            onClick={handleMenu}
          >
            <h3>Menu</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {menuIsOpen && (
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: -50 }}
              transition={{
                type: 'tween',
                stiffness: 100,
                ease: 'linear',
                duration: 0.5,
              }}
              exit={{ x: 500 }}
              className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-[500px] top-0 -right-14 -translate-x-[50px] bottom-0"
            >
              <FaTimes
                color="white"
                size={25}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setMenuIsOpen(false)}
              />
              {navLinks.map((item, i) => (
                <NavLinks key={i} item={item} setMenuIsOpen={setMenuIsOpen} />
              ))}
              {isLoggedIn && (
                <ButtonLucid
                  onClick={() => {
                    logOut();
                    setMenuIsOpen(false);
                  }}
                  className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
                >
                  Log Out
                </ButtonLucid>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.svg
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 lg:hidden block"
          onClick={() => setMenuMobile(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </motion.svg>
        <AnimatePresence>
          {menuMobile && (
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: -56 }}
              transition={{
                type: 'tween',
                stiffness: 100,
                ease: 'linear',
                duration: 0.5,
              }}
              exit={{ x: 500 }}
              className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-full top-0 -right-14 -translate-x-[50px] bottom-0"
            >
              <FaTimes
                color="white"
                size={25}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setMenuMobile(false)}
              />
              {navLinks.map((item, i) => (
                <NavLinks key={i} item={item} setMenuMobile={setMenuMobile} />
              ))}
              {isLoggedIn && (
                <ButtonLucid
                  onClick={() => {
                    logOut();
                    setMenuMobile(false);
                  }}
                  className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
                >
                  Log Out
                </ButtonLucid>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
