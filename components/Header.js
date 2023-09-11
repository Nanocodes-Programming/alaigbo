'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import SideBar from './SideBar';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
const Header = () => {
  const { isSignedIn } = useUser();
  const pathName = usePathname();

  return (
    <header className="   bg-black  fixed top-0 left-0 right-0 z-30 ">
      <nav
        className={cn(
          ' py-6   items-center justify-between w-[90%] md:w-[85%] mx-auto ',
          pathName.includes('sign-up') || pathName.includes('sign-in')
            ? 'hidden'
            : 'flex '
        )}
      >
        <div className="left text-base md:text-3xl">
          <Link className="text-white flex items-center space-x-2" href={'/'}>
            <Avatar className="mr-3">
              <AvatarImage src="/logo.jpg" />
              <AvatarFallback>AYF</AvatarFallback>
            </Avatar>
            Alaigbo Youth Forum
          </Link>
        </div>

        <div className=" space-x-2 flex   items-center">
          <div className="hidden lg:!flex space-x-4 items-center">
            <Link className="text-white " href={'/'}>
              Join The Alaigbo Community
            </Link>
            <Link href={'/'} className="bg-[#00AA00] p-2 rounded-sm text-white">
              INVEST IN ALAIGBO
            </Link>
          </div>
          <SideBar />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href={'/sign-in'}>
              <Button variant="link">Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
