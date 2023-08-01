'use client';
import InputComponent from '@/UI/InputComponent';
import { Button } from '@/components/ui/button';

import { useToast } from '@/components/ui/use-toast';
import { AuthContext } from '@/lib/AuthContext';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { startTransition, useContext, useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();
  const { logIn } = useContext(AuthContext);

  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post('http://localhost:3000/api/auth', {
        username,
        email,
        password,
      });

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
        title: 'Login successful',
        description: 'You have been logged in',
      });
    },
  });

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="sm:w-[50%]  gap-4 w-[95%] grid grid-cols-1">
        <InputComponent
          type="email"
          value={email}
          setValue={setEmail}
          label={'Your Email'}
        />
        <InputComponent
          type="password"
          value={password}
          setValue={setPassword}
          label={'Your Password'}
        />
        <div className="flex justify-center">
          <Button
            disabled={isLoading}
            className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
            onClick={() => mutate()}
          >
            {!isLoading && <LogIn className="mr-3" />}{' '}
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{' '}
            Login
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-8">
          <p>Dont&apos;t have an account?</p>{' '}
          <Link
            href={'/signup'}
            className=" text-blue-600 rounded-md transition hover:text-blue-700 duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
  // return <SignIn />;
};

export default SignInPage;
