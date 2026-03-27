'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setMessage(data.message || 'Thanks for subscribing!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Join the Newsletter
        </h2>
        <p className="mt-2 text-lg opacity-90">
          Get recipes, event updates, and plant-based living tips delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="mt-8 rounded-xl bg-white/20 px-6 py-4 backdrop-blur-sm">
            <p className="font-semibold text-white">✓ {message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
              className="min-w-0 flex-1 rounded-lg border-2 border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 sm:max-w-xs"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-primary transition hover:bg-white/95 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && message && (
          <p className="mt-3 text-sm text-amber-200">{message}</p>
        )}
      </div>
    </section>
  );
}
