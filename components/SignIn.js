'use client';
import Button from '@/UI/Button';
import { Avatar } from '@mantine/core';
import { getProviders, signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const SignIn = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setPro = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setPro();
  }, []);

  if (session && session.user) {
    return (
      <div className="mt-[100px]">
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container shadow-sm p-4 rounded-md shadow-black mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
          <p className="text-sm max-w-xs mx-auto">
            By continuing, you are setting up a Breadit account and agree to our
            User Agreement and Privacy Policy.
          </p>
        </div>
        <div className="bg-black rounded-md text-white p-2 flex justify-center space-x-3">
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="flex items-center justify-center space-x-4 w-full  text-xl font-semibold"
              >
                <Avatar src="/Vector.png" size={25} mr={5} />
                Google
              </button>
            ))}
        </div>
        <div className="flex space-x-2 items-center">
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&rsquo;t have an account?{' '}
          </p>
          <Button
            href="/signUp"
            className="w-fit text-sm bg-black p-2 px-3 text-white"
            title={'Sign up'}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
