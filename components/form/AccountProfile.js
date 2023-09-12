'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { userValidation } from '@/lib/validations/user';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DatePickerInput } from '@mantine/dates';
import { states } from '@/utils/file';
import FileUpload from '../FileUpload';
import { createMember } from '@/lib/actions/user.actions';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { departments } from '@/utils/file';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
const AccountProfile = () => {
  const { toast } = useToast();
  const [error, setError] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const [value, setValue] = useState(null);
  const form = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      imgUrl: '',
      firstName: '',
      lastName: '',
      middleName: '',
      email: user?.emailAddresses[0]?.emailAddress || '',
      number: '',
      state: 'Imo State',
      lga: 'Owerri North',
      town: '',
      placeOfBirth: '',
      village: '',
      familyName: '',
      gender: 'Male',
      interests: '',
      bio: '',
      group: 'Agriculture',
    },
  });
  const onInvalid = (errors) => console.error(errors);
  const onSubmit = async (values) => {
    if (value === null) {
      return setError(true);
    } else {
      setError(false);
    }
    console.log(values.email);

    try {
      await createMember(
        values.firstName,
        values.lastName,
        values.middleName,
        values.state,
        values.lga,
        values.town,
        values.placeOfBirth,
        values.village,
        values.familyName,
        values.gender,
        user?.id,
        values.interests,
        values.bio,
        values.imgUrl,
        value,
        values.email,
        values.number,
        values.group
      );
      console.log(values.group);
      toast({
        variant: 'success',
        title: 'Successful',
        description: 'You have created an account',
      });
      form.reset();
      setValue(null);
      router.push(`/member/${user?.id}`);
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Error ',
        description: 'Something went wrong',
      });
    } finally {
      router.refresh();
    }
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <div className="min-h-screen mt-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Middle Name"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Number"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="group"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500">
                      <SelectTrigger>
                        <SelectValue
                          color="black"
                          placeholder="Choose a group"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <ScrollArea className={'h-[300px]'}>
                        {departments.map((department) => (
                          <SelectItem
                            key={department.value}
                            value={department.value}
                          >
                            {department.label}
                          </SelectItem>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="state"
              className="border-['#DE5000']"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500 focus:outline-none ">
                      <SelectTrigger>
                        <SelectValue placeholder="Imo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <ScrollArea className={'h-[150px]'}>
                        {states.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lga"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LGA</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={!form.getValues('state')}
                  >
                    <FormControl className="border border-orange-500 focus:outline-none ">
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            form.getValues('state')
                              ? 'Select a local government area'
                              : 'Select a state first'
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <ScrollArea className={'h-[300px]'}>
                        {states
                          .find(
                            (state) => state.value === form.getValues('state')
                          )
                          ?.lga.map((lga) => (
                            <SelectItem key={lga.value} value={lga.value}>
                              {lga.label}
                            </SelectItem>
                          ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Town"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="placeOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place of birth</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Place of birth"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="village"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Village</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Village"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="familyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Family Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Family Name"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500">
                      <SelectTrigger>
                        <SelectValue
                          color="black"
                          placeholder="Select a gender"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interests</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Interest"
                      {...field}
                      className="w-full border border-orange-500 "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <>
              <DatePickerInput
                error={error}
                label={'Date of birth'}
                placeholder="Pick date of birth"
                value={value}
                onChange={setValue}
                className="!w-full"
                styles={{
                  wrapper: {
                    border: '1px solid #DE5000',
                    borderRadius: 5,
                    paddingTop: 1,
                    paddingBottom: 1,
                  },
                  input: {
                    border: 'none',
                    outline: 'none',
                  },
                }}
              />
              {error ? (
                <span className="text-red-500">Pick a date of birth</span>
              ) : null}
            </>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none border border-orange-500 mt-4"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <FileUpload
                      endpoint="profileImg"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button
              disabled={isLoading}
              className=" bg-orange-500 w-[400px]"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AccountProfile;
