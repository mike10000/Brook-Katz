import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import EventCard from '@/components/EventCard';
import BlogPostCard from '@/components/BlogPostCard';
import HeroOrganicCanvas from '@/components/HeroOrganicCanvas';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getPostsWithFallback, getEventsWithFallback } from '@/lib/wordpress';

const exploreCards = [
  {
    href: '/bio',
    icon: '🧘',
    title: "About Brook",
    description:
      "Healer, teacher, and vegan chef dedicated to promoting plant-based living through food and education in South Florida.",
  },
  {
    href: '/books',
    icon: '📚',
    title: "Brook's Books",
    description:
      'Explore cookbooks including "New Favorites" — packed with plant-based recipes and wisdom from decades of vegan cooking.',
  },
  {
    href: '/recipes',
    icon: '🍽️',
    title: "Brook's Recipes",
    description:
      'Delicious vegan recipes including holiday menus, everyday meals, and gourmet plant-based creations.',
  },
  {
    href: '/links',
    icon: '🔗',
    title: 'Vegan Links',
    description:
      'Curated collection of the best vegan resources, organizations, and plant-based lifestyle information online.',
  },
  {
    href: '/events',
    icon: '📅',
    title: 'South Florida Events',
    description:
      'EarthSave North events, Try Vegan buffets, lectures, and community gatherings in the Tamarac area.',
  },
  {
    href: '/links#sflinks',
    icon: '🌴',
    title: 'South Florida Links',
    description:
      'Local vegan restaurants, organizations, health resources, and community groups in South Florida.',
  },
];

export default async function HomePage() {
  const [posts, events] = await Promise.all([
    getPostsWithFallback(6),
    getEventsWithFallback(10),
  ]);

  return (
    <>
      <HeroOrganicCanvas />

      <section id="home-content" className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-10 md:p-8">
          <div className="relative mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl bg-gray-100 md:mx-0 md:max-w-[240px]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/brook/brook-vegfest.png"
                alt="Brook Katz outdoors at a vegan festival in South Florida"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 240px"
                priority
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <h2 className="font-display text-2xl font-bold text-primary-dark md:text-3xl">
              Meet Brook Katz
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Healer, teacher, and vegan chef — feeding and educating thousands across South Florida
              through EarthSave North, cookbooks like <em>New Favorites</em>, and free community
              events.
            </p>
            <Link
              href="/bio"
              className="mt-5 inline-block font-semibold text-primary transition hover:text-accent"
            >
              About Brook &amp; photo gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-primary-dark">Explore</h2>
        <p className="mt-2 text-gray-500">
          Discover plant-based living through recipes, events, and community resources.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, i) => (
            <div
              key={card.href}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-primary-dark">From the Blog</h2>
        <p className="mt-2 text-gray-500">Latest updates from Brook&apos;s blog.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-lg font-semibold text-primary transition hover:text-accent"
          >
            View All Posts &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-primary-dark">Recent Events</h2>
        <p className="mt-2 text-gray-500">South Florida plant-based community happenings.</p>
        <div className="mt-10 space-y-4">
          {events.slice(0, 6).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/events"
            className="text-lg font-semibold text-primary transition hover:text-accent"
          >
            View Full Event Archive &rarr;
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
