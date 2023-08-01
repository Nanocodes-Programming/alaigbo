'use client';
import InputComponent from '@/UI/InputComponent';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { AuthContext } from '@/lib/AuthContext';

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
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState(null);
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [town, setTown] = useState('');
  const [family, setFamily] = useState('');
  const [place, setPlace] = useState('');
  const [village, setVillage] = useState('');
  const [gender, setGender] = useState('');
  const [interest, setInterest] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);
  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post('http://localhost:3000/api/auth', {
        username: firstName,
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
    <div className="min-h-screen pt-[120px] pb-[100px]">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <Title order={1} mb={30} ta={'center'}>
          Member Registration
        </Title>
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 grid-cols-1  gap-4 mb-8">
            <InputComponent
              value={firstName}
              setValue={setFirstName}
              label={'First name'}
            />
            <InputComponent
              value={middleName}
              setValue={setMiddleName}
              label={'Middle name'}
            />
            <InputComponent
              value={lastName}
              setValue={setLastName}
              label={'Last name'}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
            <InputComponent
              value={email}
              setValue={setEmail}
              label={'Email address'}
              type={'email'}
            />
            <InputComponent
              value={password}
              setValue={setPassword}
              label={'Password'}
              type={'password'}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-8">
            <InputComponent
              value={number}
              setValue={setNumber}
              label={'Contact number'}
            />
            <DatePickerInput
              label="Date of birth"
              value={date}
              onChange={setDate}
              styles={{ input: { border: '1px solid #DE5000' } }}
              allowDeselect
            />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <InputComponent
              setValue={setState}
              value={state}
              label={'State Of Origin'}
            />
            <InputComponent setValue={setLga} value={lga} label={'LGA'} />
            <InputComponent setValue={setTown} value={town} label={'Town'} />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <InputComponent
              setValue={setPlace}
              value={place}
              label={'Place Of Birth'}
            />
            <InputComponent
              setValue={setVillage}
              value={village}
              label={'Village'}
            />
            <InputComponent
              setValue={setFamily}
              value={family}
              label={'Family Name'}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <InputComponent
              setValue={setGender}
              value={gender}
              label={'Gender'}
            />
            <InputComponent
              setValue={setInterest}
              value={interest}
              label={'Interest'}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <Textarea
              label="Short Bio about yourself"
              autosize
              minRows={4}
              value={bio}
              onChange={(event) => setBio(event.currentTarget.value)}
              styles={{ input: { border: '1px solid #DE5000' } }}
            />
            <Dropzone
              onDrop={(files) => setImage(files[0])}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ pointerEvents: 'none' }}
              >
                <Dropzone.Accept>
                  <IconUpload size="3.2rem" stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX size="3.2rem" stroke={1.5} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drag your image here or click to select files
                  </Text>
                  <Text size="sm" color="dimmed" inline mt={7}>
                    Attach your profile image, it should not exceed 5mb
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <div className="flex justify-center">
            <Button
              disabled={isLoading}
              className="bg-[#DE5000] hover:bg-[#a4460f] transition duration-300"
              onClick={() => mutate()}
            >
              {!isLoading && <LogIn className="mr-3" />}{' '}
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{' '}
              Sign up
            </Button>
          </div>
        </div>
        <div className="flex items-center  mt-8">
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
