'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">Contact Brook</h1>

      <div className="mt-8 rounded-r-xl border-l-4 border-primary bg-gradient-to-r from-emerald-50 to-green-50 p-6">
        <p className="leading-relaxed text-gray-700">
          Brook Katz is available for speaking engagements, cooking demonstrations, event catering,
          and consultations on plant-based nutrition and healthy living.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary-dark">Follow Online</h3>
        <p className="mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent"
          >
            Facebook
          </a>{' '}
          — Updates, event photos, and community news
        </p>
        <p className="mt-1">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent"
          >
            YouTube
          </a>{' '}
          — Cooking videos and demonstrations
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary-dark">Speaking Topics</h3>
        <ul className="mt-2 list-disc pl-6 text-gray-600">
          <li>Whole Foods as Medicine</li>
          <li>Tips from a Thirty-Year Vegan</li>
          <li>Preparing Vegan Cuisine for Friends or Family</li>
          <li>The Science of Being Vegan</li>
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary-dark">Event Location</h3>
        <p className="mt-2 text-gray-600">Most EarthSave North events are held at:</p>
        <p className="mt-2 font-medium">
          <strong>Tamarac Community Center</strong>
          <br />
          Paradise Ballroom
          <br />
          8601 W. Commercial Blvd
          <br />
          Tamarac, FL 33351
        </p>
      </div>

      <h2 className="font-display mt-12 text-2xl font-bold text-primary-dark">Send a Message</h2>
      {submitted ? (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="mb-1 block font-semibold">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 font-sans"
            />
          </div>
          <div>
            <label className="mb-1 block font-semibold">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 font-sans"
            />
          </div>
          <div>
            <label className="mb-1 block font-semibold">Message</label>
            <textarea
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 font-sans"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
