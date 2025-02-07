'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type { FormData, FormProps } from '@/lib/types';
import Link from 'next/link';



const GeneralInformationForm: React.FC<FormProps> = ({ onNext }) => {
  const form = useForm<FormData>({
    defaultValues: {
      orgname: '',
      industry: '',
      revenue: '',
      priorities: '',
      challenges: '',
      importance: '',
      respondentname: '',
      designation: '',
      acceptTerms: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onNext();
  };

  return (
    <Card className="w-full p-0 bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle className='text-[#E7ECF0] font-ubuntu'>General Information</CardTitle>
        <CardDescription className='text-[#B4C4D1]'>
          Please fill in all the required information below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="orgname"
              rules={{ required: 'Organization name' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Organization name" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              rules={{ required: 'Industry' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Industry" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="revenue"
              rules={{ required: 'Revenue' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Revenue" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priorities"
              rules={{ required: 'Key priorities' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Key priorities" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="challenges"
              rules={{ required: 'Key challenges' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Key challenges" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="importance"
              rules={{ required: 'Importance of AI to the organization' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Importance of AI to the organization" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="respondentname"
              rules={{ required: 'Importance of AI to the organization' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name of the respondent" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designation"
              rules={{ required: 'Designation of the respodent' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Designation of the respodent" {...field} className='rounded-input bg-input backdrop-blur-input border border-input-border text-[#E7ECF0] focus:outline-none focus:animate-focus-pulse
    transition-all duration-200'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>

            <FormField
              control={form.control}
              name="acceptTerms"
              rules={{ required: 'You must accept the terms and conditions' }}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start space-y-2">
                  <div className='flex space-x-3'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className='text-[#B4C4D1]'>
                    Please accept our <Link href="/" className='underline'>Terms and conditions</Link>
                    </FormLabel>
                  </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className='bg-gradient1 text-base px-6 py-3 hover:bg-none hover:bg-primary hover:shadow-xl'>NEXT</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GeneralInformationForm;