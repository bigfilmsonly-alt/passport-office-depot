import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { BottomTabBar } from '@/components/BottomTabBar';
import { AIAssistant } from '@/components/AIAssistant';
import { Footer } from '@/components/Footer';
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
  metadataBase: new URL('https://passportofficedepot.com'),
  title: {
    default: 'Passport Office Depot | Fast & Affordable Passport & Visa Expediting Since 1976',
    template: '%s | Passport Office Depot',
  },
  description:
    "America's most affordable passport & visa expediting service since 1976. BBB A+ rated, 99.8% success rate. Passport renewals, new passports, child passports, emergency passports & travel visas for 200+ countries. Free passport photos included. 100% on-time money-back guarantee.",
  keywords: [
    'passport expediting',
    'fast passport',
    'passport renewal',
    'expedited passport renewal',
    'emergency passport',
    'visa expediting',
    'passport photos',
    'passport office',
    'travel visa',
    'passport renewal near me',
    'how to renew passport fast',
    'expedited passport service',
    'passport expediting service near me',
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
    description: "America's most affordable passport & visa expediting. BBB A+ rated. 100% on-time guarantee.",
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
          <main className="pb-safe">
            {children}
            <Footer />
          </main>
          <AIAssistant />
          <BottomTabBar />
          {/* Home indicator */}
          <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-ink/20 rounded-full z-[60] max-w-[430px]" />
        </div>
      </body>
    </html>
  );
}
