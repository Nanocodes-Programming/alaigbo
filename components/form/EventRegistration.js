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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { bookingValidation } from '@/lib/validations/user';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { countries } from '@/utils/file';
import { ScrollArea } from '../ui/scroll-area';
import axios from 'axios';
const EventRegistration = () => {
  const [number, setNumber] = useState();
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/api/fetchMember');
      const isMember = data.isOnboarded;

      setNumber(isMember?.number);
      if (!isMember) {
        router.push('/accountType');
      }
    };
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const form = useForm({
    resolver: zodResolver(bookingValidation),
    defaultValues: {
      prefix: 'Mr',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      middleName: '',
      email: user?.emailAddresses[0].emailAddress || '',
      number: number || '',
      location: 'Nigeria',
      accommodation: 'Yes',
      participants: 'Vip',
      guest: 'No',
      reason: '',
      update: 'Yes',
    },
  });
  const onInvalid = (errors) => console.error(errors);
  const onSubmit = async (values) => {
    try {
      const response = await axios.post('/api/book', {
        ...values,
        userId: user?.id,
      });

      toast({
        variant: 'success',
        title: 'Successful',
        description: 'You have Booked this event',
      });
      form.reset();
      router.push('/');
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="prefix"
              className="border-['#DE5000']"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prefix</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500 focus:outline-none ">
                      <SelectTrigger>
                        <SelectValue placeholder="Mr" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { value: 'Mr', label: 'Mr' },
                        { value: 'Mrs', label: 'Mrs' },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>

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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3">
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
                  <FormLabel>Contact Number</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Contact Number"
                      {...field}
                      className="w-full border border-orange-500"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
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
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
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
              name="participants"
              className="border-['#DE5000']"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Participant</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500 focus:outline-none ">
                      <SelectTrigger>
                        <SelectValue placeholder="Vip" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { value: 'Vip', label: 'Vip' },
                        { value: 'Regular', label: 'Regular' },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="accommodation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest in Accommodation/Logistics</FormLabel>
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
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason(s) for coming (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you want to attend this event"
                      className="resize-none border border-orange-500 mt-4"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="guest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Will you have guest with you?</FormLabel>
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
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="update"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Would like to be updated about upcoming events?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="border border-orange-500">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>

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
              Book
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EventRegistration;
