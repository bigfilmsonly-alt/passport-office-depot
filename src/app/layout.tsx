import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { BottomTabBar } from '@/components/BottomTabBar';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  variable: '--font-hanken',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Passport Office Depot | Fast & Affordable Passport & Visa Expediting Since 1976',
    template: '%s | Passport Office Depot',
  },
  description:
    "America's most affordable passport & visa expediting service. BBB A+ rated, 99.8% success rate. New passports, renewals, child passports & travel visas. Free passport photos included.",
  keywords: [
    'passport expediting',
    'fast passport',
    'passport renewal',
    'visa expediting',
    'emergency passport',
    'passport photos',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Passport Office Depot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'The POD — Passport Office Depot',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Office Depot | Fast & Affordable Passport & Visa Expediting Since 1976',
    description: "America's most affordable passport & visa expediting service. BBB A+ rated, 99.8% success rate.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/pod-logo.png',
    apple: '/pod-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper text-ink font-body antialiased">
        <AnalyticsProvider />
        {/* iPhone-style app shell */}
        <div className="mx-auto max-w-[430px] min-h-screen relative bg-paper shadow-2xl">
          <main className="pb-safe">{children}</main>
          <BottomTabBar />
          {/* Home indicator */}
          <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-ink/20 rounded-full z-[60] max-w-[430px]" />
        </div>
      </body>
    </html>
  );
}
