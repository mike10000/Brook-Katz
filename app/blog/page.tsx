import type { Metadata } from 'next';
import BlogPostCard from '@/components/BlogPostCard';
import { getPostsWithFallback } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Latest updates and posts from Brook Katz's blog.",
};

export default async function BlogPage() {
  const posts = await getPostsWithFallback(20);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">From the Blog</h1>
      <p className="mt-2 text-lg text-gray-500">
        Latest updates, recipes, events, and plant-based living wisdom from Brook.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
