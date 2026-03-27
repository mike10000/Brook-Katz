import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, formatWpDate } from '@/lib/wordpress';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title?.rendered || 'Blog Post',
    description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-semibold text-primary hover:text-accent"
      >
        &larr; Back to Blog
      </Link>

      <header>
        <time className="text-sm font-semibold text-accent">{formatWpDate(post.date)}</time>
        <h1
          className="font-display mt-2 text-4xl font-bold text-primary-dark"
          dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
        />
      </header>

      {featuredImage && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={featuredImage}
            alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title?.rendered || ''}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      )}

      <div
        className="prose prose-lg mt-8 max-w-none prose-headings:text-primary-dark prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: post.content?.rendered || post.excerpt?.rendered || '' }}
      />
    </article>
  );
}
