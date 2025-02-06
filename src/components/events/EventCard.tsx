'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import styles from './EventCard.module.css';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  subtitle: string;
  dates: string;
  month: string;
  imageId: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  dates,
  month,
  imageId,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Card
      className={`${styles.card} bg-black/40 w-[300px] h-[400px] flex-shrink-0 backdrop-blur-sm border-none overflow-hidden group transition-transform duration-300 cursor-pointer`}
      onTouchStart={() => setIsActive(!isActive)}
    >
      <div className={`${styles.cardContent} relative h-full w-full`}>
        <div 
          className={`${styles.cardBackground} absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(/images/${imageId}.png)` }}
        />
        <div className={`${styles.content} ${isActive ? styles.active : ''} absolute inset-0 p-6 pb-14 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent`}>
          <h2 className="text-white text-xl font-sargento mb-2">{title}</h2>
          <p className="text-gray-300 text-sm">{subtitle}</p>
          <p className="text-gray-400 text-xs">{dates} {month}</p>
          <div className="mt-4 px-6 py-2 bg-purple-600 text-white font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-purple-700">
            View Details
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;