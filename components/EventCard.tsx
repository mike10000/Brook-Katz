import Link from 'next/link';
import { formatWpDate } from '@/lib/wordpress';
import type { WPEvent } from '@/lib/wordpress';

interface EventCardProps {
  event: WPEvent;
  linkTo?: string;
  asDiv?: boolean;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export default function EventCard({ event, linkTo, asDiv }: EventCardProps) {
  const excerpt = stripHtml(event.excerpt?.rendered || event.content?.rendered || '').slice(0, 200);
  const date = event.acf?.event_date || event.date;
  const slug = linkTo ?? `/events`;

  const content = (
    <>
      <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
        {formatWpDate(date)}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary-dark transition group-hover:text-primary">
        {event.title?.rendered}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 line-clamp-3">{excerpt}</p>
    </>
  );

  if (asDiv) {
    return (
      <div className="block rounded-xl border border-gray-200 bg-white p-6 shadow-card">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={slug}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      {content}
    </Link>
  );
}
