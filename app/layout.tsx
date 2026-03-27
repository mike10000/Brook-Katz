import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BrookKatz.com – Healer, Teacher, Vegan Chef in South Florida',
    template: '%s – BrookKatz.com',
  },
  description:
    'Healthy Lifestyle Events, Recipes and More. Brook Katz – Healer, Teacher, Vegan Chef in South Florida.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-[#faf9f6] font-sans text-gray-800 antialiased">
        <Suspense fallback={<header className="h-18 bg-gradient-to-br from-primary-dark to-primary" />}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
