import Link from 'next/link';
import Image from 'next/image';
import { formatWpDate } from '@/lib/wordpress';
import type { WPPost } from '@/lib/wordpress';

interface BlogPostCardProps {
  post: WPPost;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const excerpt = stripHtml(post.excerpt?.rendered || post.content?.rendered || '').slice(0, 160);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      {featuredImage ? (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={featuredImage}
            alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title?.rendered || ''}
            fill
            className="object-cover transition group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 text-4xl">
          &#128218;
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-sm font-semibold text-accent">{formatWpDate(post.date)}</div>
        <h3 className="mb-2 text-lg font-semibold text-primary-dark line-clamp-2 transition group-hover:text-primary">
          {post.title?.rendered}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">{excerpt}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-primary transition group-hover:text-accent">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
