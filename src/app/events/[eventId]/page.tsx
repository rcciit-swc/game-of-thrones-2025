import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { events, getEventByName } from '@/lib/events';
import EventDetails from '@/components/events/EventDetails';

export function generateStaticParams() {
  return events.map((event) => ({
    eventId: event.name.toLowerCase(),
  }));
}

export function generateMetadata({ 
  params 
}: { 
  params: { eventId: string } 
}): Metadata {
  const eventData = getEventByName(decodeURIComponent(params.eventId).toUpperCase());
  return {
    title: eventData ? `${eventData.name} - Events` : 'Event Not Found',
    description: eventData ? `Details for ${eventData.name}` : ''
  };
}

export default function EventDetailsPage({ 
  params 
}: { 
  params: { eventId: string } 
}) {
  const eventData = getEventByName(decodeURIComponent(params.eventId).toUpperCase());

  if (!eventData) {
    notFound();
  }

  return <EventDetails eventData={eventData} />;
}

export const dynamicParams = true;