import type { Metadata } from 'next';
import Image from 'next/image';
import BrookPhotoGallery from '@/components/BrookPhotoGallery';
import { brookPhotos } from '@/lib/brookPhotos';

export const metadata: Metadata = {
  title: 'About Brook',
  description: 'Brook Katz – Healer, Teacher, Vegan Chef in South Florida. Bio and background.',
};

export default function BioPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">About Brook Katz</h1>
      <p className="mt-2 text-lg font-medium text-primary">
        Healer &bull; Teacher &bull; Vegan Chef &bull; South Florida
      </p>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="relative mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-2xl border border-gray-200 shadow-md md:mx-0 md:w-56">
          <div className="relative aspect-[3/4] w-full bg-gray-100">
            <Image
              src="/images/brook/brook-formal-hsus.png"
              alt="Brook Katz in a dark suit at a Humane Society of the United States event in Miami"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 280px, 224px"
              priority
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="rounded-r-xl border-l-4 border-primary bg-gradient-to-r from-emerald-50 to-green-50 p-6">
            <p className="leading-relaxed text-gray-700">
              Brook Katz has dedicated his life to the sciences and maintains a logic-and-reason
              approach to life. He has training in emergency medicine and holistic medicines. Brook
              uses food as a healing tool and has become a gourmet chef in order to get the messages
              across.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-gray-700">
        He authored several cookbooks including <em>New Favorites</em> and made videos. Brook feeds
        vegan food to thousands of people every year absolutely free-of-charge because he feels
        it&apos;s one of the best and most dramatic ways of convincing people to listen to the rest
        of the truths.
      </p>

      <p className="mt-6 leading-relaxed text-gray-700">
        Brook is grateful for the knowledge — and scientific data — provided by his mentors,{' '}
        <strong>Dr. Michael Klaper</strong> and <strong>Dr. Michael Greger</strong>. Through their
        guidance and his own dedication to plant-based nutrition, Brook has built a career around
        helping others discover the power of whole-food, vegan eating.
      </p>

      <h2 className="font-display mt-10 text-2xl font-bold text-primary-dark">
        Sample Talks &amp; Topics
      </h2>
      <ul className="mt-4 space-y-2 pl-6 text-gray-600">
        <li>
          <strong>Whole Foods as Medicine</strong> — How plant-based nutrition can heal and prevent
          disease
        </li>
        <li>
          <strong>Tips from a Thirty-Year Vegan</strong> — Practical wisdom from decades of
          plant-based living
        </li>
        <li>
          <strong>Preparing Vegan Cuisine for Friends or Family</strong> — Making vegan food
          approachable for everyone
        </li>
        <li>
          <strong>The Science of Being Vegan</strong> — Evidence-based benefits of a plant-based
          diet
        </li>
      </ul>

      <h2 className="font-display mt-10 text-2xl font-bold text-primary-dark">
        Community Involvement
      </h2>
      <p className="mt-4 leading-relaxed text-gray-700">
        Brook is deeply involved in the South Florida vegan community, particularly through{' '}
        <strong>EarthSave North</strong>. He regularly creates menus and cooks for free monthly
        community events in the Tamarac area, where over 20,000 people have been
        &quot;eat-educated-entertained&quot; ethically across more than 400 events since 1996.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700">
        These events feature plant-based buffets, lectures from health experts, cooking
        demonstrations, movie nights, and seasonal celebrations — all designed to make veganism fun,
        accessible, and stress-free.
      </p>

      <h2 className="font-display mt-10 text-2xl font-bold text-primary-dark">Philosophy</h2>
      <p className="mt-4 leading-relaxed text-gray-700">
        Through proper lifestyle choices and sensible ingredients, optimum nutritional health is
        available to everyone. Brook believes that delicious food is the most powerful tool for
        opening minds to the benefits of a plant-based lifestyle. By feeding people first and
        educating second, he has been able to change hearts and minds across South Florida for
        decades.
      </p>

      <h2 className="font-display mt-12 text-2xl font-bold text-primary-dark">Photos</h2>
      <p className="mt-3 text-gray-600">
        Community events, cooking, travel, and family — snapshots from Brook&apos;s life and work.
      </p>
      <div className="mt-6">
        <BrookPhotoGallery
          photos={brookPhotos.filter((p) => p.src !== '/images/brook/brook-formal-hsus.png')}
        />
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary-dark">Get in Touch</h3>
        <p className="mt-2">
          <strong>Phone:</strong>{' '}
          <a href="tel:954-971-4432" className="text-primary hover:text-accent">
            954-971-4432
          </a>
        </p>
        <p className="mt-1">
          <strong>Email:</strong>{' '}
          <a href="mailto:brookkatz@hotmail.com" className="text-primary hover:text-accent">
            brookkatz@hotmail.com
          </a>
        </p>
        <p className="mt-1">
          <strong>Position:</strong> Recipes &amp; Philosophy — American Vegan Society
        </p>
      </div>
    </div>
  );
}
