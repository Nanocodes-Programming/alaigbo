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
import { investorValidation } from '@/lib/validations/user';
import { Textarea } from '@/components/ui/textarea';
import FileUpload from '../FileUpload';
import { createInvestor } from '@/lib/actions/user.actions';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
const InvestorProfile = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(investorValidation),
    defaultValues: {
      companyName: '',
      number: '',
      representativeName: '',
      email: '',
      industry: '',
      investmentPreference: '',
      investmentExperience: '',
      accreditation: '',
    },
  });
  const onInvalid = (errors) => console.log(errors);
  const onSubmit = async (values) => {
    try {
      const response = await axios.post('/api/createInvestor', values);

      console.log(response);

      toast({
        variant: 'success',
        title: 'Successful',
        description: 'You have created an account ',
      });
      if (response.status === '200') {
        form.reset();
        router.push('/');
      }
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
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Company Name"
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
                  <FormLabel>Number</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Contact number"
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
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Industry name"
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
              name="representativeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Representative name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Representative Name"
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
              name="investmentExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Experience (optional)</FormLabel>

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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="investmentPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Preference (optional)</FormLabel>

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
              name="accreditation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accreditation</FormLabel>
                  <FormControl>
                    <FileUpload
                      endpoint="fileImg"
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

export default InvestorProfile;
