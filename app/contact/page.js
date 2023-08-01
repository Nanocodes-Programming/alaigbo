'use client';

import InputComponent from '@/UI/InputComponent';
import { Button } from '@/components/ui/button';
import { Text, Textarea } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { Loader2, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const maxLength = 500;
  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post('http://localhost:3000/api/auth', {
        username: name,
        email,
        password,
      });
      setUser(data);
      console.log(data);
      return data;
    },
    onError: (err) => {
      return toast({
        title: `${err.message}`,
        description: 'An Error occurred',
        variant: 'destructive',
      });
    },
    onSuccess: () => {
      startTransition(() => {
        logIn();

        router.push('/');
      });
      return toast({
        title: 'Registration successful',
        description: `You have been Registered ${user.username}`,
      });
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col py-32 items-center justify-center">
        <div className="md:w-1/2 w-[95%] mx-auto space-y-3">
          <InputComponent value={name} setValue={setName} label={'Your Name'} />
          <InputComponent
            value={email}
            setValue={setEmail}
            label={'Your Email'}
          />
          <Textarea
            minRows={6}
            maxLength={maxLength}
            label={'Message'}
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            autosize
            styles={{ input: { border: '1px solid #DE5000' } }}
          />
          <div className="text-right">
            <Text>Max {maxLength} words</Text>
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <Button
            disabled={isLoading}
            className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
            onClick={() => mutate()}
          >
            {!isLoading && <Send className="mr-3" />}{' '}
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{' '}
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
