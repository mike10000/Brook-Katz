import type { Metadata } from 'next';
import { DM_Sans, Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import AppShell from '@/components/AppShell';

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

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-plus-jakarta',
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
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${fraunces.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-screen bg-[#faf9f6] font-sans text-gray-800 antialiased">
        <Suspense fallback={null}>
          <AppShell>
            <main>{children}</main>
          </AppShell>
        </Suspense>
      </body>
    </html>
  );
}
