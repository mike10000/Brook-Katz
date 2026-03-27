import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vegan Links',
  description: 'Curated vegan links and South Florida resources from BrookKatz.com.',
};

const veganLinks = [
  { href: 'https://nutritionfacts.org', icon: '🦜', title: 'NutritionFacts.org', desc: "Dr. Michael Greger's evidence-based nutrition resource" },
  { href: 'https://www.doctorklaper.com', icon: '🩺', title: 'Dr. Michael Klaper', desc: 'Plant-based physician and nutrition educator' },
  { href: 'https://earthsavemiami.org', icon: '🌍', title: 'EarthSave Miami', desc: 'Local chapter promoting healthy, plant-based food choices' },
  { href: 'https://americanvegan.org', icon: '🌿', title: 'American Vegan Society', desc: 'National organization promoting vegan living since 1960' },
  { href: 'https://www.pcrm.org', icon: '📚', title: 'PCRM', desc: 'Physicians Committee for Responsible Medicine' },
  { href: 'https://www.happycow.net', icon: '🥗', title: 'HappyCow', desc: 'Find vegan and vegetarian restaurants worldwide' },
  { href: 'https://www.peta.org', icon: '🐾', title: 'PETA', desc: 'People for the Ethical Treatment of Animals' },
  { href: 'https://veganoutreach.org', icon: '🙌', title: 'Vegan Outreach', desc: 'Working to end animal cruelty through advocacy' },
];

const sflLinks = [
  { href: 'https://earthsavemiami.org', icon: '🌴', title: 'EarthSave North Events', desc: 'Monthly plant-based events in Tamarac, FL' },
  { href: '#', icon: '🍽️', title: 'Greenwave Cafe', desc: 'Local vegan restaurant featuring raw food options' },
  { href: '#', icon: '📍', title: 'Tamarac Community Center', desc: 'Paradise Ballroom — 8601 W. Commercial Blvd, Tamarac' },
  { href: '#', icon: '🌱', title: 'South Florida Vegan Community', desc: 'Local groups and meetups for plant-based enthusiasts' },
];

function LinkCard({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-primary-dark">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </a>
  );
}

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">Vegan Links</h1>
      <p className="mt-2 text-lg text-gray-500">
        Brook&apos;s curated collection of vegan resources, organizations, and educational websites.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {veganLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>

      <h2 id="sflinks" className="font-display mt-16 text-3xl font-bold text-primary-dark">
        South Florida Links
      </h2>
      <p className="mt-2 text-gray-500">Local vegan resources in the South Florida area.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sflLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}
