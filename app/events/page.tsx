import type { Metadata } from 'next';
import EventCard from '@/components/EventCard';
import { getEventsWithFallback } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'South Florida vegan events, EarthSave North gatherings, and plant-based community happenings.',
};

export default async function EventsPage() {
  const events = await getEventsWithFallback(50);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">South Florida Events</h1>
      <p className="mt-2 text-lg text-gray-500">
        EarthSave North events in the Tamarac area — featuring plant-based buffets, lectures,
        cooking demos, and community gatherings. Over 20,000 people &quot;eat-educated-entertained&quot;
        ethically at 400+ events since 1996.
      </p>

      <div className="mt-12 space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} linkTo="/events" />
        ))}
      </div>

      <div className="mt-12 rounded-r-xl border-l-4 border-primary bg-gradient-to-r from-emerald-50 to-green-50 p-6">
        <p className="font-medium text-gray-700">
          <strong>Venue for most events:</strong> Tamarac Community Center, Paradise Ballroom —
          8601 W. Commercial Blvd, Tamarac, FL 33351
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Hosted by:</strong> EarthSave North (earthsavemiami.org) with Chef Brook Katz and
          VeganMan
        </p>
      </div>
    </div>
  );
}
