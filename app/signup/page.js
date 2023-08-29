'use client';
import InputComponent from '@/UI/InputComponent';
import PasswordInputComponent from '@/UI/PasswordInputComponent';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { API_URL } from '@/constants/api';
import { AuthContext } from '@/lib/AuthContext';
import { getNextMonth } from '@/utils/expDate';

import { FileInput, Group, Text, Textarea, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { startTransition, useContext, useState } from 'react';

const Login = () => {
  const router = useRouter();
  const { logIn } = useContext(AuthContext);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,}$/;
    return regex.test(password);
  }
  
  // const { mutate } = useMutation({
  //   mutationFn: async () => {
  //     const checkPassword = validatePassword(password);

  //     if (password === confirmPassword) {
  //       if (checkPassword) {
  //         setIsLoading(true)
  //         const { data } = await axios.post(`${API_URL}/api/v1/register/`, {
  //           email,
  //           password,
  //           phone: number
  //         });
  //         setUser(data);
  //         console.log(data);
  //         return data;
  //         return
  //       } else {
  //         setIsLoading(false)
  //         setError('Please choose a strong password')
  //       }
  //     } else {
  //       setIsLoading(false)
  //       setError('Passwords must match')
  //     }
  //   },
  //   onError: (err) => {
  //     console.log(err)
  //     setIsLoading(false)
  //     return toast({
  //       title: `${err.message}`,
  //       description: 'An Error occurred',
  //       variant: 'destructive',
  //     });
  //   },
  //   onSuccess: () => {
  //     startTransition(() => {
  //       setIsLoading(false)
  //       const refreshExp = getNextMonth()

  //       logIn();
  //       localStorage.setItem('access_token', data?.data?.access)
  //       localStorage.setItem('refresh_token', data?.data?.refresh)
  //       localStorage.setItem('user', data?.user)
  //       localStorage.setItem('access_exp', data)
  //       localStorage.setItem('refresh_exp', refreshExp)

  //       router.push('/');
  //     });
  //     return toast({
  //       title: 'Registration successful',
  //       description: `You have been Registered`,
  //     });
  //   },
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const refreshExp = getNextMonth()
    const checkPassword = validatePassword(password);

    if (password === confirmPassword) {
      if (checkPassword) {
        try {
          setIsLoading(true);
          const data = await axios.post(`${API_URL}/api/v1/register/`, {
            email,
            password,
            phone: number
          });
          // console.log(data)
          logIn();
          localStorage.setItem('email', email);
          localStorage.setItem('access_token', data?.data?.tokens?.access)
          localStorage.setItem('refresh_token', data?.data?.tokens?.refresh)
          localStorage.setItem('user', data?.data?.user)
          localStorage.setItem('access_exp', refreshExp)
          localStorage.setItem('refresh_exp', refreshExp)

          setIsLoading(false);
          router.push('/');
          toast({
            title: 'Registration successful',
            description: `You have been Registered`,
          });
        } catch (error) {
          setIsLoading(false);
          if (error?.response?.status === 400) {
            toast({
              title: ``,
              description: 'A user with this email already exists',
              variant: 'destructive',
            });
          } else if (error?.response?.status === 500) {
            toast({
              title: `Network error`,
              description: 'Try again later',
              variant: 'destructive',
            });
          } else {
            toast({
              title: `Network error`,
              description: 'Try again later',
              variant: 'destructive',
            });
          }
          // console.log(error);
        }
      } else {
        setIsLoading(false);
        toast({
          title: ``,
          description: 'Please choose a strong password',
          variant: 'destructive',
        });
      }
    } else {
      setIsLoading(false);
      toast({
        title: ``,
        description: 'Passwords must match',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen pt-[120px] pb-[100px]">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <Title order={1} mb={30} ta={'center'}>
          Member Registration
        </Title>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
            <InputComponent
              value={email}
              setValue={setEmail}
              label={'Email address'}
              type={'email'}
              required={true}
            />
            <InputComponent
              value={number}
              setValue={setNumber}
              label={'Contact number'}
              required={true}
            />
            <PasswordInputComponent
              value={password}
              setValue={setPassword}
              label={'Password'}
              type={'password'}
              required={true}
              description={"Password must include at least one letter, number and special character"}
              placeholder={'Password'}
            />
            <PasswordInputComponent
              value={confirmPassword}
              setValue={setConfirmPassword}
              label={'Confirm Password'}
              type={'password'}
              required={true}
              placeholder={'Repeat your password'}
              description={"Confirm password must be th same as password"}
            />
            {/* <InputComponent
              value={password}
              setValue={setPassword}
              label={'Password'}
              type={'password'}
              required={true}
            />
            <InputComponent
              value={confirmPassword}
              setValue={setConfirmPassword}
              label={'Confirm Password'}
              type={'password'}
              required={true}
            /> */}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-8">
          </div>
          <div className="flex justify-center">
            <Button
              disabled={isLoading}
              className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
              // onClick={() => mutate()}
              type="submit"
            >
              {!isLoading && <LogIn className="mr-3" />}{' '}
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{' '}
              Sign up
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center  mt-8">
          <p className="mr-2">Already have an account?</p>{' '}
          <Link
            href={'/signIn'}
            className=" text-blue-600 rounded-md transition hover:text-blue-700 duration-300"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
