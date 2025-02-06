import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export function BasicInformation({ form }: { form: any }) {
  return (
    <Card className="transition-transform hover:shadow-lg hover:shadow-[#9158FF]/20 bg-[#2a3142] border-none">
      <CardHeader>
        <CardTitle className="text-white">Basic Information</CardTitle>
        <CardDescription className="text-gray-400">
          Enter the core details about your event.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Event Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter event name"
                    {...field}
                    className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Registration Fee
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2">₹</span>
                    <Input
                      className="pl-7 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                      placeholder="0.00"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="prize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Prize Pool</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2">₹</span>
                    <Input
                      className="pl-7 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                      placeholder="0.00"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imagePath"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Cover Image URL</FormLabel>
                <FormControl>
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                      placeholder="https://"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="minTeamSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Minimum Team Size
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...form.register("minTeamSize", { valueAsNumber: true })}
                    className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxTeamSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Maximum Team Size
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...form.register("maxTeamSize", { valueAsNumber: true })}
                    className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
