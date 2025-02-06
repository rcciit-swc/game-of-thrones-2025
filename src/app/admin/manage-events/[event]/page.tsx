'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import 'react-quill/dist/quill.snow.css';
import { BasicInformation } from '../components';
import { ScheduleAndDescription } from '../components';
import { RulesAndGuidelines } from '../components';
import { LinksAndCoordinators } from '../components';

const formSchema = z.object({
  name: z.string().min(2, 'Event name must be at least 2 characters'),
  price: z.string(),
  prize: z.string(),
  imagePath: z.string().url('Please enter a valid image URL'),
  minTeamSize: z.number().min(1),
  maxTeamSize: z.number().min(1),
  schedule: z.string(),
  description: z.string(),
  rules: z.string(),
  coordinators: z.array(
    z.object({
      name: z.string(),
      email: z.string().email(),
    })
  ),
  links: z.array(
    z.object({
      title: z.string(),
      url: z.string().url(),
    })
  ),
});

export default function AddEventPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: '',
      prize: '',
      imagePath: '',
      minTeamSize: 1,
      maxTeamSize: 1,
      schedule: '',
      description: '',
      rules: '',
      coordinators: [],
      links: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Event added successfully');
      router.push('/manage-events');
    } catch (error) {
      toast.error('Failed to add event');
    }
  }

  return (
    <div className="container max-w-7xl py-8 min-h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-sargento text-white">
                Edit Event
              </h1>
              <p className="text-sm text-muted-foreground mt-1 text-gray-300">
                Edit event by filling out the details below.
              </p>
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#a383e6] via-[#9158FF] to-[#9158FF] hover:opacity-90 transition-opacity"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Edit Event
            </Button>
          </div>

          <BasicInformation form={form} />
          <ScheduleAndDescription form={form} />
          <RulesAndGuidelines form={form} />
          {/* commenting this for now will uncomment when i will write code for edit event */}
          {/* <LinksAndCoordinators /> */}
        </form>
      </Form>
    </div>
  );
}
