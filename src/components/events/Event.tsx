'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Heading } from '../common';
import EventCard from '@/components/events/EventCard';
import { events } from '@/lib/events';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function EventPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const formatSchedule = (schedule: string) => {
    const [dates, month] = schedule.split(' ');
    return { dates, month };
  };

  return (
    <div className="min-h-screen w-full bg-transparent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <Heading text="EVENTS" />
        <motion.div 
          ref={ref} 
          initial="hidden" 
          animate={controls} 
          variants={containerVariants} 
          className="flex flex-wrap justify-center gap-28"
        >
          {events.map((event) => {
            const { dates, month } = formatSchedule(event.schedule);
            return (
              <motion.div key={event.name} variants={cardVariants}>
                <Link href={`/events/${encodeURIComponent(event.name.toLowerCase())}`}>
                  <EventCard 
                    title={event.name}
                    subtitle={event.description}
                    dates={dates}
                    month={month}
                    imageId={event.imagePath}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}