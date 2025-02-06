'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Event } from '@/lib/events';
import { useState, useEffect } from 'react';
import { Wrapper } from '../common/Wrapper';

interface EventDetailsProps {
  eventData: Event;
}

const eventIcons: Record<string, string> = {
  CRICKET: '/icons/cricket.svg',
  BADMINTON: '/icons/badminton.svg',
  FOOTBALL: '/icons/football.svg',
  CHESS: '/icons/chess.svg',
  TUGOFWAR: '/icons/tow.svg',
  KABADDI: '/icons/kabaddi.svg',
  HANDBALL: '/icons/handball.svg',
  CARROM: '/icons/carrom.svg',
  TENNNIS: '/icons/tt.svg',
};

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="w-32 h-8 bg-gray-300 rounded mb-6" /> {/* Title */}
    <div className="w-[28rem] h-[30rem] bg-gray-300 rounded-lg mb-6" /> {/* Image */}
    <div className="space-y-4">
      <div className="w-48 h-6 bg-gray-300 rounded" /> {/* Registration Fee */}
      <div className="w-40 h-6 bg-gray-300 rounded" /> {/* Date */}
      <div className="w-36 h-6 bg-gray-300 rounded mb-2" /> {/* Coordinators title */}
      <div className="space-y-2">
        <div className="w-52 h-6 bg-gray-300 rounded" />
        <div className="w-52 h-6 bg-gray-300 rounded" />
      </div>
      <div className="w-44 h-6 bg-gray-300 rounded" /> {/* Prize Pool */}
      <div className="w-full h-32 bg-gray-300 rounded mt-4" /> {/* Rules */}
    </div>
    <div className="flex gap-4 mt-8">
      <div className="w-32 h-10 bg-gray-300 rounded" />
      <div className="w-32 h-10 bg-gray-300 rounded" />
    </div>
  </div>
);

export default function EventDetails({ eventData }: EventDetailsProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegister = () => {
    setIsRegistering(true);
    
    setTimeout(() => {
      setIsRegistering(false);
      alert('Registration successful!'); // Replace with your actual registration handling
    }, 1500);
  };

  return (
    <Wrapper>
      <div className="min-h-screen w-full mt-14 text-white flex flex-col items-center py-16 px-4 relative">
        {/* Dynamic SVG Icon */}
        {!isLoading && eventIcons[eventData.name] && (
          <div className="absolute -top-20 left-16 w-[28rem] h-[28rem]">
            <Image 
              src={eventIcons[eventData.name]} 
              alt={eventData.name} 
              width={512} 
              height={256} 
            />
          </div>
        )}

        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <h1 className="text-3xl font-bold font-got mb-6">{eventData.name}</h1>
            
            <div className="relative w-[28rem] h-[30rem] mb-6">
              <Image 
                src={`/images/${eventData.imagePath}.png`} 
                alt={eventData.name} 
                layout="fill"
                className="object-fit rounded-lg" 
              />
            </div>
            
            <div className="space-y-3 font-bold">
              <p className="text-2xl">Registration Fee: {eventData.price}</p>
              <p className="text-2xl">Schedule: {eventData.schedule}</p>
              <h2 className="text-2xl font-semibold mb-3">Coordinators:</h2>
              <ul className="space-y-2 text-xl">
                {eventData.coordinators.map((coordinator, index) => (
                  <li key={index} className="text-gray-300">{coordinator.name} - {coordinator.phone}</li>
                ))}
              </ul>
              <p className="text-3xl">Prize Pool: {eventData.prize}</p>
              <br />
              <p>Rules:</p>
              <p>{eventData.rules}</p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link href="/events">
                <Button variant="outline" className="px-6 text-black">
                  Back to Events
                </Button>
              </Link>
              
              <Button 
                onClick={handleRegister}
                disabled={isRegistering}
                className="px-6 bg-purple-600 hover:bg-purple-700"
              >
                {isRegistering ? 'Registering...' : 'Register Now'}
              </Button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}
