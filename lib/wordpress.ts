const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WPEvent {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    event_date?: string;
    event_time?: string;
    event_location?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const fetchOptions: RequestInit = {
  next: { revalidate: 60 },
  headers: {
    'Content-Type': 'application/json',
  },
};

async function wpFetch<T>(endpoint: string): Promise<T | null> {
  if (!WP_URL) return null;
  try {
    const res = await fetch(`${WP_URL.replace(/\/$/, '')}/wp-json/wp/v2${endpoint}`, fetchOptions);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getPosts(perPage = 10, page = 1): Promise<WPPost[]> {
  const data = await wpFetch<WPPost[]>(`/posts?per_page=${perPage}&page=${page}&_embed`);
  return Array.isArray(data) ? data : [];
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await wpFetch<WPPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (Array.isArray(data) && data.length > 0) return data[0];
  return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getEvents(perPage = 20): Promise<WPEvent[]> {
  const data = await wpFetch<WPEvent[]>(`/events?per_page=${perPage}&_embed`);
  return Array.isArray(data) ? data : [];
}

export async function getEventBySlug(slug: string): Promise<WPEvent | null> {
  const data = await wpFetch<WPEvent[]>(`/events?slug=${encodeURIComponent(slug)}&_embed`);
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

export function formatWpDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Static fallback when WordPress is not configured
const FALLBACK_EVENTS: WPEvent[] = [
  { id: 1, date: '2020-02-22', slug: 'dr-greger-earthsave', title: { rendered: 'Dr. Greger at EarthSave North' }, content: { rendered: '' }, excerpt: { rendered: 'Dr. Michael Greger presents How Not to Diet.' } },
  { id: 2, date: '2019-12-27', slug: 'hello-vegan-2020', title: { rendered: 'Hello Vegan 2020 — Holiday Party' }, content: { rendered: '' }, excerpt: { rendered: 'End-of-year celebration with buffet and mystery gift exchange at Tamarac Community Center.' } },
  { id: 3, date: '2019-11-22', slug: 'thanksgiving-2019', title: { rendered: 'Plant-Based No-Turkey Thanksgiving' }, content: { rendered: '' }, excerpt: { rendered: 'Full Thanksgiving menu by Chef Katz: seitan, chestnut stuffing, cranberry sauce, candied sweet potatoes.' } },
  { id: 4, date: '2019-10-19', slug: 'halloween-2019', title: { rendered: 'TryVegan Halloween Contest' }, content: { rendered: '' }, excerpt: { rendered: 'Lecture by Raoul Valle of Greenwave Cafe on Benefits of Raw Vegan Food.' } },
  { id: 5, date: '2019-09-27', slug: 'september-2019', title: { rendered: 'Try Vegan Buffet-Lecture-Partee-Roast' }, content: { rendered: '' }, excerpt: { rendered: 'Menu by Chef Katz, lecture by Debra Tendrich. Birthday Partee for mascot Erthy and VeganMan.' } },
  { id: 6, date: '2019-08-30', slug: 'august-2019', title: { rendered: 'Try-Veganville Birthday Buffet Partee' }, content: { rendered: '' }, excerpt: { rendered: '$5 fundraiser with Chef Katz, Host Stu Edelman, and VeganMan.' } },
  { id: 7, date: '2019-07-26', slug: 'july-2019', title: { rendered: 'Try-Veganville Free Buffet' }, content: { rendered: '' }, excerpt: { rendered: 'Free community buffet in Tamarac with Chef Brook Katz and Emcee VeganMan.' } },
  { id: 8, date: '2019-06-28', slug: 'june-2019', title: { rendered: 'VeganvilleTV Free Movie Night' }, content: { rendered: '' }, excerpt: { rendered: 'Movie night with vegan buffet — making veganism fun, accessible, and stress-free.' } },
  { id: 9, date: '2019-05-31', slug: 'may-2019', title: { rendered: 'EarthSave North May 2019' }, content: { rendered: '' }, excerpt: { rendered: 'Speaker Thierry Brower Chef T. Brook prepared an almost all-raw dinner in his honor.' } },
];

const FALLBACK_POSTS: WPPost[] = [
  { id: 1, date: '2020-02-15', slug: 'dr-greger-earthsave', title: { rendered: 'Dr. Greger at EarthSave North 2/22/20' }, excerpt: { rendered: 'Dr. Michael Greger has a new book: How Not to Diet. RSVP via earthsavemiami.org.' }, content: { rendered: '<p>Dr. Michael Greger has a new book: <em>How Not to Diet</em>. Please RSVP via earthsavemiami.org for this exciting lecture event at EarthSave North.</p>' } },
  { id: 2, date: '2019-12-14', slug: 'earthsave-12-2019', title: { rendered: 'EarthSave North 12/27/2019' }, excerpt: { rendered: 'December 27, 5 – 8:30 PM at Tamarac Community Center. Hello Vegan 2020 party/buffet.' }, content: { rendered: '<p>December 27, 5 – 8:30 PM at Tamarac Community Center, Paradise Ballroom — 8601 W. Commercial Blvd, Tamarac 33351. Hello Vegan 2020 party/buffet with mystery gift exchange — bring a wrapped gift worth $5.</p>' } },
  { id: 3, date: '2019-12-14', slug: 'dr-gregers-new-book', title: { rendered: "Dr. Greger's New Book" }, excerpt: { rendered: '#HowNotToDiet — Available now. Follow @nutrition_facts on Twitter.' }, content: { rendered: '<p>#HowNotToDiet — Available now. Follow @nutrition_facts on Twitter and @nutritionfacts.org on Facebook for updates.</p>' } },
  { id: 4, date: '2019-11-11', slug: 'thanksgiving-2019', title: { rendered: 'EarthSave North November 2019' }, excerpt: { rendered: 'Plant-based Thanksgiving No-Turkey event. Menu by Chef Katz.' }, content: { rendered: '<p>Plant-based Thanksgiving No-Turkey event. November 22, 5 PM at Tamarac Community Center. Menu by Chef Katz: sliced seitan with mushroom gravy, chestnut stuffing, cranberry sauce, candied sweet potatoes, green bean casserole, and more.</p>' } },
  { id: 5, date: '2019-10-17', slug: 'october-2019', title: { rendered: 'October 2019 EarthSave North – Saturday 10/19' }, excerpt: { rendered: 'TryVegan Buffet-Valle-Lecture-Demo-Halloween Contest.' }, content: { rendered: '<p>TryVegan Buffet-Valle-Lecture-Demo-Halloween Contest. Lecture-Demo by Raoul Valle of Greenwave Cafe on "Benefits of Raw Vegan Food," plus Halloween Costume Contest and Minifest.</p>' } },
];

export async function getPostsWithFallback(perPage = 10, page = 1): Promise<WPPost[]> {
  const posts = await getPosts(perPage, page);
  if (posts.length > 0) return posts;
  return FALLBACK_POSTS.slice(0, perPage);
}

export async function getEventsWithFallback(perPage = 20): Promise<WPEvent[]> {
  const events = await getEvents(perPage);
  if (events.length > 0) return events;
  return FALLBACK_EVENTS.slice(0, perPage);
}
