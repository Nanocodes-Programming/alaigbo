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
const DonateFormModal = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const modal = useDonateModal();
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  const onDonate = async () => {
    setLoading(false);
    console.log(loading);
    try {
      setLoading(true);

      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error ',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
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

        <Button
          disabled={loading}
          className="w-full bg-orange-500"
          type="submit"
          onClick={onDonate}
        >
          Donate
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DonateFormModal;
