import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Brook's Books",
  description: 'Vegan cookbooks and publications by Brook Katz.',
};

type BookEntry = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  coverSrc?: string;
  coverAlt?: string;
};

const books: BookEntry[] = [
  {
    title: 'New Favorites',
    subtitle: 'Classic International Cuisine — by Brook Katz',
    description:
      "Brook's signature cookbook featuring redesigned classic international dishes for your health. From everyday meals to holiday feasts, with a foreword by Dr. Michael Klaper.",
    gradient: 'from-primary to-primary-dark',
    coverSrc: '/images/books/new-favorites-cover.png',
    coverAlt:
      'Book cover: New Favorites — Classic International Cuisine by Brook Katz, foreword by Michael Klaper, M.D.',
  },
  {
    title: 'Vegan Power',
    subtitle: 'by Brook Katz',
    description:
      'Bold plant-based cooking from Brook — high-energy recipes and messaging that match the vibrant Vegan Power spirit he brings to events and teaching.',
    gradient: 'from-zinc-800 to-black',
    coverSrc: '/images/books/vegan-power-cover.png',
    coverAlt:
      'Book cover: Vegan Power by Brook Katz — gold Vegan POWER type and fruit and vegetable graphic on black',
  },
  {
    title: 'Vegan Cooking Videos',
    subtitle: 'by Brook Katz',
    description:
      "Brook has produced a series of cooking videos demonstrating his plant-based techniques. These visual guides make it easy to follow along and recreate his signature dishes at home.",
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    title: 'Additional Publications',
    subtitle: 'by Brook Katz',
    description:
      "Brook has authored several cookbooks throughout his career, each focused on making vegan cooking accessible, delicious, and health-focused. All proceeds support his mission of free community vegan education.",
    gradient: 'from-green-500 to-green-700',
  },
];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">Brook&apos;s Books</h1>
      <p className="mt-2 text-lg text-gray-500">
        Cookbooks and publications by Brook Katz — plant-based recipes and wisdom from decades of
        vegan cooking.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.title}
            className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-card"
          >
            <div className="mx-auto mb-6 w-40">
              {book.coverSrc && book.coverAlt ? (
                <div className="relative aspect-[522/522] w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
                  <Image
                    src={book.coverSrc}
                    alt={book.coverAlt}
                    width={522}
                    height={522}
                    className="h-full w-full object-cover"
                    sizes="160px"
                    priority={book.title === 'New Favorites'}
                  />
                </div>
              ) : (
                <div
                  className={`flex h-56 flex-col items-center justify-center rounded-lg bg-gradient-to-br ${book.gradient} p-4 text-center text-white`}
                >
                  <span className="text-lg font-semibold leading-tight">{book.title}</span>
                  <small className="mt-1 opacity-70">{book.subtitle}</small>
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold text-primary-dark">{book.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{book.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-r-xl border-l-4 border-primary bg-gradient-to-r from-emerald-50 to-green-50 p-6">
        <p className="font-medium text-gray-700">
          <strong>Recommended reading from Brook&apos;s mentors:</strong>
        </p>
        <ul className="mt-2 list-disc pl-6 text-gray-600">
          <li>
            <em>How Not to Die</em> by Dr. Michael Greger
          </li>
          <li>
            <em>How Not to Diet</em> by Dr. Michael Greger
          </li>
          <li>Works by Dr. Michael Klaper on plant-based nutrition and healing</li>
        </ul>
      </div>
    </div>
  );
}
