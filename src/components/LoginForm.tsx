'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import type { FormData, LoginFormProps } from '@/lib/types';
import CardBlurry from '@/components/ui/card-blurry';



const LoginForm: React.FC<LoginFormProps> = ({ onNext }) => {
  const form = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onNext();
  };

  return (
    <div className='py-32'>
      <CardBlurry className='w-4/12 mx-auto'>
    <Card className="w-full p-0 bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle className='text-[#E7ECF0] font-ubuntu'>Welcome to our platform</CardTitle>
        <CardDescription className='text-[#B4C4D1]'>
          Please login to contine.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
              control={form.control}
              name="email"
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className='bg-gradient1 text-base px-6 py-3 hover:bg-none hover:bg-primary hover:shadow-xl w-full'>Continue</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    </CardBlurry>
    </div>
  );
};

export default LoginForm;