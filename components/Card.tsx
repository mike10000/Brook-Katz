import Link from 'next/link';

interface CardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function Card({ href, icon, title, description }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 text-5xl transition group-hover:from-emerald-100 group-hover:to-green-100">
        {icon}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-primary-dark">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-500">{description}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-primary transition group-hover:text-accent">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
