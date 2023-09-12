'use client';
import React, { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { useDonateModal } from '@/hooks/modal';
import { useToast } from '../ui/use-toast';
import axios from 'axios';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useUser } from '@clerk/nextjs';
import { Input } from '../ui/input';

const key = process.env.PUBLIC_KEY;
const DonateFormModal = () => {
  const [amount, setAmount] = useState('');
  const { user } = useUser();
  const config = {
    public_key: 'FLWPUBK_TEST-ff992f1bcd7d42f54d58fb95e579e908-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: user?.emailAddresses[0]?.emailAddress || '',

      name: `${user?.firstName} ${user?.lastName}`,
    },
    customizations: {
      title: 'Donation',
      description: 'Donate to support the Alaigbo Youth Summit',
      logo: '/logo.jpg',
    },
  };
  const fwConfig = {
    ...config,

    text: 'Pay with Flutterwave!',
    callback: (response) => {
      if (response.status === 'completed') {
        toast({
          variant: 'success',
          title: 'Success',
          description: 'Thank you for your donation',
        });
        setAmount('');
      } else {
        toast({
          variant: 'destructive',
          title: 'Error ',
          description: 'Something went wrong',
        });
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const modal = useDonateModal();
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  if (!mounted) return null;
  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Donate</DialogTitle>
          <DialogDescription>
            Your donation is needed to support our upcoming summit
          </DialogDescription>
        </DialogHeader>
        <Input
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Please enter an amount in naira"
          className="border border-orange-500 focus:outline-none"
        />

        <FlutterWaveButton {...fwConfig} />
      </DialogContent>
    </Dialog>
  );
};

export default DonateFormModal;
