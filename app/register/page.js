'use client';
import InputComponent from '@/UI/InputComponent';
import SelectComponent from '@/UI/SelectComponent';
import { Button, Textarea, em } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [prefix, setPrefix] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [accommodation, setAccommodation] = useState('Yes');
  const [participant, setParticipant] = useState('Regular');
  const [guest, setGuest] = useState('Yes');
  const [reason, setReason] = useState('');
  const [update, setUpdate] = useState('Yes');
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(prefix, firstName, lastName);
  useEffect(() => {
    if (
      prefix === '' ||
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      number === '' ||
      location === '' ||
      accommodation === '' ||
      participant === '' ||
      guest === '' ||
      reason === '' ||
      update === ''
    ) {
      return setDisable(true);
    }
  }, [
    prefix,
    firstName,
    lastName,
    email,
    number,
    location,
    accommodation,
    participant,
    guest,
    reason,
    update,
  ]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      prefix === '' ||
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      number === '' ||
      location === '' ||
      accommodation === '' ||
      participant === '' ||
      guest === '' ||
      update === ''
    ) {
      return alert('Fill all required fields');
    }

    console.log(
      prefix,
      firstName,
      lastName,
      email,
      number,
      location,
      accommodation,
      participant,
      guest,
      reason,
      update
    );
  };

  let session;
  if (typeof window !== 'undefined' && window.localStorage) {
    session = window.localStorage.getItem('isLoggedIn');
  }
  const isLoggedIn = Boolean(session);
  console.log(isLoggedIn);
  useEffect(() => {
    if (!session) {
      router.replace('/');
    }
  }, [session, router]);
  return (
    <div className="min-h-screen pb-[100px] bg-[#D9D9D9]">
      <div className="bg-[#DE5000] py-[130px] min-h-[368px] px-4">
        <h1 className="font-bold text-white text-center mb-6 text-3xl">
          Event Registration Form
        </h1>
        <p className="font-bold text-center ">
          Register on or before November 10 2023
        </p>
      </div>
      <div className=" min-h-screen pt-[100px] md:w-[70%] px-4 mx-auto">
        <h2 className="font-bold mb-4 text-2xl"> Attendee Information</h2>
        <p className="font-bold mb-4">
          Please fill names and contact information of attendees.
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <p>Your Name</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <SelectComponent
              data={[
                { value: 'Mr', label: 'Mr' },
                { value: 'Mrs', label: 'Mrs' },
              ]}
              label="Prefix"
              value={prefix}
              setValue={setPrefix}
            />
            <InputComponent
              value={firstName}
              setValue={setFirstName}
              label={'First name'}
            />
            <InputComponent
              value={lastName}
              setValue={setLastName}
              label={'Last name'}
            />
          </div>
          <div className="grid mt-16 md:grid-cols-2 grid-cols-1 gap-4">
            <InputComponent
              label="Email Address"
              value={email}
              setValue={setEmail}
              type={'email'}
            />
            <InputComponent
              label={'Contact Number'}
              value={number}
              setValue={setNumber}
            />
            <InputComponent
              label={'Present Location'}
              value={location}
              setValue={setLocation}
            />
            <SelectComponent
              label={'Participant'}
              value={participant}
              setValue={setParticipant}
              data={[
                { value: 'VVIP', label: 'VVIP' },
                { value: 'VIP', label: 'VIP' },
                { value: 'Not VIP', label: 'Regular' },
              ]}
            />
            <SelectComponent
              label={'Interest in Accommodation/Logistics '}
              setValue={setAccommodation}
              value={accommodation}
              data={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
            <Textarea
              label={'Reason(s) for coming (optional)'}
              value={reason}
              onChange={(event) => setReason(event.currentTarget.value)}
              minRows={5}
              styles={{ input: { border: '1px solid #DE5000' } }}
            />
          </div>
          <div className="md:w-[50%] space-y-4 mt-8">
            <SelectComponent
              label={'Will you have a guest with you?'}
              value={guest}
              setValue={setGuest}
              data={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
            <SelectComponent
              label={'Would you like to be updated about the upcoming events?'}
              value={update}
              setValue={setUpdate}
              data={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </div>
          <div className="flex justify-center mt-7">
            <Button
              color="green"
              disable={disable}
              className="bg-[#00AA00]"
              loading={loading}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
