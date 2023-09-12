'use client';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const AccountType = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [type, setType] = useState('investor');

  if (!mounted) return null;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Dialog open>
        <DialogContent className="space-y-3">
          <DialogHeader
            onClick={() => setType('investor')}
            className={cn(
              'p-4 border  rounded-md',
              type === 'investor' ? 'border-[#DE5000]' : 'border-black'
            )}
          >
            <DialogTitle className="!justify-start space-x-2 flex items-center">
              {type === 'investor' ? (
                <CheckCircle size={15} className="mr-1 text-[#DE5000]" />
              ) : (
                <Circle size={15} className="mr-1" />
              )}
              Investor
            </DialogTitle>
            <DialogDescription>
              Users with an account for the sole purpose of investing in the
              vision of alaigbo .
            </DialogDescription>
          </DialogHeader>
          <DialogHeader
            onClick={() => setType('member')}
            className={cn(
              'p-4 border  rounded-md',
              type === 'member' ? 'border-[#DE5000]' : 'border-black'
            )}
          >
            <DialogTitle className="!justify-start space-x-2 flex items-center">
              {type === 'member' ? (
                <CheckCircle size={15} className="mr-1 text-[#DE5000]" />
              ) : (
                <Circle size={15} className="mr-1" />
              )}
              Member
            </DialogTitle>
            <DialogDescription>
              User with an account for innovative functions to contribute skills
              and expertise in the development of Alaigbo.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className={'w-full'}>
            <Link href={`/${type}`} className="w-full">
              <Button className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300 !w-full">
                Next
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountType;
