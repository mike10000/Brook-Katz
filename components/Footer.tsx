import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-primary-dark text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition hover:text-accent"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition hover:text-accent"
          >
            YouTube
          </a>
          <Link href="/contact" className="text-sm transition hover:text-accent">
            Contact
          </Link>
          <Link href="/bio" className="text-sm transition hover:text-accent">
            About Brook
          </Link>
          <Link href="/recipes" className="text-sm transition hover:text-accent">
            Recipes
          </Link>
          <Link href="/events" className="text-sm transition hover:text-accent">
            Events
          </Link>
        </div>
        <p className="text-sm text-white/60">Copyright &copy; 2015–{new Date().getFullYear()} BrookKatz.com</p>
      </div>
    </footer>
  );
}
