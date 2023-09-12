'use client';

import { Button } from '@mantine/core';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CloseModal = ({}) => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <X aria-label="close modal" className="h-4 w-4" color="black" />
    </Button>
  );
};

export default CloseModal;
